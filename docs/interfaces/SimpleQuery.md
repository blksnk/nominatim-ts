[nominatim-ts](../README.md) / [Exports](../modules.md) / SimpleQuery

# Interface: SimpleQuery

Free-form query string to search for.
Free-form queries are processed first left-to-right and then right-to-left if that fails.
Commas are optional, but improve performance by reducing the complexity of the search.

**`Remarks`**

***Do not combine with [ComplexQuery](ComplexQuery.md) parameters***.

## Hierarchy

- **`SimpleQuery`**

  ↳ [`SimpleSearchParams`](SimpleSearchParams.md)

## Table of contents

### Properties

- [city](SimpleQuery.md#city)
- [country](SimpleQuery.md#country)
- [county](SimpleQuery.md#county)
- [postalcode](SimpleQuery.md#postalcode)
- [q](SimpleQuery.md#q)
- [state](SimpleQuery.md#state)
- [street](SimpleQuery.md#street)

## Properties

### city

• `Optional` **city**: `undefined`

#### Defined in

[src/types/queries/search.ts:18](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L18)

___

### country

• `Optional` **country**: `undefined`

#### Defined in

[src/types/queries/search.ts:21](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L21)

___

### county

• `Optional` **county**: `undefined`

#### Defined in

[src/types/queries/search.ts:19](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L19)

___

### postalcode

• `Optional` **postalcode**: `undefined`

#### Defined in

[src/types/queries/search.ts:22](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L22)

___

### q

• **q**: `string`

#### Defined in

[src/types/queries/search.ts:16](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L16)

___

### state

• `Optional` **state**: `undefined`

#### Defined in

[src/types/queries/search.ts:20](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L20)

___

### street

• `Optional` **street**: `undefined`

#### Defined in

[src/types/queries/search.ts:17](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/search.ts#L17)
