import Axios, { AxiosInstance } from 'axios';

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
    query: string;
    street: string;
    city: string;
    county: string;
    state: string;
    country: string;
    postalcode: string;
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
            throw Error('API Token is required');
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
     * Search / Forward Geocoding
     *
     * The Search API allows converting addresses, such as a street address,
     * into geographic coordinates (latitude and longitude).
     *
     * @param {LocationIqSearch} options
     * @memberof LocationIq
     */
    search(options: LocationIqSearch): void {
        const {
            query,
            street,
            city,
            county,
            state,
            country,
            postalcode,
        } = options;

        // viewbox
        // bounded
        // addressdetails
        // limit
        // accept-language
        // countrycodes
        // namedetails
        // dedupe
        // polygon_geojson
        // polygon_kml
        // polygon_svg
        // polygon_text
        // extratags
        // exclude_place_ids

        let params;
        if (query) {

        }

        this.request.get('search.php', {
            params,
        });
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
