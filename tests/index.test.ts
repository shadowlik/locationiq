/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const chaiAsPromised = require("chai-as-promised");
import chai from 'chai';

import { LocationIq } from '../src/';

chai.use(chaiAsPromised);

const expect: any = chai.expect;

describe('locationiq', () => {
    it('New instance without token', function() {
        expect(() => new LocationIq({ key: '' })).to.throw();
    });
});

describe('search', function() {
    const locationiq = new LocationIq({
        key: '2626c366a08184',
    });

    it('Search by query', async() => {
        const response = await locationiq.search('Av Aristoteles de Menezes, 33');
        expect(response.status).equal(200);
    });

    it('Search by structured data', async() => {
        const response = await locationiq.search({
            postalCode: '05415-001',
            street: 'Joaquim Antunes, 796',
        });
        expect(response.status).equal(200);
    });

    it('Search by postal code success', async() => {
        const response = await locationiq.search({
            postalCode: '99820',
            countrycodes: 'US',
        });
        expect(response.status).equal(200);
    });

    it('Search by postal code error', async() => {
        const response = await locationiq.search({
            postalCode: '05415-001',
            countrycodes: 'BRA',
        });
        expect(response.status).equal(400);
    });

    it('Search by empty query', async() => {
        const response = await locationiq.search('');
        expect(response.status).equal(400);
    });
});