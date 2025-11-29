declare module "react-leaflet" {
  import { Component } from "react";
  import { MapOptions, GeoJSON as LeafletGeoJSON } from "leaflet";

  // MapContainer
  export interface MapContainerProps extends MapOptions {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    center?: [number, number];
    zoom?: number;
  }

  export class MapContainer extends Component<MapContainerProps> {}

  // TileLayer
  export interface TileLayerProps {
    url: string;
    attribution?: string;
  }
  export class TileLayer extends Component<TileLayerProps> {}

  // GeoJSON
  export interface GeoJSONProps {
    data: any;
    style?: (feature?: any) => any;
  }
  export class GeoJSON extends Component<GeoJSONProps> {}
}
