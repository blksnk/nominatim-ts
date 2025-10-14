[nominatim-ts](../README.md) / [Exports](../modules.md) / NominatimException

# Class: NominatimException

Custom exception class for Nominatim API errors.

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
- [prepareStackTrace](NominatimException.md#preparestacktrace)
- [stackTraceLimit](NominatimException.md#stacktracelimit)

### Methods

- [captureStackTrace](NominatimException.md#capturestacktrace)

## Constructors

### constructor

• **new NominatimException**(`errorResponse`)

Creates a new NominatimException.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorResponse` | [`NominatimErrorResponse`](../interfaces/NominatimErrorResponse.md) | The error response from the Nominatim API. |

#### Overrides

Error.constructor

#### Defined in

[src/api/error.ts:23](https://github.com/blksnk/nominatim-ts/blob/8e52874/src/api/error.ts#L23)

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

The error code returned by the Nominatim API.

#### Defined in

[src/api/error.ts:14](https://github.com/blksnk/nominatim-ts/blob/8e52874/src/api/error.ts#L14)

___

### message

• **message**: `string`

The error message returned by the Nominatim API.

#### Overrides

Error.message

#### Defined in

[src/api/error.ts:17](https://github.com/blksnk/nominatim-ts/blob/8e52874/src/api/error.ts#L17)

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

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
