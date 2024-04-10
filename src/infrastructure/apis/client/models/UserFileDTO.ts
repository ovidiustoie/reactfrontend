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
import type { UserDTO } from './UserDTO';
import {
    UserDTOFromJSON,
    UserDTOFromJSONTyped,
    UserDTOToJSON,
} from './UserDTO';

/**
 * 
 * @export
 * @interface UserFileDTO
 */
export interface UserFileDTO {
    /**
     * 
     * @type {string}
     * @memberof UserFileDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFileDTO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserFileDTO
     */
    description?: string;
    /**
     * 
     * @type {UserDTO}
     * @memberof UserFileDTO
     */
    user?: UserDTO;
    /**
     * 
     * @type {Date}
     * @memberof UserFileDTO
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserFileDTO
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UserFileDTO interface.
 */
export function instanceOfUserFileDTO(value: object): boolean {
    return true;
}

export function UserFileDTOFromJSON(json: any): UserFileDTO {
    return UserFileDTOFromJSONTyped(json, false);
}

export function UserFileDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFileDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'user': json['user'] == null ? undefined : UserDTOFromJSON(json['user']),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
    };
}

export function UserFileDTOToJSON(value?: UserFileDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'user': UserDTOToJSON(value['user']),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

