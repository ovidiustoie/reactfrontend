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
import type { FeedbackDTO } from './FeedbackDTO';
import {
    FeedbackDTOFromJSON,
    FeedbackDTOFromJSONTyped,
    FeedbackDTOToJSON,
} from './FeedbackDTO';

/**
 * 
 * @export
 * @interface FeedbackDTOPagedResponse
 */
export interface FeedbackDTOPagedResponse {
    /**
     * 
     * @type {number}
     * @memberof FeedbackDTOPagedResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof FeedbackDTOPagedResponse
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof FeedbackDTOPagedResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<FeedbackDTO>}
     * @memberof FeedbackDTOPagedResponse
     */
    data?: Array<FeedbackDTO>;
}

/**
 * Check if a given object implements the FeedbackDTOPagedResponse interface.
 */
export function instanceOfFeedbackDTOPagedResponse(value: object): boolean {
    return true;
}

export function FeedbackDTOPagedResponseFromJSON(json: any): FeedbackDTOPagedResponse {
    return FeedbackDTOPagedResponseFromJSONTyped(json, false);
}

export function FeedbackDTOPagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedbackDTOPagedResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalCount': json['totalCount'] == null ? undefined : json['totalCount'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(FeedbackDTOFromJSON)),
    };
}

export function FeedbackDTOPagedResponseToJSON(value?: FeedbackDTOPagedResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page': value['page'],
        'pageSize': value['pageSize'],
        'totalCount': value['totalCount'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(FeedbackDTOToJSON)),
    };
}

