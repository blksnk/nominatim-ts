[nominatim-ts](../README.md) / [Documentation](../modules.md) / NominatimLookupParams

# Interface: NominatimLookupParams

Enable additional output details for query results

## Hierarchy

- [`OSMIdsParams`](OSMIdsParams.md)

- [`CommonOutputParams`](CommonOutputParams.md)

  ↳ **`NominatimLookupParams`**

## Table of contents

### Properties

- [accept-langage](NominatimLookupParams.md#accept-langage)
- [addressdetails](NominatimLookupParams.md#addressdetails)
- [debug](NominatimLookupParams.md#debug)
- [email](NominatimLookupParams.md#email)
- [extratags](NominatimLookupParams.md#extratags)
- [format](NominatimLookupParams.md#format)
- [namedetails](NominatimLookupParams.md#namedetails)
- [osm\_ids](NominatimLookupParams.md#osm_ids)
- [polygon\_geojson](NominatimLookupParams.md#polygon_geojson)
- [polygon\_kml](NominatimLookupParams.md#polygon_kml)
- [polygon\_svg](NominatimLookupParams.md#polygon_svg)
- [polygon\_text](NominatimLookupParams.md#polygon_text)
- [polygon\_threshold](NominatimLookupParams.md#polygon_threshold)

## Properties

### accept-langage

• `Optional` **accept-langage**: `string`

Preferred language order for showing search results
Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[accept-langage](CommonOutputParams.md#accept-langage)

#### Defined in

[src/types/queries/shared.ts:46](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L46)

___

### addressdetails

• `Optional` **addressdetails**: ``0`` \| ``1``

Include a breakdown of the address into elements

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[addressdetails](CommonOutputParams.md#addressdetails)

#### Defined in

[src/types/queries/shared.ts:74](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L74)

___

### debug

• `Optional` **debug**: ``0`` \| ``1``

Output assorted developer debug information.
Data on internals of Nominatim's "Search Loop" logic, and SQL queries.

**`Remarks`**

The output is (rough) HTML format. This overrides the specified machine readable format.

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[debug](CommonOutputParams.md#debug)

#### Defined in

[src/types/queries/shared.ts:62](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L62)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[email](CommonOutputParams.md#email)

#### Defined in

[src/types/queries/shared.ts:52](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L52)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[extratags](CommonOutputParams.md#extratags)

#### Defined in

[src/types/queries/shared.ts:80](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L80)

___

### format

• `Optional` **format**: [`ResponseFormat`](../modules.md#responseformat)

Dictates api response format

**`Default Value`**

`jsonv2`

**`See`**

[ResponseFormat](../modules.md#responseformat)

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[format](CommonOutputParams.md#format)

#### Defined in

[src/types/queries/shared.ts:101](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L101)

___

### namedetails

• `Optional` **namedetails**: ``0`` \| ``1``

Include a list of alternative names in the results.
These may include language variants, references, operator and brand.

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[namedetails](CommonOutputParams.md#namedetails)

#### Defined in

[src/types/queries/shared.ts:87](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L87)

___

### osm\_ids

• **osm\_ids**: `string` \| [`OSMIdsQuery`](../modules.md#osmidsquery)

one or multiple OSM objects ids — like node, way or relation.

Must contain a comma-separated list of OSM ids each prefixed with its type,
one of node(N), way(W) or relation(R).

**`Remarks`**

Up to 50 ids can be queried at the same time.

**`See`**

[OSMIdQuery](../modules.md#osmidquery) for formatting

**`Example`**

```ts
`R146656`
`R146656,W104393803,N240109189`
```

#### Inherited from

[OSMIdsParams](OSMIdsParams.md).[osm_ids](OSMIdsParams.md#osm_ids)

#### Defined in

[src/types/queries/lookup.ts:79](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/lookup.ts#L79)

___

### polygon\_geojson

• `Optional` **polygon\_geojson**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_geojson](CommonOutputParams.md#polygon_geojson)

#### Defined in

[src/types/queries/shared.ts:24](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L24)

___

### polygon\_kml

• `Optional` **polygon\_kml**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_kml](CommonOutputParams.md#polygon_kml)

#### Defined in

[src/types/queries/shared.ts:25](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L25)

___

### polygon\_svg

• `Optional` **polygon\_svg**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_svg](CommonOutputParams.md#polygon_svg)

#### Defined in

[src/types/queries/shared.ts:26](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L26)

___

### polygon\_text

• `Optional` **polygon\_text**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_text](CommonOutputParams.md#polygon_text)

#### Defined in

[src/types/queries/shared.ts:27](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L27)

___

### polygon\_threshold

• `Optional` **polygon\_threshold**: `number`

Return a simplified version of the output geometry.
The parameter is the tolerance in degrees with which the geometry may differ from the original geometry.
Topology is preserved in the result.

**`Default Value`**

`0.0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_threshold](CommonOutputParams.md#polygon_threshold)

#### Defined in

[src/types/queries/shared.ts:38](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L38)
