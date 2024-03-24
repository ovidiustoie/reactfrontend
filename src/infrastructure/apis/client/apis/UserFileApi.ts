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


import * as runtime from '../runtime';
import type {
  RequestResponse,
  UserFileDTOPagedResponseRequestResponse,
} from '../models/index';
import {
    RequestResponseFromJSON,
    RequestResponseToJSON,
    UserFileDTOPagedResponseRequestResponseFromJSON,
    UserFileDTOPagedResponseRequestResponseToJSON,
} from '../models/index';

export interface ApiUserFileAddPostRequest {
    file?: Blob;
    description?: string;
}

export interface ApiUserFileDownloadIdGetRequest {
    id: string;
}

export interface ApiUserFileGetPageGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

/**
 * 
 */
export class UserFileApi extends runtime.BaseAPI {

    /**
     */
    async apiUserFileAddPostRaw(requestParameters: ApiUserFileAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('File', requestParameters['file'] as any);
        }

        if (requestParameters['description'] != null) {
            formParams.append('Description', requestParameters['description'] as any);
        }

        const response = await this.request({
            path: `/api/UserFile/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserFileAddPost(requestParameters: ApiUserFileAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserFileAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserFileDownloadIdGetRaw(requestParameters: ApiUserFileDownloadIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiUserFileDownloadIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/UserFile/Download/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     */
    async apiUserFileDownloadIdGet(requestParameters: ApiUserFileDownloadIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.apiUserFileDownloadIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserFileGetPageGetRaw(requestParameters: ApiUserFileGetPageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserFileDTOPagedResponseRequestResponse>> {
        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['Search'] = requestParameters['search'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['Page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['PageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/UserFile/GetPage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFileDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserFileGetPageGet(requestParameters: ApiUserFileGetPageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserFileDTOPagedResponseRequestResponse> {
        const response = await this.apiUserFileGetPageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
