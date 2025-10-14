"use strict";
/**
 * @module error/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwOnError = exports.NominatimException = void 0;
/**
 * Custom exception class for Nominatim API errors.
 * @extends Error
 */
class NominatimException extends Error {
    /** The error code returned by the Nominatim API. */
    code;
    /** The error message returned by the Nominatim API. */
    message;
    /**
     * Creates a new NominatimException.
     * @param {NominatimErrorResponse} errorResponse - The error response from the Nominatim API.
     */
    constructor(errorResponse) {
        super(errorResponse.error.message);
        this.code = errorResponse.error.code;
        this.message = errorResponse.error.message;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NominatimException.prototype);
    }
}
exports.NominatimException = NominatimException;
/**
 * Throws a NominatimException if the API response is an error, otherwise returns the response.
 *
 * @template TResponse - The expected type of the successful response.
 * @param {ResponseOrError<TResponse>} apiResponse - The response from the API, which could be a successful response or an error.
 * @returns {TResponse} The successful response if no error was encountered.
 * @throws {NominatimException} If the apiResponse is a string (treated as an error message) or contains an 'error' property.
 */
const throwOnError = (apiResponse) => {
    if (typeof apiResponse === "string") {
        throw new NominatimException({
            error: {
                code: 400,
                message: apiResponse,
            },
        });
    }
    if ("error" in apiResponse) {
        throw new NominatimException(apiResponse);
    }
    return apiResponse;
};
exports.throwOnError = throwOnError;
