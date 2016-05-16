import { combineReducers } from 'redux';
import CountriesReducer from './reducer_countries';
import ActiveCountryReducer from './reducer_active_country';

const rootReducer = combineReducers({
  countries: CountriesReducer,
  activeCountry: ActiveCountryReducer,
});

export default rootReducer;
