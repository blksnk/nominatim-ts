[nominatim-ts](../README.md) / [Documentation](../modules.md) / AdditionalParams

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

[src/types/queries/shared.ts:46](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L46)

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

[src/types/queries/shared.ts:62](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L62)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Defined in

[src/types/queries/shared.ts:52](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/shared.ts#L52)
