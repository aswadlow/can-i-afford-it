import sendRequest from './send-request';

const BASE_URL = '/api/monthlyExps';

export function addMonthlyExp(monthlyExpData) {
    return sendRequest(BASE_URL, 'POST', monthlyExpData);
  }

  export function getAll() {
    return sendRequest(BASE_URL);
  }

  export function deleteMonthlyExp(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
  }

  export function updateMonthly(expFormData, id){
    return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', expFormData )
  }
