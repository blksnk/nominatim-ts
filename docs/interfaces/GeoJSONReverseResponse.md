[nominatim-ts](../README.md) / [Exports](../modules.md) / GeoJSONReverseResponse

# Interface: GeoJSONReverseResponse<TParams\>

### Nominatim reverse response
FeatureCollection of GeoJSON formatted places

**`Remarks`**

Only with `format=geojson`

**`See`**

[GeoJSONPlace](../modules.md#geojsonplace)

## Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimReverseParams`](NominatimReverseParams.md) |

## Table of contents

### Properties

- [features](GeoJSONReverseResponse.md#features)
- [type](GeoJSONReverseResponse.md#type)

## Properties

### features

• **features**: [`GeoJSONPlace`](../modules.md#geojsonplace)<`TParams`\>[]

#### Defined in

[src/types/responses/reverse.ts:55](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/responses/reverse.ts#L55)

___

### type

• **type**: ``"FeatureCollection"``

#### Defined in

[src/types/responses/reverse.ts:54](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/responses/reverse.ts#L54)
