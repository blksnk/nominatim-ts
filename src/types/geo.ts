/**
 * @module types/geo
 */

/**
 * Single coordinate formatted as a string
 *
 * @example `6.236721`
 */
export declare type CoordinateString = `${number}`;

export const GeoJSONTypes = [
  "Point",
  "MultiPoint",
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon",
] as const;

export declare type GeoJSONType = (typeof GeoJSONTypes)[number];

export declare type GeoJSONCoordinate = CoordinateString | number;

export declare interface GeoJSOGeometryBase {
  type: GeoJSONType;
}

export declare interface GeoJSONMultiPolygon<
  TCoordinate extends GeoJSONCoordinate,
> extends GeoJSOGeometryBase {
  type: "MultiPolygon";
  coordinates: [TCoordinate, TCoordinate][][][];
}

export declare interface GeoJSONPolygon<TCoordinate extends GeoJSONCoordinate>
  extends GeoJSOGeometryBase {
  type: "Polygon";
  coordinates: [TCoordinate, TCoordinate][][];
}

export declare interface GeoJSONMultiPoint<
  TCoordinate extends GeoJSONCoordinate,
> extends GeoJSOGeometryBase {
  type: "MultiPoint";
  coordinates: [TCoordinate, TCoordinate][];
}

export declare interface GeoJSONPoint<TCoordinate extends GeoJSONCoordinate>
  extends GeoJSOGeometryBase {
  type: "Point";
  coordinates: [TCoordinate, TCoordinate];
}

export declare interface GeoJSONLineString<
  TCoordinate extends GeoJSONCoordinate,
> extends GeoJSOGeometryBase {
  type: "LineString";
  coordinates: [TCoordinate, TCoordinate][];
}

export declare interface GeoJSONMultiLineString<
  TCoordinate extends GeoJSONCoordinate,
> extends GeoJSOGeometryBase {
  type: "MultiLineString";
  coordinates: [TCoordinate, TCoordinate][][];
}

/**
 * Generic GeoJSON geometry structure
 *
 * @remarks
 * - Coordinate values are either numbers or number strings, according to `TCoordinate` parameter
 * - Coordinate shape is dictated by `TType` parameter. If no type is provided, returns an union of every possible shape
 *
 * @see
 * - {@link GeoJSONCoordinate}
 * - {@link GeoJSONType}
 */
export declare type GeoJSONGeometry<
  TCoordinate extends GeoJSONCoordinate,
  TType extends GeoJSONType | unknown = unknown,
> = TType extends "MutliPolygon"
  ? GeoJSONMultiPolygon<TCoordinate>
  : TType extends "Polygon"
  ? GeoJSONPolygon<TCoordinate>
  : TType extends "MultiPoint"
  ? GeoJSONMultiPoint<TCoordinate>
  : TType extends "Point"
  ? GeoJSONPoint<TCoordinate>
  : TType extends "LineString"
  ? GeoJSONLineString<TCoordinate>
  : TType extends "MultiLineString"
  ? GeoJSONMultiLineString<TCoordinate>
  :
      | GeoJSONMultiPolygon<TCoordinate>
      | GeoJSONPolygon<TCoordinate>
      | GeoJSONMultiPoint<TCoordinate>
      | GeoJSONPoint<TCoordinate>
      | GeoJSONLineString<TCoordinate>
      | GeoJSONMultiLineString<TCoordinate>;

/**
 * GeocodeJSON `properties.geocoding.type` property.
 * @see
 * {@link https://github.com/geocoders/geocodejson-spec/tree/master/draft#feature-object:~:text=to%20be%20closed.-,%22type%22%3A%20%22house%22%2C,-//%20OPTIONAL.%20Result%20accuracy Spec draft}
 */
export declare type GeocodeJSONFeatureType =
  | "house"
  | "street"
  | "locality"
  | "city"
  | "region"
  | "country";

/**
 * Administratives boundaries the feature is included in.
 * @see
 * {@link http://wiki.osm.org/wiki/Key:admin_level#admin_level Spec definition}
 */
export declare type GeocodeJSONAdminLevel = {
  [k: `level${number}`]: string;
};
