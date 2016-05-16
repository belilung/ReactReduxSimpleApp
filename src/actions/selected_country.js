export const COUNTRY_SELECTED = 'COUNTRY_SELECTED';

export function selectCountry(country) {
  // selectCountry is an ActionCreator, it needs to return an action,
  // an object with a type property.

  return {
    type: COUNTRY_SELECTED,
    payload: country
  }
}
