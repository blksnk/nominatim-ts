[nominatim-ts](../README.md) / [Exports](../modules.md) / OutputDetailsParams

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

[src/types/queries/shared.ts:77](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L77)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:83](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L83)

___

### namedetails

• `Optional` **namedetails**: ``0`` \| ``1``

Include a list of alternative names in the results.
These may include language variants, references, operator and brand.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:90](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L90)
