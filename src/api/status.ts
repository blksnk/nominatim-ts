/**
 * @module status/api
 */

import { endpointFactory } from "./endpoint";

export const status = endpointFactory("/status.php");
