/**
 * @module types/endpoint
 */
import { NominatimErrorResponse, NominatimStatusFormatErrorResponse } from "./responses/error";
import { NominatimSearchResponse } from "./responses/search";
import { NominatimSearchParams } from "./queries/search";
import { NominatimReverseParams } from "./queries/reverse";
import { NominatimLookupParams } from "./queries/lookup";
import { NominatimReverseResponse } from "./responses/reverse";
import { NominatimLookupResponse } from "./responses/lookup";
import { NominatimStatusParams } from "./queries/status";
import { NominatimStatusResponse } from "./responses/status";
export declare type NominatimBaseUrl = "https://nominatim.openstreetmap.org";
export declare const endpoints: readonly ["/search", "/reverse", "/lookup", "/status.php"];
export declare type NominatimEndpoint = (typeof endpoints)[number];
export declare type NominatimApiUrl<TEndpoint extends NominatimEndpoint, TReplacementUrl extends string | undefined = undefined> = `${TReplacementUrl extends string ? TReplacementUrl : NominatimBaseUrl}${TEndpoint}`;
export declare type ResponseOrError<TResponse extends object> = TResponse | NominatimErrorResponse | NominatimStatusFormatErrorResponse;
export declare type NominatimEndpointParams<TEndpoint extends NominatimEndpoint> = TEndpoint extends "/search" ? NominatimSearchParams : TEndpoint extends "/reverse" ? NominatimReverseParams : TEndpoint extends "/lookup" ? NominatimLookupParams : TEndpoint extends "/status.php" ? NominatimStatusParams : never;
export type NominatimEndpointResponse<TEndpoint extends NominatimEndpoint, TEndpointParams extends NominatimEndpointParams<TEndpoint>> = TEndpointParams extends NominatimSearchParams ? NominatimSearchResponse<TEndpointParams> : TEndpointParams extends NominatimReverseParams ? NominatimReverseResponse<TEndpointParams> : TEndpointParams extends NominatimLookupParams ? NominatimLookupResponse<TEndpointParams> : TEndpointParams extends NominatimStatusParams ? NominatimStatusResponse<TEndpointParams> : never;
