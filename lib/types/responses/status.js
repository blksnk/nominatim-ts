"use strict";
/**
 * @module status/response
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusMessages = exports.statusCodes = void 0;
exports.statusCodes = [0, 700, 701, 702, 703, 704, 705];
exports.statusMessages = {
    0: "OK",
    700: "Connection failed",
    701: "Module failed",
    702: "Module call failed",
    703: "Query failed",
    704: "No value",
    705: "Import date is not available",
};
