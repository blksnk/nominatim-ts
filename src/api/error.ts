/**
 * @module error/api
 */

import { NominatimErrorResponse } from "../types/responses/error";
import { ResponseOrError } from "../types/endpoint";

/**
 * Custom exception class for Nominatim API errors.
 * @extends Error
 */
export class NominatimException extends Error {
  /** The error code returned by the Nominatim API. */
  code: number;

  /** The error message returned by the Nominatim API. */
  message: string;

  /**
   * Creates a new NominatimException.
   * @param {NominatimErrorResponse} errorResponse - The error response from the Nominatim API.
   */
  constructor(errorResponse: NominatimErrorResponse) {
    super(errorResponse.error.message);
    this.code = errorResponse.error.code;
    this.message = errorResponse.error.message;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NominatimException.prototype);
  }
}

/**
 * Throws a NominatimException if the API response is an error, otherwise returns the response.
 * 
 * @template TResponse - The expected type of the successful response.
 * @param {ResponseOrError<TResponse>} apiResponse - The response from the API, which could be a successful response or an error.
 * @returns {TResponse} The successful response if no error was encountered.
 * @throws {NominatimException} If the apiResponse is a string (treated as an error message) or contains an 'error' property.
 */
export const throwOnError = <TResponse extends object>(
  apiResponse: ResponseOrError<TResponse>,
): TResponse => {
  if (typeof apiResponse === "string") {
    throw new NominatimException({
      error: {
        code: 400,
        message: apiResponse,
      },
    });
  }
  if ("error" in apiResponse) {
    throw new NominatimException(apiResponse as NominatimErrorResponse);
  }
  return apiResponse as TResponse;
};
