/**
 * @module types/place
 */
import { OSMId, OSMTagKey, OSMTagValue, OSMType, PlaceId } from "./osm";
import { CoordinateString, GeocodeJSONAdminLevel, GeocodeJSONFeatureType, GeoJSONGeometry } from "./geo";
import { AddressDetails, AddressType, ExtraTags, NameDetails } from "./shared";
import { CommonOutputParams } from "./queries/shared";
export declare type JSONPlace<TParams extends CommonOutputParams> = {
    /**
     * @see
     * {@link PlaceId}
     */
    place_id: PlaceId;
    /**
     * @see
     * {@link OSMType}
     */
    osm_type: OSMType;
    /**
     * @see
     * {@link OSMId}
     */
    osm_id: OSMId;
    /**
     * Comma separated list containing `min latitude`, `max latitude`, `min longitude`, `max longitude`.
     * @see
     * {@link CoordinateString}
     *
     * @remarks
     * Bounds crossing the antimeridian have a min latitude of `-180` and max latitude of `180`, essentially covering the entire planet.
     *
     * @example
     * The whole planet would be `-90,90,-180,180`.
     */
    boundingbox: CoordinateString[4];
    /**
     * Latitude of the centroid of the object.
     * @see
     * {@link CoordinateString}
     */
    lat: CoordinateString;
    /**
     * Longitude of the centroid of the object.
     * @see
     * {@link CoordinateString}
     */
    lon: CoordinateString;
    /**
     * Full comma-separated address.
     *
     * @example `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France`
     */
    display_name: string;
    /**
     * Localised name of the place.
     *
     * @example `Avenue des Champs-Élysées`
     */
    name: string;
    /**
     * @see
     * {@link OSMTagKey}
     */
    class: OSMTagKey;
    /**
     * @see
     * {@link OSMTagValue}
     */
    type: OSMTagValue;
    /**
     * @see
     * {@link AddressType}
     */
    addresstype: AddressType;
    /**
     * Computed importance rank
     */
    importance: number;
    /**
     * Link to {@link JSONPlace.class class} icon (if available).
     */
    icon?: string;
    /**
     * Dictionary of address details
     * @see
     * {@link AddressDetails}
     *
     * @remarks
     * Only with `addressdetails=1`
     */
    address: TParams["addressdetails"] extends 1 ? AddressDetails : never;
    /**
     * Dictionary with additional useful tags like `website`, `opening_hours` or `maxspeed`.
     * Varies based on result type and available information.
     *
     * @remarks
     * Only with `extratags=1`
     */
    extratags: TParams["extratags"] extends 1 ? ExtraTags : never;
    /**
     * Dictionary with full list of available names,  including `ref`, etc...
     * @see
     * {@link NameDetails}
     *
     * @remarks
     * Only with `namedetails=1`
     */
    namedetails: TParams["namedetails"] extends 1 ? NameDetails : never;
    /**
     * Full SVG geometry if available
     *
     * @remarks
     * only with `polygon_svg=1`
     */
    svg?: TParams["polygon_svg"] extends 1 ? string : never;
    /**
     * Full geoJSON geometry if available
     * @see
     * {@link GeoJSONGeometry}
     *
     * @remarks
     * only with `polygon_geojson=1`
     */
    geojson?: TParams["polygon_geojson"] extends 1 ? GeoJSONGeometry<number> : never;
    /**
     * Full KML geometry if available
     *
     * @remarks
     * only with `polygon_kml=1`
     */
    geokml?: TParams["polygon_kml"] extends 1 ? string : never;
    /**
     * Full text geometry if available
     *
     * @remarks
     * only with `polygon_text=1`
     */
    geotext?: TParams["polygon_text"] extends 1 ? string : never;
};
/**
 * This is the same as the {@link JSONPlace} format with two changes:
 * - `class` renamed to `category`
 * - additional field `place_rank` with the search rank of the object
 */
export declare interface JSONV2Place<TParams extends CommonOutputParams> extends Omit<JSONPlace<TParams>, "class"> {
    /**
     * @see
     * {@link JSONPlace.class}
     */
    category: OSMTagKey;
    /**
     * Search rank of the object
     */
    place_rank: number;
}
/**
 * Result format according to {@link https://geojson.org/ RFC7946} standard.
 * Every feature includes a bounding box.
 * @see
 * {@link GeoJSONPlace.bbox}
 */
