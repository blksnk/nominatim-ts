[nominatim-ts](../README.md) / [Exports](../modules.md) / GeoJSONPolygon

# Interface: GeoJSONPolygon<TCoordinate\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCoordinate` | extends [`GeoJSONCoordinate`](../modules.md#geojsoncoordinate) |

## Hierarchy

- [`GeoJSOGeometryBase`](GeoJSOGeometryBase.md)

  ↳ **`GeoJSONPolygon`**

## Table of contents

### Properties

- [coordinates](GeoJSONPolygon.md#coordinates)
- [type](GeoJSONPolygon.md#type)

## Properties

### coordinates

• **coordinates**: [`TCoordinate`, `TCoordinate`][][]

#### Defined in

[src/types/geo.ts:39](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/geo.ts#L39)

___

### type

• **type**: ``"Polygon"``

#### Overrides

[GeoJSOGeometryBase](GeoJSOGeometryBase.md).[type](GeoJSOGeometryBase.md#type)

#### Defined in

[src/types/geo.ts:38](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/geo.ts#L38)
