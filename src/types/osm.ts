/**
 * @module types/osm
 */

export declare type OSMType = "node" | "relation" | "way";

export declare type OSMTypeAlias = "N" | "R" | "W";
/**
 * Key of the main OSM Tag
 * @see
 * {@link https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax}
 */
export declare type OSMTagKey =
  | "boundary"
  | "place"
  | "building"
  | "tourism"
  | "amenity"
  | "highway"
  | "shop"
  | "leisure"
  | "office"
  | string;
/**
 * Value of the main OSM Tag
 * @see
 * {@link https://wiki.openstreetmap.org/wiki/Tags#key=value_syntax}
 */
export declare type OSMTagValue =
  | "house"
  | "detached"
  | "information"
  | "post_office"
  | "service"
  | "administrative"
  | "suburb"
  | "pedestrian"
  | "historic"
  | string;

/**
 * Reference to the Nominatim internal database ID
 * The `place_id` is an internal identifier that is assigned data is imported into a Nominatim database.
 * The same OSM object will have a different value on another server.
 * It may even change its ID on the same server when it is removed and reimported while updating the database with fresh OSM data.
 * It is thus not useful to treat it as permanent for later use.
 *
 * @remarks
 * If you need an ID that is consistent over multiple installations of Nominatim,
 * then you should use the combination of {@link OSMType osm_type} + {@link OSMId osm_type} + {@link OSMTagKey `class | category`}.
 */
export declare type PlaceId = string;

export declare type OSMId = string;

export declare type OSMIdQuery = `${OSMTypeAlias}${OSMId}`;
