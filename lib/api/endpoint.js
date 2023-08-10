"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointFactory = exports.getEndpointUrl = exports.NOMINATIM_API_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("./error");
exports.NOMINATIM_API_URL = "https://nominatim.openstreetmap.org";
const getEndpointUrl = (endpoint, replacementBaseUrl) => {
    const baseUrl = replacementBaseUrl ?? exports.NOMINATIM_API_URL;
    return `${baseUrl}${endpoint}`;
};
exports.getEndpointUrl = getEndpointUrl;
const endpointFactory = (endpoint, rootReplacementBaseUrl) => {
    return async (params, replacementBaseUrl) => {
        try {
            const { data } = await axios_1.default.get((0, exports.getEndpointUrl)(endpoint, rootReplacementBaseUrl ?? replacementBaseUrl), {
                params,
            });
            return (0, error_1.throwOnError)(data);
        }
        catch (e) {
            throw e;
        }
    };
};
exports.endpointFactory = endpointFactory;
