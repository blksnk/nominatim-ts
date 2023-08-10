[nominatim-js](../README.md) / [Exports](../modules.md) / OutputDetailsParams

# Interface: OutputDetailsParams

Enable additional output details for query results

## Hierarchy

- **`OutputDetailsParams`**

  ↳ [`CommonOutputParams`](CommonOutputParams.md)

## Table of contents

### Properties

- [addressdetails](OutputDetailsParams.md#addressdetails)
- [extratags](OutputDetailsParams.md#extratags)
- [namedetails](OutputDetailsParams.md#namedetails)

## Properties

### addressdetails

• `Optional` **addressdetails**: ``0`` \| ``1``

Include a breakdown of the address into elements

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:74](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L74)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:80](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L80)

___

### namedetails

• `Optional` **namedetails**: ``0`` \| ``1``

Include a list of alternative names in the results.
These may include language variants, references, operator and brand.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:87](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L87)
