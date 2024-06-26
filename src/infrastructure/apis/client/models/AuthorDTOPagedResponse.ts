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
import type { AuthorDTO } from './AuthorDTO';
import {
    AuthorDTOFromJSON,
    AuthorDTOFromJSONTyped,
    AuthorDTOToJSON,
} from './AuthorDTO';

/**
 * 
 * @export
 * @interface AuthorDTOPagedResponse
 */
export interface AuthorDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof AuthorDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthorDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthorDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<AuthorDTO>}
     * @memberof AuthorDTOPagedResponse
     */
    data?: Array<AuthorDTO>;
}

/**
 * Check if a given object implements the AuthorDTOPagedResponse interface.
 */
export function instanceOfAuthorDTOPagedResponse(value: object): boolean {
    return true;
}

export function AuthorDTOPagedResponseFromJSON(json: any): AuthorDTOPagedResponse {
    return AuthorDTOPagedResponseFromJSONTyped(json, false);
}

export function AuthorDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorDTOPagedResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AuthorDTOFromJSON)),
    };
}

export function AuthorDTOPagedResponseToJSON(value?: AuthorDTOPagedResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page': value['page'],
        'pageSize': value['pageSize'],
        'totalCount': value['totalCount'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AuthorDTOToJSON)),
    };
}

