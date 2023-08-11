[nominatim-ts](../README.md) / [Exports](../modules.md) / NominatimException

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
- [prepareStackTrace](NominatimException.md#preparestacktrace)
- [stackTraceLimit](NominatimException.md#stacktracelimit)

### Methods

- [captureStackTrace](NominatimException.md#capturestacktrace)

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

[src/api/error.ts:11](https://github.com/blksnk/nominatim-js/blob/a025e65/src/api/error.ts#L11)

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

[src/api/error.ts:9](https://github.com/blksnk/nominatim-js/blob/a025e65/src/api/error.ts#L9)

___

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

[src/api/error.ts:10](https://github.com/blksnk/nominatim-js/blob/a025e65/src/api/error.ts#L10)

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
