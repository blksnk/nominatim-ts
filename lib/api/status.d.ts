/**
 * @module status/api
 */
export declare const status: <TEndpointParams extends import("..").NominatimStatusParams>(params: TEndpointParams, replacementBaseUrl?: string | undefined) => Promise<import("..").NominatimEndpointResponse<"/status.php", TEndpointParams>>;
