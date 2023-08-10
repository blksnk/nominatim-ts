/**
 * @module status/response
 */
import { NominatimStatusParams } from "../queries/status";
export declare type TextStatus = "OK" | "ERROR: Database connection failed";
export declare const statusCodes: readonly [0, 700, 701, 702, 703, 704, 705];
export declare const statusMessages: {
    readonly 0: "OK";
    readonly 700: "Connection failed";
    readonly 701: "Module failed";
    readonly 702: "Module call failed";
    readonly 703: "Query failed";
    readonly 704: "No value";
    readonly 705: "Import date is not available";
};
export declare type StatusCode = (typeof statusCodes)[number];
export declare type StatusMessage<TStatusCode extends StatusCode> = (typeof statusMessages)[TStatusCode];
export declare interface JSONErrorStatus<TStatusCode extends StatusCode> {
    status: TStatusCode;
    message: StatusMessage<TStatusCode>;
}
export declare interface JSONSuccessStatus extends JSONErrorStatus<0> {
    data_updated: string;
    software_version: string;
    database_version: string;
}
export declare type JSONStatus<TStatusCode extends StatusCode> = TStatusCode extends 0 ? JSONSuccessStatus : JSONErrorStatus<TStatusCode>;
export declare type NominatimStatusResponse<TParams extends NominatimStatusParams, TStatus extends StatusCode = StatusCode> = TParams["format"] extends "text" ? TextStatus : JSONStatus<TStatus>;
