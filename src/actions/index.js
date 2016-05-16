import axios from 'axios';

//Корневой url api.
const ROOT_URL = `http://macho.wow4.ru/api/web/v1/countries`;

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

//функция, возвращающая ответ
export function fetchCountries() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_COUNTRIES,
    payload: request
  };
}
