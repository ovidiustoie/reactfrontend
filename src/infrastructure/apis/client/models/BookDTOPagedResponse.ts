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
import type { BookDTO } from './BookDTO';
import {
    BookDTOFromJSON,
    BookDTOFromJSONTyped,
    BookDTOToJSON,
} from './BookDTO';

/**
 * 
 * @export
 * @interface BookDTOPagedResponse
 */
export interface BookDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof BookDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof BookDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BookDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BookDTO>}
     * @memberof BookDTOPagedResponse
     */
    data?: Array<BookDTO>;
}

/**
 * Check if a given object implements the BookDTOPagedResponse interface.
 */
export function instanceOfBookDTOPagedResponse(value: object): boolean {
    return true;
}

export function BookDTOPagedResponseFromJSON(json: any): BookDTOPagedResponse {
    return BookDTOPagedResponseFromJSONTyped(json, false);
}

export function BookDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookDTOPagedResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BookDTOFromJSON)),
    };
}

export function BookDTOPagedResponseToJSON(value?: BookDTOPagedResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page': value['page'],
        'pageSize': value['pageSize'],
        'totalCount': value['totalCount'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BookDTOToJSON)),
    };
}

