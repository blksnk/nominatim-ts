/**
 * @module api/endpoint
 */
import { NominatimApiUrl, NominatimBaseUrl, NominatimEndpoint, NominatimEndpointParams, NominatimEndpointResponse } from "../types/endpoint";
export declare const NOMINATIM_API_URL: NominatimBaseUrl;
export declare const getEndpointUrl: (endpoint: NominatimEndpoint, replacementBaseUrl?: string) => `${string}/search` | `${string}/reverse` | `${string}/lookup` | `${string}/status.php`;
export declare const endpointFactory: <TEndpoint extends "/search" | "/reverse" | "/lookup" | "/status.php">(endpoint: TEndpoint, rootReplacementBaseUrl?: string) => <TEndpointParams extends NominatimEndpointParams<TEndpoint>>(params: TEndpointParams, replacementBaseUrl?: string) => Promise<NominatimEndpointResponse<TEndpoint, TEndpointParams>>;
