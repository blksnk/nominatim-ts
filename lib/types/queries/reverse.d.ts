/**
 * @module reverse/query
 */
import { GeoJSONCoordinate } from "../geo";
import { CommonOutputParams } from "./shared";
export declare interface CoordinateParams {
    lat: GeoJSONCoordinate;
    log: GeoJSONCoordinate;
}
export declare interface ReverseResultLimitationParams {
    /**
     * Level of detail required for the address.
     *
     * This is a number that corresponds roughly to the zoom level used in XYZ tile sources in frameworks like Leaflet.js, Openlayers etc.
     *
     * @see
     * {@link https://nominatim.org/release-docs/develop/api/Reverse/#result-limitation Nominatim documentation} for address details per zoom level
     *
     * @defaultValue `18`
     */
    zoom?: number;
}
export declare interface NominatimReverseParams extends CoordinateParams, CommonOutputParams, ReverseResultLimitationParams {
}
