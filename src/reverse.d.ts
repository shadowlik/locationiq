export interface LocationIqReverseRequest {
    lat: number;
    lng: number;
    zoom?: number;
    addressdetails?: boolean;
    namedetails?: boolean;
    acceptLanguage?: string;
    osm_type?: string;
    osm_id?: string;
    countrycodes?: string;
    polygonGeojson?: string;
    polygonKml?: string;
    polygonSvg?: string;
    polygonText?: string;
    extratags?: string;
    normalizecity?: boolean;
    statecode?: string;
}