[nominatim-ts](../README.md) / [Exports](../modules.md) / ReverseResultLimitationParams

# Interface: ReverseResultLimitationParams

## Hierarchy

- **`ReverseResultLimitationParams`**

  ↳ [`NominatimReverseParams`](NominatimReverseParams.md)

## Table of contents

### Properties

- [zoom](ReverseResultLimitationParams.md#zoom)

## Properties

### zoom

• `Optional` **zoom**: `number`

Level of detail required for the address.

This is a number that corresponds roughly to the zoom level used in XYZ tile sources in frameworks like Leaflet.js, Openlayers etc.

**`See`**

[Nominatim documentation](https://nominatim.org/release-docs/develop/api/Reverse/#result-limitation) for address details per zoom level

**`Default Value`**

`18`

#### Defined in

[src/types/queries/reverse.ts:30](https://github.com/blksnk/nominatim-ts/blob/8e52874/src/types/queries/reverse.ts#L30)
