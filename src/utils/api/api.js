import { create } from 'apisauce'

const BASE_URL = process.env.REACT_APP_BACKEND_URL
const api = create({
    baseURL: BASE_URL
})



const USERS_PATH = '/users'
const MANAGERS_PATH = '/managers'



function processResponse(response, method, uri) {
    return new Promise((resolve, reject) => {
        if (response.status >= 200 && response.status < 400) {
            resolve(response.data)
        } else if (response.status === 401) {
            reject({message: "You are unauthenticated, please log in again"})
        } else {
            console.error(`HTTP ${method} call to ${uri} failed with response code ${response.status}`)
            reject({message: response.data})
        }
    })
}


export const API = {
    getUsers: async () => {
        const path = `${USERS_PATH}`
        const response = await api.get(path)
        return processResponse(response, 'get', path)
    },

    getUserById: async (id) => {
        const path = `${USERS_PATH}/${id}`
        const response = await api.get(path)
        return processResponse(response, 'get', path)
    },

    createUser: async (userData) => {
        const path = `${USERS_PATH}`
        const response = await api.post(path, userData, {
            params: {
                // queryStringParameter
            }
        })
        return processResponse(response, 'post', path)
    }
}