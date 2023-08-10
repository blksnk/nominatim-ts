/**
 * @module lookup/api
 */
export declare const lookup: <TEndpointParams extends import("..").NominatimLookupParams>(params: TEndpointParams, replacementBaseUrl?: string | undefined) => Promise<import("..").NominatimEndpointResponse<"/lookup", TEndpointParams>>;
