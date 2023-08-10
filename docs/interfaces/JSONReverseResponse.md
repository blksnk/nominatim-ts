[nominatim-js](../README.md) / [Exports](../modules.md) / JSONReverseResponse

# Interface: JSONReverseResponse<TParams\>

### Nominatim reverse response
List of JSON formatted places

**`Remarks`**

Only with `format=json`

**`See`**

[JSONPlace](../modules.md#jsonplace)

## Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimReverseParams`](NominatimReverseParams.md) |

## Hierarchy

- [`JSONPlace`](../modules.md#jsonplace)<`TParams`\>

  ↳ **`JSONReverseResponse`**

## Table of contents

### Properties

- [address](JSONReverseResponse.md#address)
- [addresstype](JSONReverseResponse.md#addresstype)
- [boundingbox](JSONReverseResponse.md#boundingbox)
- [class](JSONReverseResponse.md#class)
- [display\_name](JSONReverseResponse.md#display_name)
- [extratags](JSONReverseResponse.md#extratags)
- [geojson](JSONReverseResponse.md#geojson)
- [geokml](JSONReverseResponse.md#geokml)
- [geotext](JSONReverseResponse.md#geotext)
- [icon](JSONReverseResponse.md#icon)
- [importance](JSONReverseResponse.md#importance)
- [lat](JSONReverseResponse.md#lat)
- [lon](JSONReverseResponse.md#lon)
- [name](JSONReverseResponse.md#name)
- [namedetails](JSONReverseResponse.md#namedetails)
- [osm\_id](JSONReverseResponse.md#osm_id)
- [osm\_type](JSONReverseResponse.md#osm_type)
- [place\_id](JSONReverseResponse.md#place_id)
- [svg](JSONReverseResponse.md#svg)
- [type](JSONReverseResponse.md#type)

## Properties

### address

• **address**: `TParams`[``"addressdetails"``] extends ``1`` ? [`AddressDetails`](AddressDetails.md) : `never`

Dictionary of address details

**`See`**

[AddressDetails](AddressDetails.md)

**`Remarks`**

Only with `addressdetails=1`

#### Inherited from

JSONPlace.address

#### Defined in

[src/types/place.ts:98](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L98)

___

### addresstype

• **addresstype**: keyof [`AddressDetails`](AddressDetails.md)

**`See`**

[AddressType](../modules.md#addresstype)

#### Inherited from

JSONPlace.addresstype

#### Defined in

[src/types/place.ts:81](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L81)

___

### boundingbox

• **boundingbox**: `string`

Comma separated list containing `min latitude`, `max latitude`, `min longitude`, `max longitude`.

**`See`**

[CoordinateString](../modules.md#coordinatestring)

**`Remarks`**

Bounds crossing the antimeridian have a min latitude of `-180` and max latitude of `180`, essentially covering the entire planet.

**`Example`**

```ts
The whole planet would be `-90,90,-180,180`.
```

#### Inherited from

JSONPlace.boundingbox

#### Defined in

[src/types/place.ts:42](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L42)

___

### class

• **class**: `string`

**`See`**

[OSMTagKey](../modules.md#osmtagkey)

#### Inherited from

JSONPlace.class

#### Defined in

[src/types/place.ts:71](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L71)

___

### display\_name

• **display\_name**: `string`

Full comma-separated address.

**`Example`**

```ts
`12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France`
```

#### Inherited from

JSONPlace.display\_name

#### Defined in

[src/types/place.ts:60](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L60)

___

### extratags

• **extratags**: `TParams`[``"extratags"``] extends ``1`` ? [`ExtraTags`](../modules.md#extratags) : `never`

Dictionary with additional useful tags like `website`, `opening_hours` or `maxspeed`.
Varies based on result type and available information.

**`Remarks`**

Only with `extratags=1`

#### Inherited from

JSONPlace.extratags

#### Defined in

[src/types/place.ts:106](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L106)

___

### geojson

• `Optional` **geojson**: `TParams`[``"polygon_geojson"``] extends ``1`` ? [`GeoJSONMultiPolygon`](GeoJSONMultiPolygon.md)<`number`\> \| [`GeoJSONPolygon`](GeoJSONPolygon.md)<`number`\> \| [`GeoJSONMultiPoint`](GeoJSONMultiPoint.md)<`number`\> \| [`GeoJSONPoint`](GeoJSONPoint.md)<`number`\> \| [`GeoJSONLineString`](GeoJSONLineString.md)<`number`\> \| [`GeoJSONMultiLineString`](GeoJSONMultiLineString.md)<`number`\> : `never`

Full geoJSON geometry if available

**`See`**

[GeoJSONGeometry](../modules.md#geojsongeometry)

**`Remarks`**

only with `polygon_geojson=1`

#### Inherited from

JSONPlace.geojson

#### Defined in

[src/types/place.ts:131](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L131)

___

### geokml

• `Optional` **geokml**: `TParams`[``"polygon_kml"``] extends ``1`` ? `string` : `never`

Full KML geometry if available

**`Remarks`**

only with `polygon_kml=1`

#### Inherited from

JSONPlace.geokml

#### Defined in

[src/types/place.ts:140](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L140)

___

### geotext

• `Optional` **geotext**: `TParams`[``"polygon_text"``] extends ``1`` ? `string` : `never`

Full text geometry if available

**`Remarks`**

only with `polygon_text=1`

#### Inherited from

JSONPlace.geotext

#### Defined in

[src/types/place.ts:147](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L147)

___

### icon

• `Optional` **icon**: `string`

Link to [class](../modules.md#class) icon (if available).

#### Inherited from

JSONPlace.icon

#### Defined in

[src/types/place.ts:89](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L89)

___

### importance

• **importance**: `number`

Computed importance rank

#### Inherited from

JSONPlace.importance

#### Defined in

[src/types/place.ts:85](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L85)

___

### lat

• **lat**: \`${number}\`

Latitude of the centroid of the object.

**`See`**

[CoordinateString](../modules.md#coordinatestring)

#### Inherited from

JSONPlace.lat

#### Defined in

[src/types/place.ts:48](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L48)

___

### lon

• **lon**: \`${number}\`

Longitude of the centroid of the object.

**`See`**

[CoordinateString](../modules.md#coordinatestring)

#### Inherited from

JSONPlace.lon

#### Defined in

[src/types/place.ts:54](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L54)

___

### name

• **name**: `string`

Localised name of the place.

**`Example`**

```ts
`Avenue des Champs-Élysées`
```

#### Inherited from

JSONPlace.name

#### Defined in

[src/types/place.ts:66](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L66)

___

### namedetails

• **namedetails**: `TParams`[``"namedetails"``] extends ``1`` ? [`NameDetails`](../modules.md#namedetails) : `never`

Dictionary with full list of available names,  including `ref`, etc...

**`See`**

[NameDetails](../modules.md#namedetails)

**`Remarks`**

Only with `namedetails=1`

#### Inherited from

JSONPlace.namedetails

#### Defined in

[src/types/place.ts:115](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L115)

___

### osm\_id

• **osm\_id**: `string`

**`See`**

[OSMId](../modules.md#osmid)

#### Inherited from

JSONPlace.osm\_id

#### Defined in

[src/types/place.ts:30](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L30)

___

### osm\_type

• **osm\_type**: [`OSMType`](../modules.md#osmtype)

**`See`**

[OSMType](../modules.md#osmtype)

#### Inherited from

JSONPlace.osm\_type

#### Defined in

[src/types/place.ts:25](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L25)

___

### place\_id

• **place\_id**: `string`

**`See`**

[PlaceId](../modules.md#placeid)

#### Inherited from

JSONPlace.place\_id

#### Defined in

[src/types/place.ts:20](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L20)

___

### svg

• `Optional` **svg**: `TParams`[``"polygon_svg"``] extends ``1`` ? `string` : `never`

Full SVG geometry if available

**`Remarks`**

only with `polygon_svg=1`

#### Inherited from

JSONPlace.svg

#### Defined in

[src/types/place.ts:122](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L122)

___

### type

• **type**: `string`

**`See`**

[OSMTagValue](../modules.md#osmtagvalue)

#### Inherited from

JSONPlace.type

#### Defined in

[src/types/place.ts:76](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L76)
