/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from 'chai';
import { LocationIq } from '../src/';

const locationiq = new LocationIq({
    token: '2626c366a08184',
});

describe('search', function() {
    it('add', async() => {
        const response = await locationiq.search('Av Aristoteles de Menezes, 33');
        expect(response.status).equal(200);
    });
});