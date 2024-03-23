declare namespace google.maps {
    export class LatLng {
        constructor(lat: number, lng: number);
    }

    export class Map {
        constructor(mapDiv: HTMLElement, opts?: MapOptions);
    }

    export class Marker {
        constructor(opts?: MarkerOptions);
        setMap(map: Map | null): void;
        setPosition(latLng: LatLng | null): void;
    }

    export interface MapOptions {
        zoom?: number;
        center?: LatLng;
    }

    export interface MarkerOptions {
        position?: LatLng;
        map?: Map;
        title?: string;
    }
}
