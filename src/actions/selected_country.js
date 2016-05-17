import axios from 'axios';

export const COUNTRY_SELECTED = 'COUNTRY_SELECTED';
const ROOT_URL = `http://macho.wow4.ru/api/web/v1/countries/`;

export function selectCountry(country_key) {

  const url = ROOT_URL + country_key;

  const request = axios.get(url);

  return {
    type: COUNTRY_SELECTED,
    payload: request
  }
}
