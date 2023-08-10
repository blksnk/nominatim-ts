/**
 * @module status/response
 */

import { NominatimStatusParams } from "../queries/status";

export declare type TextStatus = "OK" | "ERROR: Database connection failed";

const statusCodes = [0, 700, 701, 702, 703, 704, 705] as const;

const statusMessages = {
  0: "OK",
  700: "Connection failed",
  701: "Module failed",
  702: "Module call failed",
  703: "Query failed",
  704: "No value",
  705: "Import date is not available",
} as const;

export declare type StatusCode = (typeof statusCodes)[number];

export declare type StatusMessage<TStatusCode extends StatusCode> =
  (typeof statusMessages)[TStatusCode];

declare interface JSONErrorStatus<TStatusCode extends StatusCode> {
  status: TStatusCode;
  message: StatusMessage<TStatusCode>;
}

declare interface JSONSuccessStatus extends JSONErrorStatus<0> {
  data_updated: string;
  software_version: string;
  database_version: string;
}

export declare type JSONStatus<TStatusCode extends StatusCode> =
  TStatusCode extends 0 ? JSONSuccessStatus : JSONErrorStatus<TStatusCode>;

export declare type NominatimStatusResponse<
  TParams extends NominatimStatusParams,
  TStatus extends StatusCode = StatusCode,
> = TParams["format"] extends "text" ? TextStatus : JSONStatus<TStatus>;
