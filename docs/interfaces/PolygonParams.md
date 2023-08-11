[nominatim-ts](../README.md) / [Exports](../modules.md) / PolygonParams

# Interface: PolygonParams

Output geometry of results as a GeoJSON, KML, SVG or WKT.

**`Remarks`**

Only one of these options can be used at a time.

**`Default Value`**

`0`

## Hierarchy

- [`PolygonOutputParams`](PolygonOutputParams.md)

  ↳ **`PolygonParams`**

  ↳↳ [`CommonOutputParams`](CommonOutputParams.md)

## Table of contents

### Properties

- [polygon\_geojson](PolygonParams.md#polygon_geojson)
- [polygon\_kml](PolygonParams.md#polygon_kml)
- [polygon\_svg](PolygonParams.md#polygon_svg)
- [polygon\_text](PolygonParams.md#polygon_text)
- [polygon\_threshold](PolygonParams.md#polygon_threshold)

## Properties

### polygon\_geojson

• `Optional` **polygon\_geojson**: ``1``

#### Inherited from

[PolygonOutputParams](PolygonOutputParams.md).[polygon_geojson](PolygonOutputParams.md#polygon_geojson)

#### Defined in

[src/types/queries/shared.ts:27](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L27)

___

### polygon\_kml

• `Optional` **polygon\_kml**: ``1``

#### Inherited from

[PolygonOutputParams](PolygonOutputParams.md).[polygon_kml](PolygonOutputParams.md#polygon_kml)

#### Defined in

[src/types/queries/shared.ts:28](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L28)

___

### polygon\_svg

• `Optional` **polygon\_svg**: ``1``

#### Inherited from

[PolygonOutputParams](PolygonOutputParams.md).[polygon_svg](PolygonOutputParams.md#polygon_svg)

#### Defined in

[src/types/queries/shared.ts:29](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L29)

___

### polygon\_text

• `Optional` **polygon\_text**: ``1``

#### Inherited from

[PolygonOutputParams](PolygonOutputParams.md).[polygon_text](PolygonOutputParams.md#polygon_text)

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

#### Defined in

[src/types/queries/shared.ts:41](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L41)
