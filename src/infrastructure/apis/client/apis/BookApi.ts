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
  BookAddDTO,
  BookAddDTORequestResponse,
  BookDTOPagedResponseRequestResponse,
  BookUpdateDTO,
  RequestResponse,
} from '../models/index';
import {
    BookAddDTOFromJSON,
    BookAddDTOToJSON,
    BookAddDTORequestResponseFromJSON,
    BookAddDTORequestResponseToJSON,
    BookDTOPagedResponseRequestResponseFromJSON,
    BookDTOPagedResponseRequestResponseToJSON,
    BookUpdateDTOFromJSON,
    BookUpdateDTOToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models/index';

export interface ApiBookAddPostRequest {
    bookAddDTO?: BookAddDTO;
}

export interface ApiBookDeleteIdDeleteRequest {
    id: string;
}

export interface ApiBookGetByIdIdGetRequest {
    id: string;
}

export interface ApiBookGetPageGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiBookUpdatePutRequest {
    bookUpdateDTO?: BookUpdateDTO;
}

/**
 * 
 */
export class BookApi extends runtime.BaseAPI {

    /**
     */
    async apiBookAddPostRaw(requestParameters: ApiBookAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Book/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BookAddDTOToJSON(requestParameters['bookAddDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiBookAddPost(requestParameters: ApiBookAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiBookAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiBookDeleteIdDeleteRaw(requestParameters: ApiBookDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiBookDeleteIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Book/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiBookDeleteIdDelete(requestParameters: ApiBookDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiBookDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiBookGetByIdIdGetRaw(requestParameters: ApiBookGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookAddDTORequestResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiBookGetByIdIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Book/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookAddDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiBookGetByIdIdGet(requestParameters: ApiBookGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookAddDTORequestResponse> {
        const response = await this.apiBookGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiBookGetPageGetRaw(requestParameters: ApiBookGetPageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookDTOPagedResponseRequestResponse>> {
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
            path: `/api/Book/GetPage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiBookGetPageGet(requestParameters: ApiBookGetPageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookDTOPagedResponseRequestResponse> {
        const response = await this.apiBookGetPageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiBookUpdatePutRaw(requestParameters: ApiBookUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Book/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BookUpdateDTOToJSON(requestParameters['bookUpdateDTO']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiBookUpdatePut(requestParameters: ApiBookUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiBookUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
