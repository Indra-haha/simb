import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

interface Berita {
  id: number;
  kecamatan_name: string;
  region_name: string;
  province_name: string;
}

interface WilayahKecamatan {
  kecamatan_name: string;
  region_name: string;
  province_name: string;
  total: number;
  geometry?: GeoJSON.Geometry;
}

function formatKecamatan(name: string): string {
  if (!name) return "";
  return name.replace(/Kecamatan/i, "").trim();
}

function formatProvince(provinceName: string): string {
  if (!provinceName) return "Yogyakarta";
  if (/yogyakarta/i.test(provinceName)) return "Yogyakarta";
  return provinceName;
}

async function getPolygon(
  kecamatan: string,
  province: string
): Promise<GeoJSON.Geometry | null> {
  const kec = formatKecamatan(kecamatan);
  const prov = formatProvince(province);

  const query = `${kec},${prov},Indonesia`;

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query
  )}&format=geojson&polygon_geojson=1`;

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "react-app" },
    });

    const data = await res.json();
    return data.features?.[0]?.geometry || null;
  } catch (err) {
    console.error("❌ Gagal ambil polygon:", kec, err);
    return null;
  }
}

function getPolygonCenter(geometry: any): [number, number] {
  try {
    const coords =
      geometry.type === "Polygon"
        ? geometry.coordinates[0]
        : geometry.coordinates[0][0];

    let totalLat = 0;
    let totalLng = 0;

    coords.forEach((c: number[]) => {
      totalLat += c[1];
      totalLng += c[0];
    });

    return [totalLat / coords.length, totalLng / coords.length];
  } catch {
    return [-7.95, 110.65];
  }
}

function getColor(value: number, max: number) {
  const intensity = value / max;
  if (intensity > 0.66) return "#ff3333";
  if (intensity > 0.33) return "#ffcc33";
  return "#66ff99";
}

export default function HeatmapKecamatan() {
  const [polygons, setPolygons] = useState<WilayahKecamatan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("/berita");
        const data: Berita[] = res.data;

        const counter: Record<string, WilayahKecamatan> = {};

        data.forEach((b) => {
          if (!counter[b.kecamatan_name]) {
            counter[b.kecamatan_name] = {
              kecamatan_name: b.kecamatan_name,
              region_name: b.region_name,
              province_name: b.province_name,
              total: 0,
            };
          }
          counter[b.kecamatan_name].total++;
        });

        const sorted = Object.values(counter).sort((a, b) => b.total - a.total);

        const cache: Record<string, GeoJSON.Geometry | null> = {};
        let hasil: WilayahKecamatan[] = [];

        for (let item of sorted) {
          let geo = cache[item.kecamatan_name] ?? null;
          if (!geo) {
            geo = await getPolygon(item.kecamatan_name, item.province_name);
            cache[item.kecamatan_name] = geo;
          }
          hasil.push({
            ...item,
            geometry: geo ?? undefined,
          });
        }

        setPolygons(hasil);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const maxValue = polygons.length ? polygons[0].total : 1;

  if (loading) {
    return (
      <div
        style={{
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="loader"></div>
        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          Memuat Peta...
        </p>

        <style>
          {`
            .loader {
              border: 8px solid #e0e0e0;
              border-top: 8px solid #3498db;
              border-radius: 50%;
              width: 70px;
              height: 70px;
              animation: spin 0.9s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <>
      {/* ============================
          MAP
      ============================ */}
      <MapContainer
        center={[-7.95, 110.65]}
        zoom={10}
        style={{ height: "630px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {polygons.map((p, i) =>
          p.geometry ? (
            <>
              <GeoJSON
                key={"geo-" + i}
                data={p.geometry as any}
                style={() => ({
                  color: "#333",
                  weight: 1,
                  fillColor: getColor(p.total, maxValue),
                  fillOpacity: 0.65,
                })}
              />

              <Marker
                key={"label-" + i}
                position={getPolygonCenter(p.geometry)}
                icon={L.divIcon({
                  className: "label-kecamatan",
                  html: `<div style="
                    background: rgba(255,255,255,0.9);
                    padding: 4px 10px;
                    border-radius: 6px;
                    border: 1px solid #555;
                    font-size: 13px;
                    font-weight: 600;
                  ">${p.kecamatan_name}</div>`,
                })}
              >
                <Tooltip permanent direction="center">
                  {p.kecamatan_name}
                </Tooltip>
              </Marker>
            </>
          ) : null
        )}

        <style>
          {`
            .label-kecamatan {
              transform: translate(-50%, -50%);
            }
          `}
        </style>
      </MapContainer>

      {/* ======================================
           STATUS KECAMATAN (LEGENDA BAWAH MAP)
         ====================================== */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f7f7f7",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>
          📊 Status Kejadian per Kecamatan
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {polygons.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #ddd",
              }}
            >
              {/* Kotak warna status */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "4px",
                  background: getColor(p.total, maxValue),
                  border: "1px solid #555",
                }}
              ></div>

              <div>
                <strong>{p.kecamatan_name}</strong>
                <div style={{ fontSize: "14px", opacity: 0.7 }}>
                  Jumlah kejadian: {p.total}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
