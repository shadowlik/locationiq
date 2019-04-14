/**
 * Location IQ Search Request Interface
 *
 * @export
 * @interface LocationIqSearchRequest
 */
export interface LocationIqSearchRequest {
    street?: string;
    city?: string;
    county?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    viewbox?: string;
    bounded?: string;
    addressdetails?: boolean;
    limit?: string;
    acceptLanguage?: string;
    countrycodes?: string;
    namedetails?: string;
    dedupe?: string;
    polygonGeojson?: string;
    polygonKml?: string;
    polygonSvg?: string;
    polygonText?: string;
    extratags?: string;
    excludePlaceIds?: string;
    normalizecity?: string;
}

/**
 * * Location IQ Search Response Interface
 *
 * @export
 * @interface LocationIqSearchResponse
 */
export interface LocationIqSearchResponse {
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