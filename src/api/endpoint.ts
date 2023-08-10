/**
 * @module api/endpoint
 */

import {
  NominatimApiUrl,
  NominatimBaseUrl,
  NominatimEndpoint,
  NominatimEndpointParams,
  NominatimEndpointResponse,
} from "../types/endpoint";
import axios, { AxiosError } from "axios";
import { throwOnError } from "./error";

export const NOMINATIM_API_URL: NominatimBaseUrl =
  "https://nominatim.openstreetmap.org" as const;

export const getEndpointUrl = (
  endpoint: NominatimEndpoint,
  replacementBaseUrl?: string,
): NominatimApiUrl<NominatimEndpoint, typeof replacementBaseUrl> => {
  const baseUrl: string | NominatimBaseUrl =
    replacementBaseUrl ?? NOMINATIM_API_URL;
  return `${baseUrl}${endpoint}`;
};

const parseParams = <
  TEndpoint extends NominatimEndpoint,
  TEndpointParams extends NominatimEndpointParams<TEndpoint>,
>(
  params: TEndpointParams,
) => {
  if ("osm_ids" in params && Array.isArray(params.osm_ids)) {
    const ids = params.osm_ids.filter(
      (id) => typeof id === "string",
    ) as string[];
    return {
      ...params,
      osm_ids: ids.join(","),
    } as TEndpointParams;
  }
  return params;
};

export const endpointFactory = <TEndpoint extends NominatimEndpoint>(
  endpoint: TEndpoint,
  rootReplacementBaseUrl?: string,
) => {
  return async <TEndpointParams extends NominatimEndpointParams<TEndpoint>>(
    params: TEndpointParams,
    replacementBaseUrl?: string,
  ) => {
    try {
      const { data } = await axios.get<
        NominatimEndpointResponse<TEndpoint, TEndpointParams>
      >(
        getEndpointUrl(endpoint, rootReplacementBaseUrl ?? replacementBaseUrl),
        {
          params: parseParams(params),
        },
      );
      return throwOnError(data);
    } catch (e: unknown) {
      throw e as AxiosError;
    }
  };
};
