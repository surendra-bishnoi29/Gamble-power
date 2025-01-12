import { deleteApiWrapper, getApiWrapper, postApiWrapper, putApiWrapper } from "./token-wrapper-function";

// const base_url = 'http://127.0.0.1:5000'
const base_url = 'https://backend-jalsanrakshanam.thembs.in'

export const loginUser = async (credentials) => {
    const response = await postApiWrapper(`${base_url}/api/login`, credentials);
    return response;
}