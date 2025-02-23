import { deleteApiWrapper, getApiWrapper, postApiWrapper, putApiWrapper } from "./token-wrapper-function";

// const base_url = 'http://127.0.0.1:5000'
const base_url = 'https://backend-jalsanrakshanam.thembs.in'

export const createEvent = async (data) => {
   
    const response = await postApiWrapper(`${base_url}/api/events/create-event`, data);
    return response;
}

export const updateEvent = async (id, data) => {
    const response = await putApiWrapper(`${base_url}/api/events/update-event/${id}`, data);
    return response;
}


export const deleteEvent = async (id) => {
    const response = await deleteApiWrapper(`${base_url}/api/events/delete-event/${id}`);
    return response;
}



export const getEvents = async () => {
    const response = await getApiWrapper(`${base_url}/api/events/get-events`);
    return response;
}


export const getEventById = async (id) => {
    const response = await getApiWrapper(`${base_url}/api/events/get-event/${id}`);
    return response;
}

