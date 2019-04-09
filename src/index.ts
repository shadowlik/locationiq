import Axios, { AxiosInstance, AxiosResponse } from 'axios';

enum Bool {
    true = 1,
    false = 2
}

export interface LocationIqOptions {
    /**
     * API Token
     */
    token: string;

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

export interface LocationIqSearch {
    street?: string;
    city?: string;
    county?: string;
    state?: string;
    country?: string;
    postalcode?: string;
    viewbox?: string;
    bounded?: string;
    addressdetails?: Bool;
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

export interface LocationIqReverse {
    lat: number;
    lng: number;
}

export class LocationIq {
    private token: string;
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
            token,
        } = options;

        this.token = token;

        // Check if
        if (region === 'eu1') this.region = region;

        this.basePath = `https://${this.region}.locationiq.com/v1/`;

        if (!token && token.length === 0) {
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
            key: this.token,
        }
    }

    /**
     * Success handler
     *
     * @private
     * @param {AxiosResponse} response
     * @returns {*}
     * @memberof LocationIq
     */
    private success(response: AxiosResponse): any {
        return {
            status: 200,
            results: response.data,
            total: response.data.length,
        };
    };

    /**
     * Error handler
     *
     * @private
     * @param {Error} error
     * @returns {Error}
     * @memberof LocationIq
     */
    private error(error: Error): Error {
        return error;
    };

    /**
     * Search / Forward Geocoding
     *
     * The Search API allows converting addresses, such as a street address,
     * into geographic coordinates (latitude and longitude).
     *
     * @param {LocationIqSearch} options
     * @memberof LocationIq
     */
    async search(searchParams: LocationIqSearch | string ): Promise<any> {
        try {
            let params: { [x: string]: any } = {};

            if (typeof searchParams !== 'string') {
                const {
                    street,
                    city,
                    county,
                    state,
                    country,
                    postalcode,
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
                } = searchParams as LocationIqSearch;

                if (street) params.street = street;
                if (city) params.city = city;
                if (county) params.county = county;
                if (state) params.state = state;
                if (country) params.country = country;
                if (postalcode) params.postalcode = postalcode;
                if (viewbox) params.viewbox = viewbox;
                if (bounded) params.bounded = bounded;
                if (addressdetails) params.addressdetails = addressdetails;
                if (limit) params.limit = limit;
                if (acceptLanguage) params.acceptLanguage = acceptLanguage;
                if (countrycodes) params.countrycodes = countrycodes;
                if (namedetails) params.namedetails = namedetails;
                if (dedupe) params.dedupe = dedupe;
                if (polygonGeojson) params.polygonGeojson = polygonGeojson;
                if (polygonKml) params.polygonKml = polygonKml;
                if (polygonSvg) params.polygonSvg = polygonSvg;
                if (polygonText) params.polygonText = polygonText;
                if (extratags) params.extratags = extratags;
                if (excludePlaceIds) params.excludePlaceIds = excludePlaceIds;
                if (normalizecity) params.normalizecity = normalizecity;

            } else {
                // Query string only
                if (searchParams.length === 0 || Array.isArray(searchParams)) {
                    throw Error('Please provide a valid search string');
                }

                params.q = searchParams;
            };

            const response = await this.request.get('search.php', {
                params,
            });

            return this.success(response);

        } catch (error) {
            return this.error(error as Error);
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
    reverse(options: LocationIqReverse): void {
        this.request.get('reverse.php');
    }
}