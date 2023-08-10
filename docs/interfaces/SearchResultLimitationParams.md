[nominatim-js](../README.md) / [Documentation](../modules.md) / SearchResultLimitationParams

# Interface: SearchResultLimitationParams

## Hierarchy

- **`SearchResultLimitationParams`**

  ↳ [`SearchParams`](SearchParams.md)

## Table of contents

### Properties

- [bounded](SearchResultLimitationParams.md#bounded)
- [countrycodes](SearchResultLimitationParams.md#countrycodes)
- [exclude\_place\_ids](SearchResultLimitationParams.md#exclude_place_ids)
- [limit](SearchResultLimitationParams.md#limit)
- [viewbox](SearchResultLimitationParams.md#viewbox)

## Properties

### bounded

• `Optional` **bounded**: ``0`` \| ``1``

When a `viewbox` is given, restrict the result to items contained within that viewbox, see [viewbox](SearchResultLimitationParams.md#viewbox).

**`Remarks`**

When `viewbox` and `bounded=1` are given, an amenity only search is allowed.
Give the special keyword for the amenity in square brackets, e.g. [pub] and a selection of objects of this type is returned.
There is no guarantee that the result is complete.

**`Default Value`**

`0`

#### Defined in

[src/types/queries/search.ts:85](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L85)

___

### countrycodes

• `Optional` **countrycodes**: `string`

Limit search results to one or more countries.

Must be the [ISO 3166-1alpha2 code](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=must%20be%20the-,ISO%203166%2D1alpha2,-code%2C%20e.g), e.g. gb for the United Kingdom, de for Germany.

**`Example`**

```ts
`fr,gb,de`
```

#### Defined in

[src/types/queries/search.ts:50](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L50)

___

### exclude\_place\_ids

• `Optional` **exclude\_place\_ids**: `string`

If you do not want certain OSM objects to appear in the search result, give a comma separated list of the `place_ids` you want to skip.
This can be used to retrieve additional search results.

**`Example`**

```ts
If a previous query only returned a few results, then including those here would cause the search to return other, less accurate, matches (if possible)
```

#### Defined in

[src/types/queries/search.ts:57](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L57)

___

### limit

• `Optional` **limit**: `number`

Limit the number of returned results.
Number between `1` and `50`

**`Default Value`**

`10`

#### Defined in

[src/types/queries/search.ts:64](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L64)

___

### viewbox

• `Optional` **viewbox**: \`${number},${number},${number},${number}\`

The preferred area to find search results.
Any two corner points of the box are accepted as long as they span a real box.

**`Example`**

```ts
`<x1>,<y1>,<x2>,<y2>`
```

**`Remarks`**

`x` is longitude, `y` is latitude.

#### Defined in

[src/types/queries/search.ts:74](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L74)
