import { deleteApiWrapper, getApiWrapper, postApiWrapper } from "./token-wrapper-function";


const base_url = 'http://127.0.0.1:5000'


export const getPresignedUrl = async(file_data) =>{
    const response = await postApiWrapper(`${base_url}/api/generate-presigned-url`, file_data);
    return response;
}
