[nominatim-ts](../README.md) / [Exports](../modules.md) / NominatimReverseParams

# Interface: NominatimReverseParams

Enable additional output details for query results

## Hierarchy

- [`CoordinateParams`](CoordinateParams.md)

- [`CommonOutputParams`](CommonOutputParams.md)

- [`ReverseResultLimitationParams`](ReverseResultLimitationParams.md)

  ↳ **`NominatimReverseParams`**

## Table of contents

### Properties

- [accept-langage](NominatimReverseParams.md#accept-langage)
- [addressdetails](NominatimReverseParams.md#addressdetails)
- [debug](NominatimReverseParams.md#debug)
- [email](NominatimReverseParams.md#email)
- [extratags](NominatimReverseParams.md#extratags)
- [format](NominatimReverseParams.md#format)
- [lat](NominatimReverseParams.md#lat)
- [log](NominatimReverseParams.md#log)
- [namedetails](NominatimReverseParams.md#namedetails)
- [polygon\_geojson](NominatimReverseParams.md#polygon_geojson)
- [polygon\_kml](NominatimReverseParams.md#polygon_kml)
- [polygon\_svg](NominatimReverseParams.md#polygon_svg)
- [polygon\_text](NominatimReverseParams.md#polygon_text)
- [polygon\_threshold](NominatimReverseParams.md#polygon_threshold)
- [zoom](NominatimReverseParams.md#zoom)

## Properties

### accept-langage

• `Optional` **accept-langage**: `string`

Preferred language order for showing search results
Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[accept-langage](CommonOutputParams.md#accept-langage)

#### Defined in

[src/types/queries/shared.ts:49](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L49)

___

### addressdetails

• `Optional` **addressdetails**: ``0`` \| ``1``

Include a breakdown of the address into elements

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[addressdetails](CommonOutputParams.md#addressdetails)

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

[CommonOutputParams](CommonOutputParams.md).[debug](CommonOutputParams.md#debug)

#### Defined in

[src/types/queries/shared.ts:65](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L65)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[email](CommonOutputParams.md#email)

#### Defined in

[src/types/queries/shared.ts:55](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L55)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[extratags](CommonOutputParams.md#extratags)

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

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[format](CommonOutputParams.md#format)

#### Defined in

[src/types/queries/shared.ts:104](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L104)

___

### lat

• **lat**: [`GeoJSONCoordinate`](../modules.md#geojsoncoordinate)

#### Inherited from

[CoordinateParams](CoordinateParams.md).[lat](CoordinateParams.md#lat)

#### Defined in

[src/types/queries/reverse.ts:9](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/reverse.ts#L9)

___

### log

• **log**: [`GeoJSONCoordinate`](../modules.md#geojsoncoordinate)

#### Inherited from

[CoordinateParams](CoordinateParams.md).[log](CoordinateParams.md#log)

#### Defined in

[src/types/queries/reverse.ts:10](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/reverse.ts#L10)

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

[src/types/queries/shared.ts:90](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L90)

___

### polygon\_geojson

• `Optional` **polygon\_geojson**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_geojson](CommonOutputParams.md#polygon_geojson)

#### Defined in

[src/types/queries/shared.ts:27](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L27)

___

### polygon\_kml

• `Optional` **polygon\_kml**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_kml](CommonOutputParams.md#polygon_kml)

#### Defined in

[src/types/queries/shared.ts:28](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L28)

___

### polygon\_svg

• `Optional` **polygon\_svg**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_svg](CommonOutputParams.md#polygon_svg)

#### Defined in

[src/types/queries/shared.ts:29](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L29)

___

### polygon\_text

• `Optional` **polygon\_text**: ``1``

#### Inherited from

[CommonOutputParams](CommonOutputParams.md).[polygon_text](CommonOutputParams.md#polygon_text)

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

[CommonOutputParams](CommonOutputParams.md).[polygon_threshold](CommonOutputParams.md#polygon_threshold)

#### Defined in

[src/types/queries/shared.ts:41](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L41)

___

### zoom

• `Optional` **zoom**: `number`

Level of detail required for the address.

This is a number that corresponds roughly to the zoom level used in XYZ tile sources in frameworks like Leaflet.js, Openlayers etc.

**`See`**

[Nominatim documentation](https://nominatim.org/release-docs/develop/api/Reverse/#result-limitation) for address details per zoom level

**`Default Value`**

`18`

#### Inherited from

[ReverseResultLimitationParams](ReverseResultLimitationParams.md).[zoom](ReverseResultLimitationParams.md#zoom)

#### Defined in

[src/types/queries/reverse.ts:24](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/reverse.ts#L24)
