import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LocationIqSearchRequest, LocationIqSearchResponse } from './search';
import { LocationIqReverseRequest } from './reverse';

export interface LocationIqOptions {
    /**
     * API Token
     */
    key: string;

    /**
     * Region (us1 or eu1)
     */
    region?: string;

    /**
     * Default request timeout
     */
    timeout?: number;

    /**
     * Return format, json or xml
     *
     * @type {string}
     * @memberof LocationIqOptions
     */
    format?: string;
}

export class LocationIq {
    private key: string;
    region: string = 'us1';
    basePath: string;
    timeout: number = 3000;
    request: AxiosInstance;
    format: string = 'json';

    /**
     * Creates an instance of LocationIq.
     *
     * @param {LocationIqOptions} options
     * @memberof LocationIq
     */
    constructor(options: LocationIqOptions) {
        const {
            region,
            key,
        } = options;

        this.key = key;

        // Check if
        if (region === 'eu1') this.region = region;

        this.basePath = `https://${this.region}.locationiq.com/v1/`;

        if (!key && key.length === 0) {
            throw new Error('API Token is required');
        }


        // Creates a custom instance of axios
        this.request = Axios.create({
            timeout: this.timeout,
            baseURL: this.basePath,
        });

        // Set the default parameters
        this.request.defaults.params = {
            format: this.format,
            key: this.key,
        }
    }

    /**
     * Search / Forward Geocoding
     *
     * The Search API allows converting addresses, such as a street address,
     * into geographic coordinates (latitude and longitude).
     *
     * @param {LocationIqSearch} options
     * @memberof LocationIq
     */
    async search(searchParams: LocationIqSearchRequest | string ): Promise<LocationIqSearchResponse> {
        try {
            let params: { [x: string]: any } = {};

            if (typeof searchParams === 'object' && !Array.isArray(searchParams)) {
                const {
                    street,
                    city,
                    county,
                    state,
                    country,
                    postalCode,
                    viewbox,
                    bounded,
                    addressdetails,
                    limit,
                    acceptLanguage,
                    countrycodes,
                    namedetails,
                    dedupe,
                    polygonGeojson,
                    polygonKml,
                    polygonSvg,
                    polygonText,
                    extratags,
                    excludePlaceIds,
                    normalizecity,
                } = searchParams as LocationIqSearchRequest;

                // Postalcode with Country Codes search
                if (postalCode && countrycodes) {
                    if (typeof countrycodes !== 'string' || countrycodes.length  !== 2) {
                        throw Error('Invalid country code');
                    };

                    params.countrycodes = countrycodes;
                    params.postalcode = postalCode;

                // Structure query
                } else {
                    if (street) params.street = street;
                    if (city) params.city = city;
                    if (county) params.county = county;
                    if (state) params.state = state;
                    if (country) params.country = country;
                    if (postalCode) params.postalcode = postalCode;
                    if (viewbox) params.viewbox = viewbox;
                    if (bounded) params.bounded = bounded;
                    if (addressdetails) params.addressdetails = addressdetails;
                    if (limit) params.limit = limit;
                    if (acceptLanguage) params.acceptLanguage = acceptLanguage;
                    if (namedetails) params.namedetails = namedetails;
                    if (dedupe) params.dedupe = dedupe;
                    if (polygonGeojson) params.polygonGeojson = polygonGeojson;
                    if (polygonKml) params.polygonKml = polygonKml;
                    if (polygonSvg) params.polygonSvg = polygonSvg;
                    if (polygonText) params.polygonText = polygonText;
                    if (extratags) params.extratags = extratags;
                    if (excludePlaceIds) params.excludePlaceIds = excludePlaceIds;
                    if (normalizecity) params.normalizecity = normalizecity;
                }

            } else {
                // Query string only
                if (typeof searchParams !== 'string' || searchParams.length === 0) {
                    throw new Error('Please provide a valid search string');
                }

                params.q = searchParams;
            };

            // Make the query
            const queryResponse: AxiosResponse = await this.request.get('search.php', {
                params,
            });

            // Build the success search response
            const response: LocationIqSearchResponse = {
                status: 200,
                results: queryResponse.data || [],
                total: queryResponse.data.length || 0,
            };

            return response;

        } catch (error) {
            // Build the error search response
            const response: LocationIqSearchResponse = {
                status: error.status as number || 400,
                error: error.message || error,
            }
            return response;
        }
    }

    /**
     * Reverse Geocoding
     *
     * Reverse geocoding is the process of converting a coordinate or location
     * (latitude, longitude) to a readable address or place name.
     *
     * @param {LocationIqReverse} options
     * @memberof LocationIq
     */
    reverse(options: LocationIqReverseRequest): void {
        this.request.get('reverse.php');
    }
}