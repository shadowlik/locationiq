# LocationIQ

> npm package for https://locationiq.com

Based on [LocationIQ documentation](https://locationiq.com/docs).

## Usage

> npm i -S locationiq

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