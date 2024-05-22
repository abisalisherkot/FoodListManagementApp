import axios from 'axios';

import { BaseUrl } from './baseurl';
import { store } from '../store';
import { setLoading, stopLoading } from '../store/app-slice';

const axiosApi = axios.create({
    baseURL: BaseUrl,
})

const getHeader = (headers: any) => {

    let newheaders: any = {}

    if (!headers.hasOwnProperty('Content-Type')) {
        newheaders['Content-Type'] = 'application/json'
    }

    return newheaders
}

axiosApi.interceptors.request.use(
    (config: any) => {
        const headers = getHeader(config.headers)
        if (headers) {
            const newHeaders = { ...config.headers, ...headers }
            let newConfig = { ...config, headers: newHeaders }
            store.dispatch(setLoading(config.url))
            return newConfig
        }
        store.dispatch(setLoading(config.url))
        return config
    },
    error => {
        Promise.reject(error)
    }
)

const responseSuccess = (response: any) => {
    store.dispatch(stopLoading(response.config.url));

    if (response.message) {

    } else if (response.data.message) {

    }
    return response
}

const responseError = (error: any) => {
    store.dispatch(stopLoading(error.config.url));

    if (
        error.response.data.statusCode === 401 &&
        error.response.data.message === "Unauthorized"
    ) {

        // localStorage.clear()
        // window.location.href = '/'
    }
    if (error?.response?.data?.message) {
        if (typeof error?.response?.data?.message === 'string') {

        } else {

        }
    } else if (error?.message) {

    }
    return Promise.reject(error)
}

axiosApi.interceptors.response.use(
    response => responseSuccess(response),
    error => responseError(error)
)

export async function get(url: string, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url: string, data: any, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function put(url: string, data: any, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function del(url: string, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then(response => response.data)
}

export default axiosApi
