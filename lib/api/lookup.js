"use strict";
/**
 * @module lookup/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookup = void 0;
const endpoint_1 = require("./endpoint");
exports.lookup = (0, endpoint_1.endpointFactory)("/lookup");
