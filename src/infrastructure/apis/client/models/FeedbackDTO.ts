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
import type { SiteDifficultyEnum } from './SiteDifficultyEnum';
import {
    SiteDifficultyEnumFromJSON,
    SiteDifficultyEnumFromJSONTyped,
    SiteDifficultyEnumToJSON,
} from './SiteDifficultyEnum';
import type { SiteGoalEnum } from './SiteGoalEnum';
import {
    SiteGoalEnumFromJSON,
    SiteGoalEnumFromJSONTyped,
    SiteGoalEnumToJSON,
} from './SiteGoalEnum';

/**
 * 
 * @export
 * @interface FeedbackDTO
 */
export interface FeedbackDTO {
    /**
     * 
     * @type {string}
     * @memberof FeedbackDTO
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof FeedbackDTO
     */
    score?: number;
    /**
     * 
     * @type {SiteDifficultyEnum}
     * @memberof FeedbackDTO
     */
    siteDificulty?: SiteDifficultyEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FeedbackDTO
     */
    recommendToOthers?: boolean;
    /**
     * 
     * @type {SiteGoalEnum}
     * @memberof FeedbackDTO
     */
    siteGoal?: SiteGoalEnum;
    /**
     * 
     * @type {string}
     * @memberof FeedbackDTO
     */
    sugestion?: string;
}

/**
 * Check if a given object implements the FeedbackDTO interface.
 */
export function instanceOfFeedbackDTO(value: object): boolean {
    return true;
}

export function FeedbackDTOFromJSON(json: any): FeedbackDTO {
    return FeedbackDTOFromJSONTyped(json, false);
}

export function FeedbackDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedbackDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'score': json['score'] == null ? undefined : json['score'],
        'siteDificulty': json['siteDificulty'] == null ? undefined : SiteDifficultyEnumFromJSON(json['siteDificulty']),
        'recommendToOthers': json['recommendToOthers'] == null ? undefined : json['recommendToOthers'],
        'siteGoal': json['siteGoal'] == null ? undefined : SiteGoalEnumFromJSON(json['siteGoal']),
        'sugestion': json['sugestion'] == null ? undefined : json['sugestion'],
    };
}

export function FeedbackDTOToJSON(value?: FeedbackDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'score': value['score'],
        'siteDificulty': SiteDifficultyEnumToJSON(value['siteDificulty']),
        'recommendToOthers': value['recommendToOthers'],
        'siteGoal': SiteGoalEnumToJSON(value['siteGoal']),
        'sugestion': value['sugestion'],
    };
}