export declare type GeoJSONPlace<TParams extends CommonOutputParams> = {
    type: "Feature";
    /**
     * GeoJSON geometry of the object.
     * @see
     * {@link GeoJSONGeometry}
     *
     * @remarks
     * Returns `GeoJSONGeometry<"Polygon" | "MultiPolygon">` based on object geometry if `polygon_geojson=1`,
     * and `GeoJSONGeometry<"Point">` otherwise
     *
     * @defaultValue {@link GeoJSONGeometry<"Point">}
     */
    geometry: GeoJSONGeometry<number, TParams["polygon_geojson"] extends 1 ? unknown : "Point">;
    /**
     * Number array containing `min latitude`, `max latitude`, `min longitude`, `max longitude`.
     *
     * @remarks
     * Bounds crossing the antimeridian have a min latitude of `-180` and max latitude of `180`, essentially covering the entire planet.
     *
     * @example
     * The whole planet would be `[-90,90,-180,180]`.
     */
    bbox: [number, number, number, number];
    properties: {
        /**
         * @see
         * {@link PlaceId}
         */
        place_id: string;
        /**
         * @see
         * {@link OSMType}
         */
        osm_type: OSMType;
        /**
         * @see
         * {@link OSMId}
         */
        osm_id: string;
        /**
         * @see
         * {@link OSMTagKey}
         */
        category: OSMTagKey;
        /**
         * @see
         * {@link OSMTagValue}
         */
        type: OSMTagValue;
        /**
         * @see
         * {@link AddressType}
         */
        addresstype: AddressType;
        /**
         * Computed importance rank
         */
        importance: number;
        /**
         * Full comma-separated address.
         *
         * @example `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France`
         */
        display_name: string;
        /**
         * Localised name of the place.
         *
         * @example `Avenue des Champs-Élysées`
         */
        name: string;
        /**
         * Dictionary of address details
         * @see
         * {@link AddressDetails}
         *
         * @remarks
         * Only with `addressdetails=1`
         */
        address: TParams["addressdetails"] extends 1 ? AddressDetails : never;
        /**
         * Dictionary with additional useful tags like `website`, `opening_hours` or `maxspeed`.
         * Varies based on result type and available information.
         *
         * @remarks
         * Only with `extratags=1`
         */
        extratags: TParams["extratags"] extends 1 ? ExtraTags : never;
        /**
         * Dictionary with full list of available names,  including `ref`, etc...
         * @see {@link NameDetails}
         *
         * @remarks
         * Only with `namedetails=1`
         */
        namedetails: TParams["namedetails"] extends 1 ? NameDetails : never;
    };
};
/**
 * Result format according to the {@link https://github.com/geocoders/geocodejson-spec/tree/master/draft#feature-object GeocodeJSON spec 0.1.0}.
 */
export declare type GeocodeJSONPlace<TParams extends CommonOutputParams> = {
    type: "Feature";
    license: string;
    properties: {
        geocoding: {
            /**
             * @see
             * {@link GeocodeJSONFeatureType}
             */
            type: GeocodeJSONFeatureType;
            /**
             * Full comma-separated address.
             *
             * @example `12, Avenue des Champs-Élysées, Quartier des Champs-Élysées, Paris 8e Arrondissement, Paris, Île-de-France, France métropolitaine, 75008, France`
             */
            label: string;
            /**
             * Localised name of the place.
             *
             * @example `Avenue des Champs-Élysées`
             */
            name: string;
            /**
             * @see
             * {@link AddressDetails.house_number}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            housenumber?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.road}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            street?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.municipality}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            locality?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.postcode}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            postcode?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.city}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            city?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.city_district}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            district?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.county}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            county?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.state}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            state?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.country}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            country?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * @see
             * {@link AddressDetails.country_code}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            country_code?: TParams["addressdetails"] extends 1 ? string : never;
            /**
             * List of localised names of administrative boundaries
             *
             * @see
             * {@link GeocodeJSONAdminLevel}
             *
             * @remarks
             * Only with `addressdetails=1`
             */
            admin?: TParams["addressdetails"] extends 1 ? GeocodeJSONAdminLevel : never;
        };
    };
    /**
     * GeoJSON geometry of the object.
     * @see
     * {@link GeoJSONGeometry}
     *
     * @remarks
     * Returns `GeoJSONGeometry<"Polygon" | "MultiPolygon">` based on object geometry if `polygon_geojson=1`,
     * and `GeoJSONGeometry<"Point">` otherwise
     *
     * @defaultValue {@link GeoJSONGeometry<"Point">}
     */
    geometry: GeoJSONGeometry<number, TParams["polygon_geojson"] extends 1 ? unknown : "Point">;
};
