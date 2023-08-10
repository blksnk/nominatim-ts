[nominatim-ts](../README.md) / [Documentation](../modules.md) / GeocodeJSONReverseResponse

# Interface: GeocodeJSONReverseResponse<TParams\>

### Nominatim reverse response
FeatureCollection of GeocodeJSON formatted places

**`Remarks`**

Only with `format=geocodejson`

**`See`**

[GeocodeJSONPlace](../modules.md#geocodejsonplace)

## Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimReverseParams`](NominatimReverseParams.md) |

## Table of contents

### Properties

- [features](GeocodeJSONReverseResponse.md#features)
- [geocoding](GeocodeJSONReverseResponse.md#geocoding)
- [type](GeocodeJSONReverseResponse.md#type)

## Properties

### features

• **features**: [`GeocodeJSONPlace`](../modules.md#geocodejsonplace)<`TParams`\>[]

#### Defined in

[src/types/responses/reverse.ts:78](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/responses/reverse.ts#L78)

___

### geocoding

• **geocoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attribution` | `string` |
| `licence` | `string` |
| `query` | `string` |
| `version` | `string` |

#### Defined in

[src/types/responses/reverse.ts:72](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/responses/reverse.ts#L72)

___

### type

• **type**: ``"FeatureCollection"``

#### Defined in

[src/types/responses/reverse.ts:71](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/responses/reverse.ts#L71)
