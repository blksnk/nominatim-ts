/**
 * Nominatim status format
 * Influences shape and details of response in case of status error
 *
 * @default
 */
export type StatusFormat = "text" | "json";

export declare interface NominatimStatusParams {
  format?: StatusFormat;
}
