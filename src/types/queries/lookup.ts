/**
 * @module lookup/query
 */

import { OSMIdQuery } from "../osm";
import { CommonOutputParams } from "./shared";

export declare type OSMIdsQuery = [
  OSMIdQuery,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
  OSMIdQuery?,
];

export declare interface OSMIdsParams {
  /**
   * one or multiple OSM objects ids — like node, way or relation.
   *
   * Must contain a comma-separated list of OSM ids each prefixed with its type,
   * one of node(N), way(W) or relation(R).
   *
   * @remarks
   * Up to 50 ids can be queried at the same time.
   *
   * @see
   * {@link OSMIdQuery} for formatting
   *
   * @example
   * `R146656`
   * `R146656,W104393803,N240109189`
   */
  osm_ids: string;
}

export declare interface NominatimLookupParams
  extends OSMIdsParams,
    CommonOutputParams {}
