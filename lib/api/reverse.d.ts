/**
 * @module reverse/api
 */
export declare const reverse: <TEndpointParams extends import("..").NominatimReverseParams>(params: TEndpointParams, replacementBaseUrl?: string | undefined) => Promise<import("..").NominatimEndpointResponse<"/reverse", TEndpointParams>>;
