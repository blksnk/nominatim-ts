[nominatim-js](README.md) / Exports

# nominatim-js

## Table of contents

### Classes

- [NominatimException](classes/NominatimException.md)

### Interfaces

- [AdditionalParams](interfaces/AdditionalParams.md)
- [AddressDetails](interfaces/AddressDetails.md)
- [CommonOutputParams](interfaces/CommonOutputParams.md)
- [ComplexQuery](interfaces/ComplexQuery.md)
- [ComplexSearchParams](interfaces/ComplexSearchParams.md)
- [CoordinateParams](interfaces/CoordinateParams.md)
- [GeoJSOGeometryBase](interfaces/GeoJSOGeometryBase.md)
- [GeoJSONLineString](interfaces/GeoJSONLineString.md)
- [GeoJSONMultiLineString](interfaces/GeoJSONMultiLineString.md)
- [GeoJSONMultiPoint](interfaces/GeoJSONMultiPoint.md)
- [GeoJSONMultiPolygon](interfaces/GeoJSONMultiPolygon.md)
- [GeoJSONPoint](interfaces/GeoJSONPoint.md)
- [GeoJSONPolygon](interfaces/GeoJSONPolygon.md)
- [GeoJSONReverseResponse](interfaces/GeoJSONReverseResponse.md)
- [GeocodeJSONReverseResponse](interfaces/GeocodeJSONReverseResponse.md)
- [JSONErrorStatus](interfaces/JSONErrorStatus.md)
- [JSONReverseResponse](interfaces/JSONReverseResponse.md)
- [JSONSuccessStatus](interfaces/JSONSuccessStatus.md)
- [JSONV2Place](interfaces/JSONV2Place.md)
- [JSONV2ReverseResponse](interfaces/JSONV2ReverseResponse.md)
- [NominatimErrorResponse](interfaces/NominatimErrorResponse.md)
- [NominatimLookupParams](interfaces/NominatimLookupParams.md)
- [NominatimReverseParams](interfaces/NominatimReverseParams.md)
- [NominatimStatusParams](interfaces/NominatimStatusParams.md)
- [OSMIdsParams](interfaces/OSMIdsParams.md)
- [OutputDetailsParams](interfaces/OutputDetailsParams.md)
- [PolygonOutputParams](interfaces/PolygonOutputParams.md)
- [PolygonParams](interfaces/PolygonParams.md)
- [ReverseResultLimitationParams](interfaces/ReverseResultLimitationParams.md)
- [SearchParams](interfaces/SearchParams.md)
- [SearchResultLimitationParams](interfaces/SearchResultLimitationParams.md)
- [SimpleQuery](interfaces/SimpleQuery.md)
- [SimpleSearchParams](interfaces/SimpleSearchParams.md)

### Type Aliases

