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
import type { LibrarianDTOPagedResponse } from './LibrarianDTOPagedResponse';
import {
    LibrarianDTOPagedResponseFromJSON,
    LibrarianDTOPagedResponseFromJSONTyped,
    LibrarianDTOPagedResponseToJSON,
} from './LibrarianDTOPagedResponse';

/**
 * 
 * @export
 * @interface LibrarianDTOPagedResponseRequestResponse
 */
export interface LibrarianDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {LibrarianDTOPagedResponse}
     * @memberof LibrarianDTOPagedResponseRequestResponse
     */
    response?: LibrarianDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof LibrarianDTOPagedResponseRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the LibrarianDTOPagedResponseRequestResponse interface.
 */
export function instanceOfLibrarianDTOPagedResponseRequestResponse(value: object): boolean {
    return true;
}

export function LibrarianDTOPagedResponseRequestResponseFromJSON(json: any): LibrarianDTOPagedResponseRequestResponse {
    return LibrarianDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function LibrarianDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibrarianDTOPagedResponseRequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': json['response'] == null ? undefined : LibrarianDTOPagedResponseFromJSON(json['response']),
        'errorMessage': json['errorMessage'] == null ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function LibrarianDTOPagedResponseRequestResponseToJSON(value?: LibrarianDTOPagedResponseRequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': LibrarianDTOPagedResponseToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

