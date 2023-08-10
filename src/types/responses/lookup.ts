import { NominatimLookupParams } from "../queries/lookup";
import {
  GeocodeJSONPlace,
  GeoJSONPlace,
  JSONPlace,
  JSONV2Place,
} from "../place";

/**
 * ### Nominatim lookup response
 * List of JSON formatted places
 *
 * @remarks
 * Only with `format=json`
 *
 * @see
 * {@link JSONPlace}
 */
export declare type JSONLookupResponse<TParams extends NominatimLookupParams> =
  JSONPlace<TParams>[];

/**
 * ### Nominatim lookup response
 * List of JSONV2 formatted places
 *
 * @remarks
 * Only with `format=jsonv2`
 *
 * @see
 * {@link JSONV2Place}
 */
export declare type JSONV2LookupResponse<
  TParams extends NominatimLookupParams,
> = JSONV2Place<TParams>[];

/**
 * ### Nominatim lookup response
 * FeatureCollection of GeoJSON formatted places
 *
 * @remarks
 * Only with `format=geojson`
 *
 * @see
 * {@link GeoJSONPlace}
 */
export declare type GeoJSONLookupResponse<
  TParams extends NominatimLookupParams,
> = {
  type: "FeatureCollection";
  features: GeoJSONPlace<TParams>[];
};

/**
 * ### Nominatim lookup response
 * FeatureCollection of GeocodeJSON formatted places
 *
 * @remarks
 * Only with `format=geocodejson`
 *
 * @see
 * {@link GeocodeJSONPlace}
 */
export declare type GeocodeJSONLookupResponse<
  TParams extends NominatimLookupParams,
> = {
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
 * ### Nominatim lookup response
 * One of {@link JSONLookupResponse}, {@link JSONV2LookupResponse}, {@link GeoJSONLookupResponse} or {@link GeocodeJSONLookupResponse} based on {@link NominatimLookupParams.format}.
 * @defaultValue {@link JSONV2LookupResponse}
 */
export declare type NominatimLookupResponse<
  TParams extends NominatimLookupParams,
> = TParams["format"] extends "json"
  ? JSONLookupResponse<TParams>
  : TParams["format"] extends "geojson"
  ? GeoJSONLookupResponse<TParams>
  : TParams["format"] extends "geocodejson"
  ? GeocodeJSONLookupResponse<TParams>
  : JSONV2LookupResponse<TParams>;
