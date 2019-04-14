# LocationIQ

[![CircleCI](https://circleci.com/gh/shadowlik/locationiq/tree/master.svg?style=svg)](https://circleci.com/gh/shadowlik/locationiq/tree/master) [![Coverage Status](https://coveralls.io/repos/github/shadowlik/locationiq/badge.svg?branch=master)](https://coveralls.io/github/shadowlik/locationiq?branch=master)

> npm package for https://locationiq.com

- [LocationIQ API documentation](https://locationiq.com/docs).

## Usage

```bash
$ npm i -S locationiq
```

```javascript
// Javascript
const { LocatioIq } = require('locationiq');

// Typescript / ES6 Module
import { LocationIq } from 'locationiq';
```

## TL;DR;

```javascript
const locationiq = new require('locationiq')({
    token: 'token'
});

// Query based search
locationiq.search('Street Av. Prof Aristóteles de Menezes, Santos, São Paulo, Brasil');
```
## Search / Forward Geocoding

### Simple search

```javascript
locationiq.search('Av Aristoteles de Menezes, 40');
```

### Structure search

```javascript
locationiq.search({
    street: 'Av Aristoteles de Menezes',
    city: 'Santos',
    state: 'São Paulo',
    country: 'Brazil',
});
```

### Postal code search

```javascript
locationiq.search({
    postalCode: '05415-001',
    country: 'BR',
});
```