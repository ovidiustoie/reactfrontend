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
import type { LibrarianDTO } from './LibrarianDTO';
import {
    LibrarianDTOFromJSON,
    LibrarianDTOFromJSONTyped,
    LibrarianDTOToJSON,
} from './LibrarianDTO';

/**
 * 
 * @export
 * @interface LibrarianDTORequestResponse
 */
export interface LibrarianDTORequestResponse {
    /**
     * 
     * @type {LibrarianDTO}
     * @memberof LibrarianDTORequestResponse
     */
    response?: LibrarianDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof LibrarianDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the LibrarianDTORequestResponse interface.
 */
export function instanceOfLibrarianDTORequestResponse(value: object): boolean {
    return true;
}

export function LibrarianDTORequestResponseFromJSON(json: any): LibrarianDTORequestResponse {
    return LibrarianDTORequestResponseFromJSONTyped(json, false);
}

export function LibrarianDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibrarianDTORequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': json['response'] == null ? undefined : LibrarianDTOFromJSON(json['response']),
        'errorMessage': json['errorMessage'] == null ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function LibrarianDTORequestResponseToJSON(value?: LibrarianDTORequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': LibrarianDTOToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

