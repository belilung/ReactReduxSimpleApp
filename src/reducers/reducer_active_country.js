import { COUNTRY_SELECTED } from '../actions/selected_country';

export default function(state = [], action) {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return [action.payload.data];
      break;
    default:
  }

  return state;
}
