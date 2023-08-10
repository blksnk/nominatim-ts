"use strict";
/**
 * @module search/api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const endpoint_1 = require("./endpoint");
exports.search = (0, endpoint_1.endpointFactory)("/search");
