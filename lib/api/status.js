"use strict";
/**
 * @module status/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
const endpoint_1 = require("./endpoint");
exports.status = (0, endpoint_1.endpointFactory)("/status.php");
