/**
 * @module search/response
 */

import { SearchParams } from "../queries/search";
import {
  GeocodeJSONPlace,
  GeoJSONPlace,
  JSONPlace,
  JSONV2Place,
} from "../place";

/**
 * ### Nominatim search response
 * List of JSON formatted places
 *
 * @remarks
 * Only with `format=json`
 *
 * @see
 * {@link JSONPlace}
 */
export declare type JSONSearchResponse<TParams extends SearchParams> =
  JSONPlace<TParams>[];

/**
 * ### Nominatim search response
 * List of JSONV2 formatted places
 *
 * @remarks
 * Only with `format=jsonv2`
 *
 * @see
 * {@link JSONV2Place}
 */
export declare type JSONV2SearchResponse<TParams extends SearchParams> =
  JSONV2Place<TParams>[];

/**
 * ### Nominatim search response
 * FeatureCollection of GeoJSON formatted places
 *
 * @remarks
 * Only with `format=geojson`
 *
 * @see
 * {@link GeoJSONPlace}
 */
export declare type GeoJSONSearchResponse<TParams extends SearchParams> = {
  type: "FeatureCollection";
  features: GeoJSONPlace<TParams>[];
};

/**
 * ### Nominatim search response
 * FeatureCollection of GeocodeJSON formatted places
 *
 * @remarks
 * Only with `format=geocodejson`
 *
 * @see
 * {@link GeocodeJSONPlace}
 */
export declare type GeocodeJSONSearchResponse<TParams extends SearchParams> = {
  type: "FeatureCollection";
  geocoding: {
    version: string;
    attribution: string;
    licence: string;
    query: string;
  };
  features: GeocodeJSONPlace<TParams>[];
};
/**
 * ### Nominatim search response
 * One of {@link JSONSearchResponse}, {@link JSONV2SearchResponse}, {@link GeoJSONSearchResponse} or {@link GeocodeJSONSearchResponse} based on {@link SearchParams.format}.
 * @defaultValue {@link JSONV2SearchResponse}
 */
export declare type NominatimSearchResponse<TParams extends SearchParams> =
  TParams["format"] extends "json"
    ? JSONSearchResponse<TParams>
    : TParams["format"] extends "geojson"
    ? GeoJSONSearchResponse<TParams>
    : TParams["format"] extends "geocodejson"
    ? GeocodeJSONSearchResponse<TParams>
    : JSONV2SearchResponse<TParams>;
