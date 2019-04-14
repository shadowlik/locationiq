export interface LocationIqReverseRequest {
    lat: number;
    lon: number;
    zoom?: number;
    addressdetails?: boolean;
    namedetails?: boolean;
    acceptLanguage?: string;
    osm_type?: string;
    osm_id?: string;
    countrycodes?: string;
    polygon_geojson?: string;
    polygon_kml?: string;
    polygon_svg?: string;
    polygon_text?: string;
    extratags?: string;
    normalizecity?: boolean;
    statecode?: string;
}

/**
 * * Location IQ Search Response Interface
 *
 * @export
 * @interface LocationIqSearchResponse
 */
export interface LocationIqReverseResponse {
    status: number;
    total?: number;
    error?: string;
    results?: [{
        place_id?: string;
        licence?: string;
        osm_type?: string;
        osm_id?: string;
        boundingbox?: any[];
        lat?: number;
        lon?: number;
        display_name?: string;
        class?: string;
        type?: string;
        importance?: string;
        icon?: string;
        address?: string;
        extratags?: string;
        namedetails?: string;
        geojson?: string;
        geokml?: string;
        svg?: string;
        geotext?: string;
    }];
}