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
import type { AuthorDTOPagedResponse } from './AuthorDTOPagedResponse';
import {
    AuthorDTOPagedResponseFromJSON,
    AuthorDTOPagedResponseFromJSONTyped,
    AuthorDTOPagedResponseToJSON,
} from './AuthorDTOPagedResponse';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface AuthorDTOPagedResponseRequestResponse
 */
export interface AuthorDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {AuthorDTOPagedResponse}
     * @memberof AuthorDTOPagedResponseRequestResponse
     */
    response?: AuthorDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof AuthorDTOPagedResponseRequestResponse
     */
    errorMessage?: ErrorMessage;
}

/**
 * Check if a given object implements the AuthorDTOPagedResponseRequestResponse interface.
 */
export function instanceOfAuthorDTOPagedResponseRequestResponse(value: object): boolean {
    return true;
}

export function AuthorDTOPagedResponseRequestResponseFromJSON(json: any): AuthorDTOPagedResponseRequestResponse {
    return AuthorDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function AuthorDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorDTOPagedResponseRequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': json['response'] == null ? undefined : AuthorDTOPagedResponseFromJSON(json['response']),
        'errorMessage': json['errorMessage'] == null ? undefined : ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function AuthorDTOPagedResponseRequestResponseToJSON(value?: AuthorDTOPagedResponseRequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': AuthorDTOPagedResponseToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

