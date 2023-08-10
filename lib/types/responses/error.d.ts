/**
 * @module error/response
 */
export declare interface NominatimErrorResponse {
    error: {
        code: number;
        message: string;
    };
}
export declare type NominatimStatusFormatErrorResponse = "Parameter 'format' must be one of: text, json";
