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

        if (query) {

        }

        this.request.get('search.php');
    }
}
