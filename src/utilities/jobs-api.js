import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export async function createJob(jobFormData) {
    return sendRequest(BASE_URL, 'POST', jobFormData );
  }

export function getAll() {
    return sendRequest(BASE_URL);
  }


  export function deleteJob(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
  }
