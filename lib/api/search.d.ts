/**
 * @module search/api
 */
export declare const search: <TEndpointParams extends import("..").NominatimSearchParams>(params: TEndpointParams, replacementBaseUrl?: string | undefined) => Promise<import("..").NominatimEndpointResponse<"/search", TEndpointParams>>;
