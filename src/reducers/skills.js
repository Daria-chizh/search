import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_SUCCESS
} from "../actions/actionTypes";

const initialState = { items: [], loading: false, error: null, search: '', };

export default function skillsReducer( state = initialState, action) {
  switch(action.type) {
    case SEARCH_SKILLS_REQUEST:
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    case SEARCH_SKILLS_FAILURE:
      const { error } = action.payload;

      return {
        ...state,
        items: [],
        loading: false,
        error,
      };
    case SEARCH_SKILLS_SUCCESS:
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null };
    case CHANGE_SEARCH_FIELD:
      const { search } = action.payload;
      if (search.trim().length) {
        return { ...state, search };
      }
      // if search string is empty, then items should be empty as well
      return { ...state, search, items: [] };
    default:
      return state;
  }
}
