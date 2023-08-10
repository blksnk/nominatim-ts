[nominatim-ts](../README.md) / [Documentation](../modules.md) / OSMIdsParams

# Interface: OSMIdsParams

## Hierarchy

- **`OSMIdsParams`**

  ↳ [`NominatimLookupParams`](NominatimLookupParams.md)

## Table of contents

### Properties

- [osm\_ids](OSMIdsParams.md#osm_ids)

## Properties

### osm\_ids

• **osm\_ids**: `string` \| [`OSMIdsQuery`](../modules.md#osmidsquery)

one or multiple OSM objects ids — like node, way or relation.

Must contain a comma-separated list of OSM ids each prefixed with its type,
one of node(N), way(W) or relation(R).

**`Remarks`**

Up to 50 ids can be queried at the same time.

**`See`**

[OSMIdQuery](../modules.md#osmidquery) for formatting

**`Example`**

```ts
`R146656`
`R146656,W104393803,N240109189`
```

#### Defined in

[src/types/queries/lookup.ts:79](https://github.com/blksnk/nominatim-ts/blob/2f25718/src/types/queries/lookup.ts#L79)
