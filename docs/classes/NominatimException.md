[nominatim-js](../README.md) / [Exports](../modules.md) / NominatimException

# Class: NominatimException

## Hierarchy

- `Error`

  ↳ **`NominatimException`**

## Table of contents

### Constructors

- [constructor](NominatimException.md#constructor)

### Properties

- [cause](NominatimException.md#cause)
- [code](NominatimException.md#code)
- [message](NominatimException.md#message)
- [name](NominatimException.md#name)
- [stack](NominatimException.md#stack)

## Constructors

### constructor

• **new NominatimException**(`errorResponse`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorResponse` | [`NominatimErrorResponse`](../interfaces/NominatimErrorResponse.md) |

#### Overrides

Error.constructor

#### Defined in

[src/api/error.ts:10](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/error.ts#L10)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: `number`

#### Defined in

[src/api/error.ts:9](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/error.ts#L9)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069
