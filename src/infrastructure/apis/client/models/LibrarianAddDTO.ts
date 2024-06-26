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
/**
 * 
 * @export
 * @interface LibrarianAddDTO
 */
export interface LibrarianAddDTO {
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof LibrarianAddDTO
     */
    position?: string;
}

/**
 * Check if a given object implements the LibrarianAddDTO interface.
 */
export function instanceOfLibrarianAddDTO(value: object): boolean {
    return true;
}

export function LibrarianAddDTOFromJSON(json: any): LibrarianAddDTO {
    return LibrarianAddDTOFromJSONTyped(json, false);
}

export function LibrarianAddDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibrarianAddDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'email': json['email'] == null ? undefined : json['email'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'description': json['description'] == null ? undefined : json['description'],
        'position': json['position'] == null ? undefined : json['position'],
    };
}

export function LibrarianAddDTOToJSON(value?: LibrarianAddDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'email': value['email'],
        'lastName': value['lastName'],
        'description': value['description'],
        'position': value['position'],
    };
}

