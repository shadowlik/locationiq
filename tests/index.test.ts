/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from 'chai';
import { LocationIq } from '../src/';

describe('locationiq', () => {
    it('New instance without token', function() {
        expect(() => new LocationIq({ token: '' })).to.throw();
    });
});

describe('search', function() {
    const locationiq = new LocationIq({
        token: '2626c366a08184',
    });

    it('Search by query', async() => {
        const response = await locationiq.search('Av Aristoteles de Menezes, 33');
        expect(response.status).equal(200);
    });

    it('Search by structured data', async() => {
        const response = await locationiq.search({
            postalcode: '05415-001',
            street: 'Joaquim Antunes, 796',
        });
        expect(response.status).equal(200);
    });

    it('Search by empty query', function() {
        expect(async () => await locationiq.search('')).to.throw();;
    });
});