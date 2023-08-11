[nominatim-ts](../README.md) / [Exports](../modules.md) / AdditionalParams

# Interface: AdditionalParams

## Hierarchy

- **`AdditionalParams`**

  ↳ [`CommonOutputParams`](CommonOutputParams.md)

## Table of contents

### Properties

- [accept-langage](AdditionalParams.md#accept-langage)
- [debug](AdditionalParams.md#debug)
- [email](AdditionalParams.md#email)

## Properties

### accept-langage

• `Optional` **accept-langage**: `string`

Preferred language order for showing search results
Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.

#### Defined in

[src/types/queries/shared.ts:49](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L49)

___

### debug

• `Optional` **debug**: ``0`` \| ``1``

Output assorted developer debug information.
Data on internals of Nominatim's "Search Loop" logic, and SQL queries.

**`Remarks`**

The output is (rough) HTML format. This overrides the specified machine readable format.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/shared.ts:65](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L65)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Defined in

[src/types/queries/shared.ts:55](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/queries/shared.ts#L55)
