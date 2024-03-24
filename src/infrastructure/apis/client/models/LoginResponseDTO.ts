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
 * @interface LoginResponseDTO
 */
export interface LoginResponseDTO {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseDTO
     */
    token?: string;
    /**
     * 
     * @type {UserDTO}
     * @memberof LoginResponseDTO
     */
    user?: UserDTO;
}

/**
 * Check if a given object implements the LoginResponseDTO interface.
 */
export function instanceOfLoginResponseDTO(value: object): boolean {
    return true;
}

export function LoginResponseDTOFromJSON(json: any): LoginResponseDTO {
    return LoginResponseDTOFromJSONTyped(json, false);
}

export function LoginResponseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponseDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
        'user': json['user'] == null ? undefined : UserDTOFromJSON(json['user']),
    };
}

export function LoginResponseDTOToJSON(value?: LoginResponseDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'user': UserDTOToJSON(value['user']),
    };
}
