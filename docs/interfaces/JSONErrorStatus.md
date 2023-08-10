[nominatim-ts](../README.md) / [Documentation](../modules.md) / JSONErrorStatus

# Interface: JSONErrorStatus<TStatusCode\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TStatusCode` | extends [`StatusCode`](../modules.md#statuscode) |

## Hierarchy

- **`JSONErrorStatus`**

  ↳ [`JSONSuccessStatus`](JSONSuccessStatus.md)

## Table of contents

### Properties

- [message](JSONErrorStatus.md#message)
- [status](JSONErrorStatus.md#status)

## Properties

### message

• **message**: [`StatusMessage`](../modules.md#statusmessage)<`TStatusCode`\>

#### Defined in

[src/types/responses/status.ts:28](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/responses/status.ts#L28)

___

### status

• **status**: `TStatusCode`

#### Defined in

[src/types/responses/status.ts:27](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/responses/status.ts#L27)
