/**
 * @module search/query
 */
import { CommonOutputParams } from "./shared";
/**
 * Free-form query string to search for.
 * Free-form queries are processed first left-to-right and then right-to-left if that fails.
 * Commas are optional, but improve performance by reducing the complexity of the search.
 *
 * @remarks
 * ***Do not combine with {@link ComplexQuery} parameters***.
 */
export declare interface SimpleQuery {
    q: string;
    street?: never;
    city?: never;
    county?: never;
    state?: never;
    country?: never;
    postalcode?: never;
}
/**
 * Alternative query string format split into several parameters for structured requests.
 * Structured requests are faster but are less robust against alternative OSM tagging schemas.
 *
 * @remarks
 * ***Do not combine with {@link SimpleQuery} parameter***.
 */
export declare interface ComplexQuery {
    q?: never;
    street?: string;
    city?: string;
    county?: string;
    state?: string;
    country?: string;
    postalcode?: string;
}
export declare interface SearchResultLimitationParams {
    /**
     * Limit search results to one or more countries.
     *
     * Must be the {@link https://nominatim.org/release-docs/latest/api/Search/#examples:~:text=must%20be%20the-,ISO%203166%2D1alpha2,-code%2C%20e.g ISO 3166-1alpha2 code}, e.g. gb for the United Kingdom, de for Germany.
     *
     * @example `fr,gb,de`
     */
    countrycodes?: string;
    /**
     * If you do not want certain OSM objects to appear in the search result, give a comma separated list of the `place_ids` you want to skip.
     * This can be used to retrieve additional search results.
     * @example
     * If a previous query only returned a few results, then including those here would cause the search to return other, less accurate, matches (if possible)
     */
    exclude_place_ids?: string;
    /**
     * Limit the number of returned results.
     * Number between `1` and `50`
     *
     * @defaultValue `10`
     */
    limit?: number;
    /**
     * The preferred area to find search results.
     * Any two corner points of the box are accepted as long as they span a real box.
     *
     * @example `<x1>,<y1>,<x2>,<y2>`
     *
     * @remarks
     * `x` is longitude, `y` is latitude.
     */
    viewbox?: `${number},${number},${number},${number}`;
    /**
     * When a `viewbox` is given, restrict the result to items contained within that viewbox, see {@link SearchResultLimitationParams.viewbox}.
     *
     * @remarks
     * When `viewbox` and `bounded=1` are given, an amenity only search is allowed.
     * Give the special keyword for the amenity in square brackets, e.g. [pub] and a selection of objects of this type is returned.
     * There is no guarantee that the result is complete.
     *
     * @defaultValue `0`
     */
    bounded?: 0 | 1;
}
/**
 * Optional Nominatim search parameters.
 * Include these params in your query to influence the shape and data of the results
 */
export declare interface SearchParams extends CommonOutputParams, SearchResultLimitationParams {
    /**
     * Sometimes you have several objects in OSM identifying the same place or object in reality.
     * The simplest case is a street being split into many different OSM ways due to different characteristics.
     * @remarks
     * Nominatim will attempt to detect such duplicates and only return one match unless this parameter is set to 0.
     *
     * @defaultValue `1`
     */
    dedupe?: 0 | 1;
}
/**
 * Valid query parameters for a simple query
 * Extends {@link SearchParams} with {@link SimpleQuery}
 *
 * @example
 * ```typescript
 * {
 *   q: "12 Avenue des Champs Élysées, Paris, France",
 *   addressdetails: 1,
 * }
 * ```
 */
export declare interface SimpleSearchParams extends SearchParams, SimpleQuery {
}
/**
 * Valid query parameters for a complex query
 * Extends {@link SearchParams} with {@link SimpleQuery}
 *
 * @example
 * ```typescript
 * {
 *   country: "France",
 *   city: "Paris",
 *   street: "12, Avenue des Champs Élysées",
 *   addressdetails: 1,
 * }
 * ```
 */
export declare interface ComplexSearchParams extends SearchParams, ComplexQuery {
}
/**
 * Valid query parameters.
 *
 * @remarks
 * Either {@link SimpleSearchParams} **OR** {@link ComplexSearchParams}
 */
export declare type NominatimSearchParams = SimpleSearchParams | ComplexSearchParams;
