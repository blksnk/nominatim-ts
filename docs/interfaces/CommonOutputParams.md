[nominatim-ts](../README.md) / [Exports](../modules.md) / CommonOutputParams

# Interface: CommonOutputParams

Enable additional output details for query results

## Hierarchy

- [`OutputDetailsParams`](OutputDetailsParams.md)

- [`AdditionalParams`](AdditionalParams.md)

- [`PolygonParams`](PolygonParams.md)

  ↳ **`CommonOutputParams`**

  ↳↳ [`NominatimLookupParams`](NominatimLookupParams.md)

  ↳↳ [`NominatimReverseParams`](NominatimReverseParams.md)

  ↳↳ [`SearchParams`](SearchParams.md)

## Table of contents

### Properties

- [accept-langage](CommonOutputParams.md#accept-langage)
- [addressdetails](CommonOutputParams.md#addressdetails)
- [debug](CommonOutputParams.md#debug)
- [email](CommonOutputParams.md#email)
- [extratags](CommonOutputParams.md#extratags)
- [format](CommonOutputParams.md#format)
- [namedetails](CommonOutputParams.md#namedetails)
- [polygon\_geojson](CommonOutputParams.md#polygon_geojson)
- [polygon\_kml](CommonOutputParams.md#polygon_kml)
- [polygon\_svg](CommonOutputParams.md#polygon_svg)
- [polygon\_text](CommonOutputParams.md#polygon_text)
- [polygon\_threshold](CommonOutputParams.md#polygon_threshold)

## Properties

### accept-langage

• `Optional` **accept-langage**: `string`

Preferred language order for showing search results
Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.

#### Inherited from

[AdditionalParams](AdditionalParams.md).[accept-langage](AdditionalParams.md#accept-langage)

#### Defined in

[src/types/queries/shared.ts:49](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L49)

___

### addressdetails

• `Optional` **addressdetails**: ``0`` \| ``1``

Include a breakdown of the address into elements

**`Default Value`**

`0`

#### Inherited from

[OutputDetailsParams](OutputDetailsParams.md).[addressdetails](OutputDetailsParams.md#addressdetails)

#### Defined in

[src/types/queries/shared.ts:77](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L77)

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

[AdditionalParams](AdditionalParams.md).[debug](AdditionalParams.md#debug)

#### Defined in

[src/types/queries/shared.ts:65](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L65)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Inherited from

[AdditionalParams](AdditionalParams.md).[email](AdditionalParams.md#email)

#### Defined in

[src/types/queries/shared.ts:55](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L55)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Inherited from

[OutputDetailsParams](OutputDetailsParams.md).[extratags](OutputDetailsParams.md#extratags)

#### Defined in

[src/types/queries/shared.ts:83](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L83)

___

### format

• `Optional` **format**: ``"json"`` \| ``"jsonv2"`` \| ``"geojson"`` \| ``"geocodejson"``

Dictates api response format

**`Default Value`**

`jsonv2`

**`See`**

[ResponseFormat](../modules.md#responseformat)

#### Defined in

[src/types/queries/shared.ts:104](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L104)

___

### namedetails

• `Optional` **namedetails**: ``0`` \| ``1``

Include a list of alternative names in the results.
These may include language variants, references, operator and brand.

**`Default Value`**

`0`

#### Inherited from

[OutputDetailsParams](OutputDetailsParams.md).[namedetails](OutputDetailsParams.md#namedetails)

#### Defined in

[src/types/queries/shared.ts:90](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L90)

___

### polygon\_geojson

• `Optional` **polygon\_geojson**: ``1``

#### Inherited from

[PolygonParams](PolygonParams.md).[polygon_geojson](PolygonParams.md#polygon_geojson)

#### Defined in

[src/types/queries/shared.ts:27](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L27)

___

### polygon\_kml

• `Optional` **polygon\_kml**: ``1``

#### Inherited from

[PolygonParams](PolygonParams.md).[polygon_kml](PolygonParams.md#polygon_kml)

#### Defined in

[src/types/queries/shared.ts:28](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L28)

___

### polygon\_svg

• `Optional` **polygon\_svg**: ``1``

#### Inherited from

[PolygonParams](PolygonParams.md).[polygon_svg](PolygonParams.md#polygon_svg)

#### Defined in

[src/types/queries/shared.ts:29](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L29)

___

### polygon\_text

• `Optional` **polygon\_text**: ``1``

#### Inherited from

[PolygonParams](PolygonParams.md).[polygon_text](PolygonParams.md#polygon_text)

#### Defined in

[src/types/queries/shared.ts:30](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L30)

___

### polygon\_threshold

• `Optional` **polygon\_threshold**: `number`

Return a simplified version of the output geometry.
The parameter is the tolerance in degrees with which the geometry may differ from the original geometry.
Topology is preserved in the result.

**`Default Value`**

`0.0`

#### Inherited from

[PolygonParams](PolygonParams.md).[polygon_threshold](PolygonParams.md#polygon_threshold)

#### Defined in

[src/types/queries/shared.ts:41](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L41)
