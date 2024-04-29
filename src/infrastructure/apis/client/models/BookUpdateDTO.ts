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
import type { AuthorRefDTO } from './AuthorRefDTO';
import {
    AuthorRefDTOFromJSON,
    AuthorRefDTOFromJSONTyped,
    AuthorRefDTOToJSON,
} from './AuthorRefDTO';

/**
 * 
 * @export
 * @interface BookUpdateDTO
 */
export interface BookUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof BookUpdateDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BookUpdateDTO
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BookUpdateDTO
     */
    summary?: string;
    /**
     * 
     * @type {Array<AuthorRefDTO>}
     * @memberof BookUpdateDTO
     */
    authors?: Array<AuthorRefDTO>;
}

/**
 * Check if a given object implements the BookUpdateDTO interface.
 */
export function instanceOfBookUpdateDTO(value: object): boolean {
    return true;
}

export function BookUpdateDTOFromJSON(json: any): BookUpdateDTO {
    return BookUpdateDTOFromJSONTyped(json, false);
}

export function BookUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookUpdateDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'authors': json['authors'] == null ? undefined : ((json['authors'] as Array<any>).map(AuthorRefDTOFromJSON)),
    };
}

export function BookUpdateDTOToJSON(value?: BookUpdateDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'summary': value['summary'],
        'authors': value['authors'] == null ? undefined : ((value['authors'] as Array<any>).map(AuthorRefDTOToJSON)),
    };
}

