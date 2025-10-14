nominatim-ts / [Exports](modules.md)

# Nominatim-TS

A simple wrapper around OpenStreetMap's Nominatim API. Fully typed.

## Documentation

Nominatim-TS aims to replicate OpenStreetMap's [Nominatim API](https://nominatim.org/release-docs/develop/api/Overview/) as closely as possible,
while making its complex data model and various response formats play nice with any typescript project.

Full documentation and typings are available [here](https://github.com/blksnk/nominatim-ts/blob/main/docs/modules.md).

## Installation

This library runs on Node.js and is available as a NPM package.

```shell
npm install nominatim-ts
```

## Usage

Import the package to get started.

```typescript
import * as Nominatim from "nominatim-ts"
```

### Search

The `search` function allows you to search for places by name or address.

```typescript
const searchResults = await Nominatim.search({
  q: "Eiffel Tower",
  format: "json",
  limit: 1,
});
console.log(searchResults);
```

It maps one-to-one with nominatim's [Search API](https://nominatim.org/release-docs/latest/api/Search/#search-queries) endpoint.
As such, it supports all the parameters that the Search API does.

```typescript
const searchResults = await Nominatim.search({
  q: "Eiffel Tower",
  format: "json",
  limit: 1,
});
console.log(searchResults);
```

### Lookup

The `lookup` function retrieves details about specific OSM objects using their OSM IDs.

```typescript
const result = await Nominatim.lookup({
  osm_ids: ["R146656", "W104393803", "N240109189"],
  format: "json",
});
console.log(result);
```

### Reverse Geocoding

The `reverse` function converts geographic coordinates to a human-readable address.

```typescript
const address = await Nominatim.reverse({
  lat: 51.5074,
  lon: -0.1278,
  format: "json",
});
console.log(address);
```

### Status

The `status` function provides information about the Nominatim service status.

```typescript
const status = await Nominatim.status();
console.log(status);
```

For more detailed information on each function and its parameters, please refer to the [full documentation](https://github.com/blksnk/nominatim-ts/blob/main/docs/modules.md).
