[nominatim-ts](../README.md) / [Exports](../modules.md) / JSONErrorStatus

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

[src/types/responses/status.ts:28](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/responses/status.ts#L28)

___

### status

• **status**: `TStatusCode`

#### Defined in

[src/types/responses/status.ts:27](https://github.com/blksnk/nominatim-js/blob/a025e65/src/types/responses/status.ts#L27)
