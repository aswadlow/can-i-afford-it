import sendRequest from './send-request';

const BASE_URL = '/api/hours';

export async function createHours(hoursFormData){
    return sendRequest(BASE_URL, 'POST', hoursFormData )
}



