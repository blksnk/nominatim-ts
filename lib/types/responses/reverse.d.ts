/**
 * @module reverse/response
 */
import { NominatimReverseParams } from "../queries/reverse";
import { GeocodeJSONPlace, GeoJSONPlace, JSONPlace, JSONV2Place } from "../place";
/**
 * ### Nominatim reverse response
 * List of JSON formatted places
 *
 * @remarks
 * Only with `format=json`
 *
 * @see
 * {@link JSONPlace}
 */
export declare interface JSONReverseResponse<TParams extends NominatimReverseParams> extends JSONPlace<TParams> {
}
/**
 * ### Nominatim reverse response
 * List of JSONV2 formatted places
 *
 * @remarks
 * Only with `format=jsonv2`
 *
 * @see
 * {@link JSONV2Place}
 */
export declare interface JSONV2ReverseResponse<TParams extends NominatimReverseParams> extends JSONV2Place<TParams> {
}
/**
 * ### Nominatim reverse response
 * FeatureCollection of GeoJSON formatted places
 *
 * @remarks
 * Only with `format=geojson`
 *
 * @see
 * {@link GeoJSONPlace}
 */
export declare interface GeoJSONReverseResponse<TParams extends NominatimReverseParams> {
    type: "FeatureCollection";
    features: GeoJSONPlace<TParams>[];
}
/**
 * ### Nominatim reverse response
 * FeatureCollection of GeocodeJSON formatted places
 *
 * @remarks
 * Only with `format=geocodejson`
 *
 * @see
 * {@link GeocodeJSONPlace}
 */
export declare interface GeocodeJSONReverseResponse<TParams extends NominatimReverseParams> {
    type: "FeatureCollection";
    geocoding: {
        version: string;
        attribution: string;
        licence: string;
        query: string;
    };
    features: GeocodeJSONPlace<TParams>[];
}
/**
 * ### Nominatim reverse response
 * One of {@link JSONSearchResponse}, {@link JSONV2SearchResponse}, {@link GeoJSONSearchResponse} or {@link GeocodeJSONSearchResponse} based on {@link SearchParams.format}.
 * @defaultValue {@link JSONV2SearchResponse}
 */
export declare type NominatimReverseResponse<TParams extends NominatimReverseParams> = TParams["format"] extends "json" ? JSONReverseResponse<TParams> : TParams["format"] extends "geojson" ? GeoJSONReverseResponse<TParams> : TParams["format"] extends "geocodejson" ? GeocodeJSONReverseResponse<TParams> : JSONV2ReverseResponse<TParams>;
