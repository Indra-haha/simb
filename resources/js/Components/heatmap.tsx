import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Wilayah {
  nama: string;
  level: "merah" | "kuning" | "hijau";
  geometry?: GeoJSON.Geometry;
}

const warnaLevel: Record<Wilayah["level"], string> = {
  merah: "#ff3333",
  kuning: "#ffe600",
  hijau: "#00cc66",
};

const wilayahDIY: Wilayah[] = [
  { nama: "Kabupaten Gunungkidul", level: "merah" },
  { nama: "Kota Yogyakarta", level: "kuning" },
  { nama: "Kabupaten Bantul", level: "hijau" },
  { nama: "Kabupaten Sleman", level: "hijau" },
  { nama: "Kabupaten Kulon Progo", level: "hijau" },
];

interface NominatimResponse {
  features?: {
    geometry: GeoJSON.Geometry;
    [key: string]: any;
  }[];
}

async function getPolygon(namaWilayah: string): Promise<GeoJSON.Geometry | null> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    namaWilayah
  )}&format=geojson&polygon_geojson=1`;

  const res = await fetch(url, {
    headers: { "User-Agent": "react-app" },
  });

  const data: NominatimResponse = await res.json();
  return data.features?.[0]?.geometry || null;
}

export default function PetaDIY() {
  const [polygons, setPolygons] = useState<Wilayah[]>([]);

  useEffect(() => {
    async function load() {
      const hasil: Wilayah[] = [];

      for (const w of wilayahDIY) {
        const geo = await getPolygon(w.nama);
        if (geo) {
          hasil.push({
            ...w,
            geometry: geo,
          });
        }
      }

      setPolygons(hasil);
    }

    load();
  }, []);

  return (
    <MapContainer
      center={[-7.7956, 110.3695]}
      zoom={10}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {polygons.map((p, i) =>
        p.geometry ? (
          <GeoJSON
            key={i}
            data={p.geometry as any}
            style={() => ({
              color: "#333",
              weight: 1,
              fillColor: warnaLevel[p.level],
            })}
          />
        ) : null
      )}
    </MapContainer>
  );
}
