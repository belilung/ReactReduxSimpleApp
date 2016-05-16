import { COUNTRY_SELECTED } from '../actions/selected_country';

export default function(state = null, action) {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return action.payload;
      break;
    default:
  }

  return state;
}
