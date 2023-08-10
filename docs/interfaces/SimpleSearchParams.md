[nominatim-js](../README.md) / [Documentation](../modules.md) / SimpleSearchParams

# Interface: SimpleSearchParams

Valid query parameters for a simple query
Extends [SearchParams](SearchParams.md) with [SimpleQuery](SimpleQuery.md)

**`Example`**

```typescript
{
  q: "12 Avenue des Champs Élysées, Paris, France",
  addressdetails: 1,
}
```

## Hierarchy

- [`SearchParams`](SearchParams.md)

- [`SimpleQuery`](SimpleQuery.md)

  ↳ **`SimpleSearchParams`**

## Table of contents

### Properties

- [accept-langage](SimpleSearchParams.md#accept-langage)
- [addressdetails](SimpleSearchParams.md#addressdetails)
- [bounded](SimpleSearchParams.md#bounded)
- [city](SimpleSearchParams.md#city)
- [country](SimpleSearchParams.md#country)
- [countrycodes](SimpleSearchParams.md#countrycodes)
- [county](SimpleSearchParams.md#county)
- [debug](SimpleSearchParams.md#debug)
- [dedupe](SimpleSearchParams.md#dedupe)
- [email](SimpleSearchParams.md#email)
- [exclude\_place\_ids](SimpleSearchParams.md#exclude_place_ids)
- [extratags](SimpleSearchParams.md#extratags)
- [format](SimpleSearchParams.md#format)
- [limit](SimpleSearchParams.md#limit)
- [namedetails](SimpleSearchParams.md#namedetails)
- [polygon\_geojson](SimpleSearchParams.md#polygon_geojson)
- [polygon\_kml](SimpleSearchParams.md#polygon_kml)
- [polygon\_svg](SimpleSearchParams.md#polygon_svg)
- [polygon\_text](SimpleSearchParams.md#polygon_text)
- [polygon\_threshold](SimpleSearchParams.md#polygon_threshold)
- [postalCode](SimpleSearchParams.md#postalcode)
- [q](SimpleSearchParams.md#q)
- [state](SimpleSearchParams.md#state)
- [street](SimpleSearchParams.md#street)
- [viewbox](SimpleSearchParams.md#viewbox)

## Properties

### accept-langage

• `Optional` **accept-langage**: `string`

Preferred language order for showing search results
Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.

#### Inherited from

[SearchParams](SearchParams.md).[accept-langage](SearchParams.md#accept-langage)

#### Defined in

[src/types/queries/shared.ts:46](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L46)

___

### addressdetails

• `Optional` **addressdetails**: ``0`` \| ``1``

Include a breakdown of the address into elements

**`Default Value`**

`0`

#### Inherited from

[SearchParams](SearchParams.md).[addressdetails](SearchParams.md#addressdetails)

#### Defined in

[src/types/queries/shared.ts:74](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L74)

___

### bounded

• `Optional` **bounded**: ``0`` \| ``1``

When a `viewbox` is given, restrict the result to items contained within that viewbox, see [viewbox](SearchResultLimitationParams.md#viewbox).

**`Remarks`**

When `viewbox` and `bounded=1` are given, an amenity only search is allowed.
Give the special keyword for the amenity in square brackets, e.g. [pub] and a selection of objects of this type is returned.
There is no guarantee that the result is complete.

**`Default Value`**

`0`

#### Inherited from

[SearchParams](SearchParams.md).[bounded](SearchParams.md#bounded)

#### Defined in

[src/types/queries/search.ts:85](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L85)

___

### city

• `Optional` **city**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[city](SimpleQuery.md#city)

#### Defined in

[src/types/queries/search.ts:18](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L18)

___

### country

• `Optional` **country**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[country](SimpleQuery.md#country)

#### Defined in

[src/types/queries/search.ts:21](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L21)

___

### countrycodes

• `Optional` **countrycodes**: `string`

Limit search results to one or more countries.

Must be the [ISO 3166-1alpha2 code](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=must%20be%20the-,ISO%203166%2D1alpha2,-code%2C%20e.g), e.g. gb for the United Kingdom, de for Germany.

**`Example`**

```ts
`fr,gb,de`
```

#### Inherited from

[SearchParams](SearchParams.md).[countrycodes](SearchParams.md#countrycodes)

#### Defined in

[src/types/queries/search.ts:50](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L50)

___

### county

• `Optional` **county**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[county](SimpleQuery.md#county)

#### Defined in

[src/types/queries/search.ts:19](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L19)

___

### debug

• `Optional` **debug**: ``0`` \| ``1``

Output assorted developer debug information.
Data on internals of Nominatim's "Search Loop" logic, and SQL queries.

**`Remarks`**

The output is (rough) HTML format. This overrides the specified machine readable format.

**`Default Value`**

`0`

#### Inherited from

[SearchParams](SearchParams.md).[debug](SearchParams.md#debug)

#### Defined in

[src/types/queries/shared.ts:62](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L62)

___

### dedupe

• `Optional` **dedupe**: ``0`` \| ``1``

Sometimes you have several objects in OSM identifying the same place or object in reality.
The simplest case is a street being split into many different OSM ways due to different characteristics.

**`Remarks`**

Nominatim will attempt to detect such duplicates and only return one match unless this parameter is set to 0.

**`Default Value`**

`1`

#### Inherited from

[SearchParams](SearchParams.md).[dedupe](SearchParams.md#dedupe)

#### Defined in

[src/types/queries/search.ts:102](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L102)

___

### email

• `Optional` **email**: \`${string}@${string}.${string}\`

If you are making large numbers of requests, please include an appropriate email address to identify your requests.

**`See`**

[Nominatim's Usage Policy](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details) for more details.

#### Inherited from

[SearchParams](SearchParams.md).[email](SearchParams.md#email)

#### Defined in

[src/types/queries/shared.ts:52](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L52)

___

### exclude\_place\_ids

• `Optional` **exclude\_place\_ids**: `string`

If you do not want certain OSM objects to appear in the search result, give a comma separated list of the `place_ids` you want to skip.
This can be used to retrieve additional search results.

**`Example`**

```ts
If a previous query only returned a few results, then including those here would cause the search to return other, less accurate, matches (if possible)
```

#### Inherited from

[SearchParams](SearchParams.md).[exclude_place_ids](SearchParams.md#exclude_place_ids)

#### Defined in

[src/types/queries/search.ts:57](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L57)

___

### extratags

• `Optional` **extratags**: ``0`` \| ``1``

Include additional information in the result if available, e.g. wikipedia link, opening hours.

**`Default Value`**

`0`

#### Inherited from

[SearchParams](SearchParams.md).[extratags](SearchParams.md#extratags)

#### Defined in

[src/types/queries/shared.ts:80](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L80)

___

### format

• `Optional` **format**: [`ResponseFormat`](../modules.md#responseformat)

Dictates api response format

**`Default Value`**

`jsonv2`

**`See`**

[ResponseFormat](../modules.md#responseformat)

#### Inherited from

[SearchParams](SearchParams.md).[format](SearchParams.md#format)

#### Defined in

[src/types/queries/shared.ts:101](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L101)

___

### limit

• `Optional` **limit**: `number`

Limit the number of returned results.
Number between `1` and `50`

**`Default Value`**

`10`

#### Inherited from

[SearchParams](SearchParams.md).[limit](SearchParams.md#limit)

#### Defined in

[src/types/queries/search.ts:64](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L64)

___

### namedetails

• `Optional` **namedetails**: ``0`` \| ``1``

Include a list of alternative names in the results.
These may include language variants, references, operator and brand.

**`Default Value`**

`0`

#### Inherited from

[SearchParams](SearchParams.md).[namedetails](SearchParams.md#namedetails)

#### Defined in

[src/types/queries/shared.ts:87](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L87)

___

### polygon\_geojson

• `Optional` **polygon\_geojson**: ``1``

#### Inherited from

[SearchParams](SearchParams.md).[polygon_geojson](SearchParams.md#polygon_geojson)

#### Defined in

[src/types/queries/shared.ts:24](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L24)

___

### polygon\_kml

• `Optional` **polygon\_kml**: ``1``

#### Inherited from

[SearchParams](SearchParams.md).[polygon_kml](SearchParams.md#polygon_kml)

#### Defined in

[src/types/queries/shared.ts:25](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L25)

___

### polygon\_svg

• `Optional` **polygon\_svg**: ``1``

#### Inherited from

[SearchParams](SearchParams.md).[polygon_svg](SearchParams.md#polygon_svg)

#### Defined in

[src/types/queries/shared.ts:26](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L26)

___

### polygon\_text

• `Optional` **polygon\_text**: ``1``

#### Inherited from

[SearchParams](SearchParams.md).[polygon_text](SearchParams.md#polygon_text)

#### Defined in

[src/types/queries/shared.ts:27](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L27)

___

### polygon\_threshold

• `Optional` **polygon\_threshold**: `number`

Return a simplified version of the output geometry.
The parameter is the tolerance in degrees with which the geometry may differ from the original geometry.
Topology is preserved in the result.

**`Default Value`**

`0.0`

#### Inherited from

[SearchParams](SearchParams.md).[polygon_threshold](SearchParams.md#polygon_threshold)

#### Defined in

[src/types/queries/shared.ts:38](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L38)

___

### postalCode

• `Optional` **postalCode**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[postalCode](SimpleQuery.md#postalcode)

#### Defined in

[src/types/queries/search.ts:22](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L22)

___

### q

• **q**: `string`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[q](SimpleQuery.md#q)

#### Defined in

[src/types/queries/search.ts:16](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L16)

___

### state

• `Optional` **state**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[state](SimpleQuery.md#state)

#### Defined in

[src/types/queries/search.ts:20](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L20)

___

### street

• `Optional` **street**: `undefined`

#### Inherited from

[SimpleQuery](SimpleQuery.md).[street](SimpleQuery.md#street)

#### Defined in

[src/types/queries/search.ts:17](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L17)

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

#### Inherited from

[SearchParams](SearchParams.md).[viewbox](SearchParams.md#viewbox)

#### Defined in

[src/types/queries/search.ts:74](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L74)