- [AddressType](modules.md#addresstype)
- [CoordinateString](modules.md#coordinatestring)
- [ExtraTags](modules.md#extratags)
- [GeoJSONCoordinate](modules.md#geojsoncoordinate)
- [GeoJSONGeometry](modules.md#geojsongeometry)
- [GeoJSONLookupResponse](modules.md#geojsonlookupresponse)
- [GeoJSONPlace](modules.md#geojsonplace)
- [GeoJSONSearchResponse](modules.md#geojsonsearchresponse)
- [GeoJSONType](modules.md#geojsontype)
- [GeocodeJSONAdminLevel](modules.md#geocodejsonadminlevel)
- [GeocodeJSONFeatureType](modules.md#geocodejsonfeaturetype)
- [GeocodeJSONLookupResponse](modules.md#geocodejsonlookupresponse)
- [GeocodeJSONPlace](modules.md#geocodejsonplace)
- [GeocodeJSONSearchResponse](modules.md#geocodejsonsearchresponse)
- [JSONLookupResponse](modules.md#jsonlookupresponse)
- [JSONPlace](modules.md#jsonplace)
- [JSONSearchResponse](modules.md#jsonsearchresponse)
- [JSONStatus](modules.md#jsonstatus)
- [JSONV2LookupResponse](modules.md#jsonv2lookupresponse)
- [JSONV2SearchResponse](modules.md#jsonv2searchresponse)
- [NameDetails](modules.md#namedetails)
- [NominatimApiUrl](modules.md#nominatimapiurl)
- [NominatimBaseUrl](modules.md#nominatimbaseurl)
- [NominatimEndpoint](modules.md#nominatimendpoint)
- [NominatimEndpointParams](modules.md#nominatimendpointparams)
- [NominatimEndpointResponse](modules.md#nominatimendpointresponse)
- [NominatimLookupResponse](modules.md#nominatimlookupresponse)
- [NominatimReverseResponse](modules.md#nominatimreverseresponse)
- [NominatimSearchParams](modules.md#nominatimsearchparams)
- [NominatimSearchResponse](modules.md#nominatimsearchresponse)
- [NominatimStatusFormatErrorResponse](modules.md#nominatimstatusformaterrorresponse)
- [NominatimStatusResponse](modules.md#nominatimstatusresponse)
- [OSMId](modules.md#osmid)
- [OSMIdQuery](modules.md#osmidquery)
- [OSMIdsQuery](modules.md#osmidsquery)
- [OSMTagKey](modules.md#osmtagkey)
- [OSMTagValue](modules.md#osmtagvalue)
- [OSMType](modules.md#osmtype)
- [OSMTypeAlias](modules.md#osmtypealias)
- [PlaceId](modules.md#placeid)
- [ResponseFormat](modules.md#responseformat)
- [ResponseOrError](modules.md#responseorerror)
- [StatusCode](modules.md#statuscode)
- [StatusFormat](modules.md#statusformat)
- [StatusMessage](modules.md#statusmessage)
- [TextStatus](modules.md#textstatus)

### Variables

- [GeoJSONTypes](modules.md#geojsontypes)
- [NOMINATIM\_API\_URL](modules.md#nominatim_api_url)
- [endpoints](modules.md#endpoints)
- [statusCodes](modules.md#statuscodes)
- [statusMessages](modules.md#statusmessages)

### Functions

- [endpointFactory](modules.md#endpointfactory)
- [getEndpointUrl](modules.md#getendpointurl)
- [lookup](modules.md#lookup)
- [reverse](modules.md#reverse)
- [search](modules.md#search)
- [status](modules.md#status)
- [throwOnError](modules.md#throwonerror)

## Type Aliases

### AddressType

Ƭ **AddressType**: keyof [`AddressDetails`](interfaces/AddressDetails.md)

Primary address type of the object

**`See`**

[AddressDetails](interfaces/AddressDetails.md)

#### Defined in

[src/types/shared.ts:85](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/shared.ts#L85)

___

### CoordinateString

Ƭ **CoordinateString**: \`${number}\`

Single coordinate formatted as a string

**`Example`**

```ts
`6.236721`
```

#### Defined in

[src/types/geo.ts:10](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L10)

___

### ExtraTags

Ƭ **ExtraTags**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[src/types/shared.ts:5](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/shared.ts#L5)

___

### GeoJSONCoordinate

Ƭ **GeoJSONCoordinate**: [`CoordinateString`](modules.md#coordinatestring) \| `number`

#### Defined in

[src/types/geo.ts:23](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L23)

___

### GeoJSONGeometry

Ƭ **GeoJSONGeometry**<`TCoordinate`, `TType`\>: `TType` extends ``"MutliPolygon"`` ? [`GeoJSONMultiPolygon`](interfaces/GeoJSONMultiPolygon.md)<`TCoordinate`\> : `TType` extends ``"Polygon"`` ? [`GeoJSONPolygon`](interfaces/GeoJSONPolygon.md)<`TCoordinate`\> : `TType` extends ``"MultiPoint"`` ? [`GeoJSONMultiPoint`](interfaces/GeoJSONMultiPoint.md)<`TCoordinate`\> : `TType` extends ``"Point"`` ? [`GeoJSONPoint`](interfaces/GeoJSONPoint.md)<`TCoordinate`\> : `TType` extends ``"LineString"`` ? [`GeoJSONLineString`](interfaces/GeoJSONLineString.md)<`TCoordinate`\> : `TType` extends ``"MultiLineString"`` ? [`GeoJSONMultiLineString`](interfaces/GeoJSONMultiLineString.md)<`TCoordinate`\> : [`GeoJSONMultiPolygon`](interfaces/GeoJSONMultiPolygon.md)<`TCoordinate`\> \| [`GeoJSONPolygon`](interfaces/GeoJSONPolygon.md)<`TCoordinate`\> \| [`GeoJSONMultiPoint`](interfaces/GeoJSONMultiPoint.md)<`TCoordinate`\> \| [`GeoJSONPoint`](interfaces/GeoJSONPoint.md)<`TCoordinate`\> \| [`GeoJSONLineString`](interfaces/GeoJSONLineString.md)<`TCoordinate`\> \| [`GeoJSONMultiLineString`](interfaces/GeoJSONMultiLineString.md)<`TCoordinate`\>

Generic GeoJSON geometry structure

**`Remarks`**

- Coordinate values are either numbers or number strings, according to `TCoordinate` parameter
- Coordinate shape is dictated by `TType` parameter. If no type is provided, returns an union of every possible shape

**`See`**

- [GeoJSONCoordinate](modules.md#geojsoncoordinate)
- [GeoJSONType](modules.md#geojsontype)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCoordinate` | extends [`GeoJSONCoordinate`](modules.md#geojsoncoordinate) |
| `TType` | extends [`GeoJSONType`](modules.md#geojsontype) \| `unknown` = `unknown` |

#### Defined in

[src/types/geo.ts:80](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L80)

___

### GeoJSONLookupResponse

Ƭ **GeoJSONLookupResponse**<`TParams`\>: `Object`

### Nominatim lookup response
FeatureCollection of GeoJSON formatted places

**`Remarks`**

Only with `format=geojson`

**`See`**

[GeoJSONPlace](modules.md#geojsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `features` | [`GeoJSONPlace`](modules.md#geojsonplace)<`TParams`\>[] |
| `type` | ``"FeatureCollection"`` |

#### Defined in

[src/types/responses/lookup.ts:50](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/lookup.ts#L50)

___

### GeoJSONPlace

Ƭ **GeoJSONPlace**<`TParams`\>: `Object`

Result format according to [RFC7946](https://geojson.org/) standard.
Every feature includes a bounding box.

**`See`**

[bbox](modules.md#bbox)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`CommonOutputParams`](interfaces/CommonOutputParams.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bbox` | [`number`, `number`, `number`, `number`] | Number array containing `min latitude`, `max latitude`, `min longitude`, `max longitude`. **`Remarks`** Bounds crossing the antimeridian have a min latitude of `-180` and max latitude of `180`, essentially covering the entire planet. **`Example`** ```ts The whole planet would be `[-90,90,-180,180]`. ``` |
| `geometry` | [`GeoJSONGeometry`](modules.md#geojsongeometry)<`number`, `TParams`[``"polygon_geojson"``] extends ``1`` ? `unknown` : ``"Point"``\> | GeoJSON geometry of the object. **`See`** [GeoJSONGeometry](modules.md#geojsongeometry) **`Remarks`** Returns `GeoJSONGeometry<"Polygon" \| "MultiPolygon">` based on object geometry if `polygon_geojson=1`, and `GeoJSONGeometry<"Point">` otherwise **`Default Value`** [<"Point">](modules.md#geojsongeometry) |
| `properties` | { `address`: `TParams`[``"addressdetails"``] extends ``1`` ? [`AddressDetails`](interfaces/AddressDetails.md) : `never` ; `addresstype`: [`AddressType`](modules.md#addresstype) ; `category`: [`OSMTagKey`](modules.md#osmtagkey) ; `display_name`: `string` ; `extratags`: `TParams`[``"extratags"``] extends ``1`` ? [`ExtraTags`](modules.md#extratags) : `never` ; `importance`: `number` ; `name`: `string` ; `namedetails`: `TParams`[``"namedetails"``] extends ``1`` ? [`NameDetails`](modules.md#namedetails) : `never` ; `osm_id`: `string` ; `osm_type`: [`OSMType`](modules.md#osmtype) ; `place_id`: `string` ; `type`: [`OSMTagValue`](modules.md#osmtagvalue)  } | - |
| `properties.address` | `TParams`[``"addressdetails"``] extends ``1`` ? [`AddressDetails`](interfaces/AddressDetails.md) : `never` | Dictionary of address details **`See`** [AddressDetails](interfaces/AddressDetails.md) **`Remarks`** Only with `addressdetails=1` |
| `properties.addresstype` | [`AddressType`](modules.md#addresstype) | **`See`** [AddressType](modules.md#addresstype) |
| `properties.category` | [`OSMTagKey`](modules.md#osmtagkey) | **`See`** [OSMTagKey](modules.md#osmtagkey) |
| `properties.display_name` | `string` | Full comma-separated address. **`Example`** ```ts `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France` ``` |
| `properties.extratags` | `TParams`[``"extratags"``] extends ``1`` ? [`ExtraTags`](modules.md#extratags) : `never` | Dictionary with additional useful tags like `website`, `opening_hours` or `maxspeed`. Varies based on result type and available information. **`Remarks`** Only with `extratags=1` |
| `properties.importance` | `number` | Computed importance rank |
| `properties.name` | `string` | Localised name of the place. **`Example`** ```ts `Avenue des Champs-Élysées` ``` |
| `properties.namedetails` | `TParams`[``"namedetails"``] extends ``1`` ? [`NameDetails`](modules.md#namedetails) : `never` | Dictionary with full list of available names, including `ref`, etc... **`See`** [NameDetails](modules.md#namedetails) **`Remarks`** Only with `namedetails=1` |
| `properties.osm_id` | `string` | **`See`** [OSMId](modules.md#osmid) |
| `properties.osm_type` | [`OSMType`](modules.md#osmtype) | **`See`** [OSMType](modules.md#osmtype) |
| `properties.place_id` | `string` | **`See`** [PlaceId](modules.md#placeid) |
| `properties.type` | [`OSMTagValue`](modules.md#osmtagvalue) | **`See`** [OSMTagValue](modules.md#osmtagvalue) |
| `type` | ``"Feature"`` | - |

#### Defined in

[src/types/place.ts:174](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L174)

___

### GeoJSONSearchResponse

Ƭ **GeoJSONSearchResponse**<`TParams`\>: `Object`

### Nominatim search response
FeatureCollection of GeoJSON formatted places

**`Remarks`**

Only with `format=geojson`

**`See`**

[GeoJSONPlace](modules.md#geojsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`SearchParams`](interfaces/SearchParams.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `features` | [`GeoJSONPlace`](modules.md#geojsonplace)<`TParams`\>[] |
| `type` | ``"FeatureCollection"`` |

#### Defined in

[src/types/responses/search.ts:49](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/search.ts#L49)

___

### GeoJSONType

Ƭ **GeoJSONType**: typeof [`GeoJSONTypes`](modules.md#geojsontypes)[`number`]

#### Defined in

[src/types/geo.ts:21](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L21)

___

### GeocodeJSONAdminLevel

Ƭ **GeocodeJSONAdminLevel**: `Object`

Administratives boundaries the feature is included in.

**`See`**

[Spec definition](http://wiki.osm.org/wiki/Key:admin_level#admin_level)

#### Index signature

▪ [k: \`level${number}\`]: `string`

#### Defined in

[src/types/geo.ts:121](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L121)

___

### GeocodeJSONFeatureType

Ƭ **GeocodeJSONFeatureType**: ``"house"`` \| ``"street"`` \| ``"locality"`` \| ``"city"`` \| ``"region"`` \| ``"country"``

GeocodeJSON `properties.geocoding.type` property.

**`See`**

[Spec draft](https://github.com/geocoders/geocodejson-spec/tree/master/draft#feature-object:~:text=to%20be%20closed.-,%22type%22%3A%20%22house%22%2C,-//%20OPTIONAL.%20Result%20accuracy)

#### Defined in

[src/types/geo.ts:108](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L108)

___

### GeocodeJSONLookupResponse

Ƭ **GeocodeJSONLookupResponse**<`TParams`\>: `Object`

### Nominatim lookup response
FeatureCollection of GeocodeJSON formatted places

**`Remarks`**

Only with `format=geocodejson`

**`See`**

[GeocodeJSONPlace](modules.md#geocodejsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `features` | [`GeocodeJSONPlace`](modules.md#geocodejsonplace)<`TParams`\>[] |
| `geocoding` | { `attribution`: `string` ; `licence`: `string` ; `query`: `string` ; `version`: `string`  } |
| `geocoding.attribution` | `string` |
| `geocoding.licence` | `string` |
| `geocoding.query` | `string` |
| `geocoding.version` | `string` |
| `type` | ``"FeatureCollection"`` |

#### Defined in

[src/types/responses/lookup.ts:67](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/lookup.ts#L67)

___

### GeocodeJSONPlace

Ƭ **GeocodeJSONPlace**<`TParams`\>: `Object`

Result format according to the [GeocodeJSON spec 0.1.0](https://github.com/geocoders/geocodejson-spec/tree/master/draft#feature-object).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`CommonOutputParams`](interfaces/CommonOutputParams.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`GeoJSONGeometry`](modules.md#geojsongeometry)<`number`, `TParams`[``"polygon_geojson"``] extends ``1`` ? `unknown` : ``"Point"``\> | GeoJSON geometry of the object. **`See`** [GeoJSONGeometry](modules.md#geojsongeometry) **`Remarks`** Returns `GeoJSONGeometry<"Polygon" \| "MultiPolygon">` based on object geometry if `polygon_geojson=1`, and `GeoJSONGeometry<"Point">` otherwise **`Default Value`** [<"Point">](modules.md#geojsongeometry) |
| `license` | `string` | - |
| `properties` | { `geocoding`: { `admin?`: `TParams`[``"addressdetails"``] extends ``1`` ? [`GeocodeJSONAdminLevel`](modules.md#geocodejsonadminlevel) : `never` ; `city?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `country?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `country_code?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `county?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `district?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `housenumber?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `label`: `string` ; `locality?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `name`: `string` ; `postcode?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `state?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `street?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `type`: [`GeocodeJSONFeatureType`](modules.md#geocodejsonfeaturetype)  }  } | - |
| `properties.geocoding` | { `admin?`: `TParams`[``"addressdetails"``] extends ``1`` ? [`GeocodeJSONAdminLevel`](modules.md#geocodejsonadminlevel) : `never` ; `city?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `country?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `country_code?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `county?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `district?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `housenumber?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `label`: `string` ; `locality?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `name`: `string` ; `postcode?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `state?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `street?`: `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` ; `type`: [`GeocodeJSONFeatureType`](modules.md#geocodejsonfeaturetype)  } | - |
| `properties.geocoding.admin?` | `TParams`[``"addressdetails"``] extends ``1`` ? [`GeocodeJSONAdminLevel`](modules.md#geocodejsonadminlevel) : `never` | List of localised names of administrative boundaries **`See`** [GeocodeJSONAdminLevel](modules.md#geocodejsonadminlevel) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.city?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [city](interfaces/AddressDetails.md#city) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.country?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [country](interfaces/AddressDetails.md#country) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.country_code?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [country_code](interfaces/AddressDetails.md#country_code) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.county?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [county](interfaces/AddressDetails.md#county) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.district?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [city_district](interfaces/AddressDetails.md#city_district) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.housenumber?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [house_number](interfaces/AddressDetails.md#house_number) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.label` | `string` | Full comma-separated address. **`Example`** ```ts `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France` ``` |
| `properties.geocoding.locality?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [municipality](interfaces/AddressDetails.md#municipality) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.name` | `string` | Localised name of the place. **`Example`** ```ts `Avenue des Champs-Élysées` ``` |
| `properties.geocoding.postcode?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [postcode](interfaces/AddressDetails.md#postcode) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.state?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [state](interfaces/AddressDetails.md#state) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.street?` | `TParams`[``"addressdetails"``] extends ``1`` ? `string` : `never` | **`See`** [road](interfaces/AddressDetails.md#road) **`Remarks`** Only with `addressdetails=1` |
| `properties.geocoding.type` | [`GeocodeJSONFeatureType`](modules.md#geocodejsonfeaturetype) | **`See`** [GeocodeJSONFeatureType](modules.md#geocodejsonfeaturetype) |
| `type` | ``"Feature"`` | - |

#### Defined in

[src/types/place.ts:279](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L279)

___

### GeocodeJSONSearchResponse

Ƭ **GeocodeJSONSearchResponse**<`TParams`\>: `Object`

### Nominatim search response
FeatureCollection of GeocodeJSON formatted places

**`Remarks`**

Only with `format=geocodejson`

**`See`**

[GeocodeJSONPlace](modules.md#geocodejsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`SearchParams`](interfaces/SearchParams.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `features` | [`GeocodeJSONPlace`](modules.md#geocodejsonplace)<`TParams`\>[] |
| `geocoding` | { `attribution`: `string` ; `licence`: `string` ; `query`: `string` ; `version`: `string`  } |
| `geocoding.attribution` | `string` |
| `geocoding.licence` | `string` |
| `geocoding.query` | `string` |
| `geocoding.version` | `string` |
| `type` | ``"FeatureCollection"`` |

#### Defined in

[src/types/responses/search.ts:64](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/search.ts#L64)

___

### JSONLookupResponse

Ƭ **JSONLookupResponse**<`TParams`\>: [`JSONPlace`](modules.md#jsonplace)<`TParams`\>[]

### Nominatim lookup response
List of JSON formatted places

**`Remarks`**

Only with `format=json`

**`See`**

[JSONPlace](modules.md#jsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Defined in

[src/types/responses/lookup.ts:23](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/lookup.ts#L23)

___

### JSONPlace

Ƭ **JSONPlace**<`TParams`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`CommonOutputParams`](interfaces/CommonOutputParams.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `TParams`[``"addressdetails"``] extends ``1`` ? [`AddressDetails`](interfaces/AddressDetails.md) : `never` | Dictionary of address details **`See`** [AddressDetails](interfaces/AddressDetails.md) **`Remarks`** Only with `addressdetails=1` |
| `addresstype` | [`AddressType`](modules.md#addresstype) | **`See`** [AddressType](modules.md#addresstype) |
| `boundingbox` | [`CoordinateString`](modules.md#coordinatestring)[``4``] | Comma separated list containing `min latitude`, `max latitude`, `min longitude`, `max longitude`. **`See`** [CoordinateString](modules.md#coordinatestring) **`Remarks`** Bounds crossing the antimeridian have a min latitude of `-180` and max latitude of `180`, essentially covering the entire planet. **`Example`** ```ts The whole planet would be `-90,90,-180,180`. ``` |
| `class` | [`OSMTagKey`](modules.md#osmtagkey) | **`See`** [OSMTagKey](modules.md#osmtagkey) |
| `display_name` | `string` | Full comma-separated address. **`Example`** ```ts `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France` ``` |
| `extratags` | `TParams`[``"extratags"``] extends ``1`` ? [`ExtraTags`](modules.md#extratags) : `never` | Dictionary with additional useful tags like `website`, `opening_hours` or `maxspeed`. Varies based on result type and available information. **`Remarks`** Only with `extratags=1` |
| `geojson?` | `TParams`[``"polygon_geojson"``] extends ``1`` ? [`GeoJSONGeometry`](modules.md#geojsongeometry)<`number`\> : `never` | Full geoJSON geometry if available **`See`** [GeoJSONGeometry](modules.md#geojsongeometry) **`Remarks`** only with `polygon_geojson=1` |
| `geokml?` | `TParams`[``"polygon_kml"``] extends ``1`` ? `string` : `never` | Full KML geometry if available **`Remarks`** only with `polygon_kml=1` |
| `geotext?` | `TParams`[``"polygon_text"``] extends ``1`` ? `string` : `never` | Full text geometry if available **`Remarks`** only with `polygon_text=1` |
| `icon?` | `string` | Link to [class](modules.md#class) icon (if available). |
| `importance` | `number` | Computed importance rank |
| `lat` | [`CoordinateString`](modules.md#coordinatestring) | Latitude of the centroid of the object. **`See`** [CoordinateString](modules.md#coordinatestring) |
| `lon` | [`CoordinateString`](modules.md#coordinatestring) | Longitude of the centroid of the object. **`See`** [CoordinateString](modules.md#coordinatestring) |
| `name` | `string` | Localised name of the place. **`Example`** ```ts `Avenue des Champs-Élysées` ``` |
| `namedetails` | `TParams`[``"namedetails"``] extends ``1`` ? [`NameDetails`](modules.md#namedetails) : `never` | Dictionary with full list of available names, including `ref`, etc... **`See`** [NameDetails](modules.md#namedetails) **`Remarks`** Only with `namedetails=1` |
| `osm_id` | [`OSMId`](modules.md#osmid) | **`See`** [OSMId](modules.md#osmid) |
| `osm_type` | [`OSMType`](modules.md#osmtype) | **`See`** [OSMType](modules.md#osmtype) |
| `place_id` | [`PlaceId`](modules.md#placeid) | **`See`** [PlaceId](modules.md#placeid) |
| `svg?` | `TParams`[``"polygon_svg"``] extends ``1`` ? `string` : `never` | Full SVG geometry if available **`Remarks`** only with `polygon_svg=1` |
| `type` | [`OSMTagValue`](modules.md#osmtagvalue) | **`See`** [OSMTagValue](modules.md#osmtagvalue) |

#### Defined in

[src/types/place.ts:15](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/place.ts#L15)

___

### JSONSearchResponse

Ƭ **JSONSearchResponse**<`TParams`\>: [`JSONPlace`](modules.md#jsonplace)<`TParams`\>[]

### Nominatim search response
List of JSON formatted places

**`Remarks`**

Only with `format=json`

**`See`**

[JSONPlace](modules.md#jsonplace)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`SearchParams`](interfaces/SearchParams.md) |

#### Defined in

[src/types/responses/search.ts:23](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/search.ts#L23)

___

### JSONStatus

Ƭ **JSONStatus**<`TStatusCode`\>: `TStatusCode` extends ``0`` ? [`JSONSuccessStatus`](interfaces/JSONSuccessStatus.md) : [`JSONErrorStatus`](interfaces/JSONErrorStatus.md)<`TStatusCode`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStatusCode` | extends [`StatusCode`](modules.md#statuscode) |

#### Defined in

[src/types/responses/status.ts:37](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L37)

___

### JSONV2LookupResponse

Ƭ **JSONV2LookupResponse**<`TParams`\>: [`JSONV2Place`](interfaces/JSONV2Place.md)<`TParams`\>[]

### Nominatim lookup response
List of JSONV2 formatted places

**`Remarks`**

Only with `format=jsonv2`

**`See`**

[JSONV2Place](interfaces/JSONV2Place.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Defined in

[src/types/responses/lookup.ts:36](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/lookup.ts#L36)

___

### JSONV2SearchResponse

Ƭ **JSONV2SearchResponse**<`TParams`\>: [`JSONV2Place`](interfaces/JSONV2Place.md)<`TParams`\>[]

### Nominatim search response
List of JSONV2 formatted places

**`Remarks`**

Only with `format=jsonv2`

**`See`**

[JSONV2Place](interfaces/JSONV2Place.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`SearchParams`](interfaces/SearchParams.md) |

#### Defined in

[src/types/responses/search.ts:36](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/search.ts#L36)

___

### NameDetails

Ƭ **NameDetails**: `Object`

#### Index signature

▪ [k: `string`]: `string` \| `undefined`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ref?` | `string` |

#### Defined in

[src/types/shared.ts:9](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/shared.ts#L9)

___

### NominatimApiUrl

Ƭ **NominatimApiUrl**<`TEndpoint`, `TReplacementUrl`\>: \`${TReplacementUrl extends string ? TReplacementUrl : NominatimBaseUrl}${TEndpoint}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpoint` | extends [`NominatimEndpoint`](modules.md#nominatimendpoint) |
| `TReplacementUrl` | extends `string` \| `undefined` = `undefined` |

#### Defined in

[src/types/endpoint.ts:29](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L29)

___

### NominatimBaseUrl

Ƭ **NominatimBaseUrl**: ``"https://nominatim.openstreetmap.org"``

#### Defined in

[src/types/endpoint.ts:18](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L18)

___

### NominatimEndpoint

Ƭ **NominatimEndpoint**: typeof [`endpoints`](modules.md#endpoints)[`number`]

#### Defined in

[src/types/endpoint.ts:27](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L27)

___

### NominatimEndpointParams

Ƭ **NominatimEndpointParams**<`TEndpoint`\>: `TEndpoint` extends ``"/search"`` ? [`NominatimSearchParams`](modules.md#nominatimsearchparams) : `TEndpoint` extends ``"/reverse"`` ? [`NominatimReverseParams`](interfaces/NominatimReverseParams.md) : `TEndpoint` extends ``"/lookup"`` ? [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) : `TEndpoint` extends ``"/status.php"`` ? [`NominatimStatusParams`](interfaces/NominatimStatusParams.md) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpoint` | extends [`NominatimEndpoint`](modules.md#nominatimendpoint) |

#### Defined in

[src/types/endpoint.ts:41](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L41)

___

### NominatimEndpointResponse

Ƭ **NominatimEndpointResponse**<`TEndpoint`, `TEndpointParams`\>: `TEndpointParams` extends [`NominatimSearchParams`](modules.md#nominatimsearchparams) ? [`NominatimSearchResponse`](modules.md#nominatimsearchresponse)<`TEndpointParams`\> : `TEndpointParams` extends [`NominatimReverseParams`](interfaces/NominatimReverseParams.md) ? [`NominatimReverseResponse`](modules.md#nominatimreverseresponse)<`TEndpointParams`\> : `TEndpointParams` extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) ? [`NominatimLookupResponse`](modules.md#nominatimlookupresponse)<`TEndpointParams`\> : `TEndpointParams` extends [`NominatimStatusParams`](interfaces/NominatimStatusParams.md) ? [`NominatimStatusResponse`](modules.md#nominatimstatusresponse)<`TEndpointParams`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpoint` | extends [`NominatimEndpoint`](modules.md#nominatimendpoint) |
| `TEndpointParams` | extends [`NominatimEndpointParams`](modules.md#nominatimendpointparams)<`TEndpoint`\> |

#### Defined in

[src/types/endpoint.ts:53](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L53)

___

### NominatimLookupResponse

Ƭ **NominatimLookupResponse**<`TParams`\>: `TParams`[``"format"``] extends ``"json"`` ? [`JSONLookupResponse`](modules.md#jsonlookupresponse)<`TParams`\> : `TParams`[``"format"``] extends ``"geojson"`` ? [`GeoJSONLookupResponse`](modules.md#geojsonlookupresponse)<`TParams`\> : `TParams`[``"format"``] extends ``"geocodejson"`` ? [`GeocodeJSONLookupResponse`](modules.md#geocodejsonlookupresponse)<`TParams`\> : [`JSONV2LookupResponse`](modules.md#jsonv2lookupresponse)<`TParams`\>

### Nominatim lookup response
One of [JSONLookupResponse](modules.md#jsonlookupresponse), [JSONV2LookupResponse](modules.md#jsonv2lookupresponse), [GeoJSONLookupResponse](modules.md#geojsonlookupresponse) or [GeocodeJSONLookupResponse](modules.md#geocodejsonlookupresponse) based on [format](interfaces/NominatimLookupParams.md#format).

**`Default Value`**

[JSONV2LookupResponse](modules.md#jsonv2lookupresponse)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Defined in

[src/types/responses/lookup.ts:84](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/lookup.ts#L84)

___

### NominatimReverseResponse

Ƭ **NominatimReverseResponse**<`TParams`\>: `TParams`[``"format"``] extends ``"json"`` ? [`JSONReverseResponse`](interfaces/JSONReverseResponse.md)<`TParams`\> : `TParams`[``"format"``] extends ``"geojson"`` ? [`GeoJSONReverseResponse`](interfaces/GeoJSONReverseResponse.md)<`TParams`\> : `TParams`[``"format"``] extends ``"geocodejson"`` ? [`GeocodeJSONReverseResponse`](interfaces/GeocodeJSONReverseResponse.md)<`TParams`\> : [`JSONV2ReverseResponse`](interfaces/JSONV2ReverseResponse.md)<`TParams`\>

### Nominatim reverse response
One of [JSONSearchResponse](modules.md#jsonsearchresponse), [JSONV2SearchResponse](modules.md#jsonv2searchresponse), [GeoJSONSearchResponse](modules.md#geojsonsearchresponse) or [GeocodeJSONSearchResponse](modules.md#geocodejsonsearchresponse) based on [format](interfaces/SearchParams.md#format).

**`Default Value`**

[JSONV2SearchResponse](modules.md#jsonv2searchresponse)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimReverseParams`](interfaces/NominatimReverseParams.md) |

#### Defined in

[src/types/responses/reverse.ts:86](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/reverse.ts#L86)

___

### NominatimSearchParams

Ƭ **NominatimSearchParams**: [`SimpleSearchParams`](interfaces/SimpleSearchParams.md) \| [`ComplexSearchParams`](interfaces/ComplexSearchParams.md)

Valid query parameters.

**`Remarks`**

Either [SimpleSearchParams](interfaces/SimpleSearchParams.md) **OR** [ComplexSearchParams](interfaces/ComplexSearchParams.md)

#### Defined in

[src/types/queries/search.ts:143](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/search.ts#L143)

___

### NominatimSearchResponse

Ƭ **NominatimSearchResponse**<`TParams`\>: `TParams`[``"format"``] extends ``"json"`` ? [`JSONSearchResponse`](modules.md#jsonsearchresponse)<`TParams`\> : `TParams`[``"format"``] extends ``"geojson"`` ? [`GeoJSONSearchResponse`](modules.md#geojsonsearchresponse)<`TParams`\> : `TParams`[``"format"``] extends ``"geocodejson"`` ? [`GeocodeJSONSearchResponse`](modules.md#geocodejsonsearchresponse)<`TParams`\> : [`JSONV2SearchResponse`](modules.md#jsonv2searchresponse)<`TParams`\>

### Nominatim search response
One of [JSONSearchResponse](modules.md#jsonsearchresponse), [JSONV2SearchResponse](modules.md#jsonv2searchresponse), [GeoJSONSearchResponse](modules.md#geojsonsearchresponse) or [GeocodeJSONSearchResponse](modules.md#geocodejsonsearchresponse) based on [format](interfaces/NominatimLookupParams.md#format).

**`Default Value`**

[JSONV2SearchResponse](modules.md#jsonv2searchresponse)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`SearchParams`](interfaces/SearchParams.md) |

#### Defined in

[src/types/responses/search.ts:79](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/search.ts#L79)

___

### NominatimStatusFormatErrorResponse

Ƭ **NominatimStatusFormatErrorResponse**: ``"Parameter 'format' must be one of: text, json"``

#### Defined in

[src/types/responses/error.ts:12](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/error.ts#L12)

___

### NominatimStatusResponse

Ƭ **NominatimStatusResponse**<`TParams`, `TStatus`\>: `TParams`[``"format"``] extends ``"text"`` ? [`TextStatus`](modules.md#textstatus) : [`JSONStatus`](modules.md#jsonstatus)<`TStatus`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`NominatimStatusParams`](interfaces/NominatimStatusParams.md) |
| `TStatus` | extends [`StatusCode`](modules.md#statuscode) = [`StatusCode`](modules.md#statuscode) |

#### Defined in

[src/types/responses/status.ts:40](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L40)

___

### OSMId

Ƭ **OSMId**: `string`

#### Defined in

[src/types/osm.ts:54](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L54)

___

### OSMIdQuery

Ƭ **OSMIdQuery**: \`${OSMTypeAlias}${OSMId}\`

#### Defined in

[src/types/osm.ts:56](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L56)

___

### OSMIdsQuery

Ƭ **OSMIdsQuery**: [[`OSMIdQuery`](modules.md#osmidquery), OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?, OSMIdQuery?]

#### Defined in

[src/types/queries/lookup.ts:8](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/lookup.ts#L8)

___

### OSMTagKey

Ƭ **OSMTagKey**: ``"boundary"`` \| ``"place"`` \| ``"building"`` \| ``"tourism"`` \| ``"amenity"`` \| ``"highway"`` \| ``"shop"`` \| ``"leisure"`` \| ``"office"`` \| `string`

Key of the main OSM Tag

**`See`**

[https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax](https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax)

#### Defined in

[src/types/osm.ts:13](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L13)

___

### OSMTagValue

Ƭ **OSMTagValue**: ``"house"`` \| ``"detached"`` \| ``"information"`` \| ``"post_office"`` \| ``"service"`` \| ``"administrative"`` \| ``"suburb"`` \| ``"pedestrian"`` \| ``"historic"`` \| `string`

Value of the main OSM Tag

**`See`**

[https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax](https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax)

#### Defined in

[src/types/osm.ts:29](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L29)

___

### OSMType

Ƭ **OSMType**: ``"node"`` \| ``"relation"`` \| ``"way"``

#### Defined in

[src/types/osm.ts:5](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L5)

___

### OSMTypeAlias

Ƭ **OSMTypeAlias**: ``"N"`` \| ``"R"`` \| ``"W"``

#### Defined in

[src/types/osm.ts:7](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L7)

___

### PlaceId

Ƭ **PlaceId**: `string`

Reference to the Nominatim internal database ID
The `place_id` is an internal identifier that is assigned data is imported into a Nominatim database.
The same OSM object will have a different value on another server.
It may even change its ID on the same server when it is removed and reimported while updating the database with fresh OSM data.
It is thus not useful to treat it as permanent for later use.

**`Remarks`**

If you need an ID that is consistent over multiple installations of Nominatim,
then you should use the combination of [osm_type](modules.md#osmtype) + [osm_type](modules.md#osmid) + [`class | category`](modules.md#osmtagkey).

#### Defined in

[src/types/osm.ts:52](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/osm.ts#L52)

___

### ResponseFormat

Ƭ **ResponseFormat**: ``"json"`` \| ``"jsonv2"`` \| ``"geojson"`` \| ``"geocodejson"``

**`See`**

[Place output formats](https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=See-,Place%20Output%20Formats,-for%20details%20on) for details on each format

#### Defined in

[src/types/queries/shared.ts:9](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/shared.ts#L9)

___

### ResponseOrError

Ƭ **ResponseOrError**<`TResponse`\>: `TResponse` \| [`NominatimErrorResponse`](interfaces/NominatimErrorResponse.md) \| [`NominatimStatusFormatErrorResponse`](modules.md#nominatimstatusformaterrorresponse)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | extends `object` |

#### Defined in

[src/types/endpoint.ts:36](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L36)

___

### StatusCode

Ƭ **StatusCode**: typeof [`statusCodes`](modules.md#statuscodes)[`number`]

#### Defined in

[src/types/responses/status.ts:21](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L21)

___

### StatusFormat

Ƭ **StatusFormat**: ``"text"`` \| ``"json"``

Nominatim status format
Influences shape and details of response in case of status error

**`Default`**

```ts

```

#### Defined in

[src/types/queries/status.ts:11](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/queries/status.ts#L11)

___

### StatusMessage

Ƭ **StatusMessage**<`TStatusCode`\>: typeof [`statusMessages`](modules.md#statusmessages)[`TStatusCode`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStatusCode` | extends [`StatusCode`](modules.md#statuscode) |

#### Defined in

[src/types/responses/status.ts:23](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L23)

___

### TextStatus

Ƭ **TextStatus**: ``"OK"`` \| ``"ERROR: Database connection failed"``

#### Defined in

[src/types/responses/status.ts:7](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L7)

## Variables

### GeoJSONTypes

• `Const` **GeoJSONTypes**: readonly [``"Point"``, ``"MultiPoint"``, ``"LineString"``, ``"MultiLineString"``, ``"Polygon"``, ``"MultiPolygon"``]

#### Defined in

[src/types/geo.ts:12](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/geo.ts#L12)

___

### NOMINATIM\_API\_URL

• `Const` **NOMINATIM\_API\_URL**: [`NominatimBaseUrl`](modules.md#nominatimbaseurl)

#### Defined in

[src/api/endpoint.ts:15](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L15)

___

### endpoints

• `Const` **endpoints**: readonly [``"/search"``, ``"/reverse"``, ``"/lookup"``, ``"/status.php"``]

#### Defined in

[src/types/endpoint.ts:20](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/endpoint.ts#L20)

___

### statusCodes

• `Const` **statusCodes**: readonly [``0``, ``700``, ``701``, ``702``, ``703``, ``704``, ``705``]

#### Defined in

[src/types/responses/status.ts:9](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L9)

___

### statusMessages

• `Const` **statusMessages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | ``"OK"`` |
| `700` | ``"Connection failed"`` |
| `701` | ``"Module failed"`` |
| `702` | ``"Module call failed"`` |
| `703` | ``"Query failed"`` |
| `704` | ``"No value"`` |
| `705` | ``"Import date is not available"`` |

#### Defined in

[src/types/responses/status.ts:11](https://github.com/blksnk/nominatim-js/blob/2f25718/src/types/responses/status.ts#L11)

## Functions

### endpointFactory

▸ **endpointFactory**<`TEndpoint`\>(`endpoint`, `rootReplacementBaseUrl?`): <TEndpointParams\>(`params`: `TEndpointParams`, `replacementBaseUrl?`: `string`) => `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<`TEndpoint`, `TEndpointParams`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpoint` | extends ``"/search"`` \| ``"/reverse"`` \| ``"/lookup"`` \| ``"/status.php"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `TEndpoint` |
| `rootReplacementBaseUrl?` | `string` |

#### Returns

`fn`

▸ <`TEndpointParams`\>(`params`, `replacementBaseUrl?`): `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<`TEndpoint`, `TEndpointParams`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpointParams` | extends [`NominatimSearchParams`](modules.md#nominatimsearchparams) \| [`NominatimReverseParams`](interfaces/NominatimReverseParams.md) \| [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) \| [`NominatimStatusParams`](interfaces/NominatimStatusParams.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `TEndpointParams` |
| `replacementBaseUrl?` | `string` |

##### Returns

`Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<`TEndpoint`, `TEndpointParams`\>\>

#### Defined in

[src/api/endpoint.ts:45](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L45)

___

### getEndpointUrl

▸ **getEndpointUrl**(`endpoint`, `replacementBaseUrl?`): \`${string}/search\` \| \`${string}/reverse\` \| \`${string}/lookup\` \| \`${string}/status.php\`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | ``"/search"`` \| ``"/reverse"`` \| ``"/lookup"`` \| ``"/status.php"`` |
| `replacementBaseUrl?` | `string` |

#### Returns

\`${string}/search\` \| \`${string}/reverse\` \| \`${string}/lookup\` \| \`${string}/status.php\`

#### Defined in

[src/api/endpoint.ts:18](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L18)

___

### lookup

▸ **lookup**<`TEndpointParams`\>(`params`, `replacementBaseUrl?`): `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/lookup"``, `TEndpointParams`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpointParams` | extends [`NominatimLookupParams`](interfaces/NominatimLookupParams.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `TEndpointParams` |
| `replacementBaseUrl?` | `string` |

#### Returns

`Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/lookup"``, `TEndpointParams`\>\>

#### Defined in

[src/api/endpoint.ts:49](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L49)

___

### reverse

▸ **reverse**<`TEndpointParams`\>(`params`, `replacementBaseUrl?`): `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/reverse"``, `TEndpointParams`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpointParams` | extends [`NominatimReverseParams`](interfaces/NominatimReverseParams.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `TEndpointParams` |
| `replacementBaseUrl?` | `string` |

#### Returns

`Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/reverse"``, `TEndpointParams`\>\>

#### Defined in

[src/api/endpoint.ts:49](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L49)

___

### search

▸ **search**<`TEndpointParams`\>(`params`, `replacementBaseUrl?`): `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/search"``, `TEndpointParams`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpointParams` | extends [`NominatimSearchParams`](modules.md#nominatimsearchparams) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `TEndpointParams` |
| `replacementBaseUrl?` | `string` |

#### Returns

`Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/search"``, `TEndpointParams`\>\>

#### Defined in

[src/api/endpoint.ts:49](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L49)

___

### status

▸ **status**<`TEndpointParams`\>(`params`, `replacementBaseUrl?`): `Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/status.php"``, `TEndpointParams`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEndpointParams` | extends [`NominatimStatusParams`](interfaces/NominatimStatusParams.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `TEndpointParams` |
| `replacementBaseUrl?` | `string` |

#### Returns

`Promise`<[`NominatimEndpointResponse`](modules.md#nominatimendpointresponse)<``"/status.php"``, `TEndpointParams`\>\>

#### Defined in

[src/api/endpoint.ts:49](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/endpoint.ts#L49)

___

### throwOnError

▸ **throwOnError**<`TResponse`\>(`apiResponse`): `TResponse`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiResponse` | [`ResponseOrError`](modules.md#responseorerror)<`TResponse`\> |

#### Returns

`TResponse`

#### Defined in

[src/api/error.ts:19](https://github.com/blksnk/nominatim-js/blob/2f25718/src/api/error.ts#L19)
