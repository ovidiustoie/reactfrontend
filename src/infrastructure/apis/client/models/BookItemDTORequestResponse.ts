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
import type { BookItemDTO } from './BookItemDTO';
import {
    BookItemDTOFromJSON,
    BookItemDTOFromJSONTyped,
    BookItemDTOToJSON,
} from './BookItemDTO';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface BookItemDTORequestResponse
 */
export interface BookItemDTORequestResponse {
    /**
     * 
     * @type {BookItemDTO}
     * @memberof BookItemDTORequestResponse
     */
    response?: BookItemDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof BookItemDTORequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the BookItemDTORequestResponse interface.
 */
export function instanceOfBookItemDTORequestResponse(value: object): boolean {
    return true;
}

export function BookItemDTORequestResponseFromJSON(json: any): BookItemDTORequestResponse {
    return BookItemDTORequestResponseFromJSONTyped(json, false);
}

export function BookItemDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookItemDTORequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': json['response'] == null ? undefined : BookItemDTOFromJSON(json['response']),
        'errorMessage': json['errorMessage'] == null ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function BookItemDTORequestResponseToJSON(value?: BookItemDTORequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': BookItemDTOToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

