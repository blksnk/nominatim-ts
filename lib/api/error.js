"use strict";
/**
 * @module error/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwOnError = exports.NominatimException = void 0;
class NominatimException extends Error {
    code;
    message;
    constructor(errorResponse) {
        super(errorResponse.error.message);
        this.code = errorResponse.error.code;
        this.message = errorResponse.error.message;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NominatimException.prototype);
    }
}
exports.NominatimException = NominatimException;
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
