/**
 * @module error/api
 */

import { NominatimErrorResponse } from "../types/responses/error";
import { ResponseOrError } from "../types/endpoint";

export class NominatimException extends Error {
  code: number;
  message: string;
  constructor(errorResponse: NominatimErrorResponse) {
    super(errorResponse.error.message);
    this.code = errorResponse.error.code;
    this.message = errorResponse.error.message;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NominatimException.prototype);
  }
}

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
