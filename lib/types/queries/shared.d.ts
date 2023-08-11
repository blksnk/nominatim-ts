/**
 * @module types/queries-shared
 */
export declare const ResponseFormats: readonly ["json", "jsonv2", "geojson", "geocodejson"];
/**
 * @see
 * {@link https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=See-,Place%20Output%20Formats,-for%20details%20on Place output formats} for details on each format
 */
export declare type ResponseFormat = (typeof ResponseFormats)[number];
/**
 * Output geometry of results as a GeoJSON, KML, SVG or WKT.
 *
 * @remarks
 * Only one of these options can be used at a time.
 *
 * @defaultValue `0`
 */
export declare interface PolygonOutputParams {
    polygon_geojson?: 1;
    polygon_kml?: 1;
    polygon_svg?: 1;
    polygon_text?: 1;
}
export declare interface PolygonParams extends PolygonOutputParams {
    /**
     * Return a simplified version of the output geometry.
     * The parameter is the tolerance in degrees with which the geometry may differ from the original geometry.
     * Topology is preserved in the result.
     *
     * @defaultValue `0.0`
     */
    polygon_threshold?: number;
}
export declare interface AdditionalParams {
    /**
     * Preferred language order for showing search results
     * Either use a standard RFC2616 accept-language string or a simple comma-separated list of language codes.
     */
    "accept-langage"?: string;
    /**
     * If you are making large numbers of requests, please include an appropriate email address to identify your requests.
     * @see
     * {@link https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=requests.%20See%20Nominatim%27s-,Usage%20Policy,-for%20more%20details Nominatim's Usage Policy} for more details.
     */
    email?: `${string}@${string}.${string}`;
    /**
     * Output assorted developer debug information.
     * Data on internals of Nominatim's "Search Loop" logic, and SQL queries.
     *
     * @remarks
     * The output is (rough) HTML format. This overrides the specified machine readable format.
     *
     * @defaultValue `0`
     */
    debug?: 0 | 1;
}
/**
 * Enable additional output details for query results
 */
export declare interface OutputDetailsParams {
    /**
     * Include a breakdown of the address into elements
     *
     * @defaultValue `0`
     */
    addressdetails?: 0 | 1;
    /**
     * Include additional information in the result if available, e.g. wikipedia link, opening hours.
     *
     * @defaultValue `0`
     */
    extratags?: 0 | 1;
    /**
     * Include a list of alternative names in the results.
     * These may include language variants, references, operator and brand.
     *
     * @defaultValue `0`
     */
    namedetails?: 0 | 1;
}
export declare interface CommonOutputParams extends OutputDetailsParams, AdditionalParams, PolygonParams {
    /**
     * Dictates api response format
     * @defaultValue `jsonv2`
     *
     * @see
     * {@link ResponseFormat}
     */
    format?: ResponseFormat;
}
