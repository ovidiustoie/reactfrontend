/* tslint:disable */
/* eslint-disable */
/**
 * MobyLab Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface RequestResponse
 */
export interface RequestResponse {
    /**
     * 
     * @type {string}
     * @memberof RequestResponse
     */
    readonly response?: string;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof RequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the RequestResponse interface.
 */
export function instanceOfRequestResponse(value: object): boolean {
    return true;
}

export function RequestResponseFromJSON(json: any): RequestResponse {
    return RequestResponseFromJSONTyped(json, false);
}

export function RequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': json['response'] == null ? undefined : json['response'],
        'errorMessage': json['errorMessage'] == null ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function RequestResponseToJSON(value?: Omit<RequestResponse, 'response'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

