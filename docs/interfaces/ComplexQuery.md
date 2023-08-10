[nominatim-js](../README.md) / [Documentation](../modules.md) / ComplexQuery

# Interface: ComplexQuery

Alternative query string format split into several parameters for structured requests.
Structured requests are faster but are less robust against alternative OSM tagging schemas.

**`Remarks`**

***Do not combine with [SimpleQuery](SimpleQuery.md) parameter***.

## Hierarchy

- **`ComplexQuery`**

  ↳ [`ComplexSearchParams`](ComplexSearchParams.md)

## Table of contents

### Properties

- [city](ComplexQuery.md#city)
- [country](ComplexQuery.md#country)
- [county](ComplexQuery.md#county)
- [postalCode](ComplexQuery.md#postalcode)
- [q](ComplexQuery.md#q)
- [state](ComplexQuery.md#state)
- [street](ComplexQuery.md#street)

## Properties

### city

• `Optional` **city**: `string`

#### Defined in

[src/types/queries/search.ts:35](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L35)

___

### country

• `Optional` **country**: `string`

#### Defined in

[src/types/queries/search.ts:38](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L38)

___

### county

• `Optional` **county**: `string`

#### Defined in

[src/types/queries/search.ts:36](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L36)

___

### postalCode

• `Optional` **postalCode**: `string`

#### Defined in

[src/types/queries/search.ts:39](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L39)

___

### q

• `Optional` **q**: `undefined`

#### Defined in

[src/types/queries/search.ts:33](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L33)

___

### state

• `Optional` **state**: `string`

#### Defined in

[src/types/queries/search.ts:37](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L37)

___

### street

• `Optional` **street**: `string`

#### Defined in

[src/types/queries/search.ts:34](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L34)
