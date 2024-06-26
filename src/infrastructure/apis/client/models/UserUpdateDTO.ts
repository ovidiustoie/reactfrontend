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
 * @interface UserUpdateDTO
 */
export interface UserUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    password?: string;
}

/**
 * Check if a given object implements the UserUpdateDTO interface.
 */
export function instanceOfUserUpdateDTO(value: object): boolean {
    return true;
}

export function UserUpdateDTOFromJSON(json: any): UserUpdateDTO {
    return UserUpdateDTOFromJSONTyped(json, false);
}

export function UserUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

export function UserUpdateDTOToJSON(value?: UserUpdateDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'password': value['password'],
    };
}

