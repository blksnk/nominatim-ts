/**
 * @module error/api
 */
import { NominatimErrorResponse } from "../types/responses/error";
import { ResponseOrError } from "../types/endpoint";
export declare class NominatimException extends Error {
    code: number;
    message: string;
    constructor(errorResponse: NominatimErrorResponse);
}
export declare const throwOnError: <TResponse extends object>(apiResponse: ResponseOrError<TResponse>) => TResponse;
