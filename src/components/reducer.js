import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE,
} from "./actions";

const initialState = {
  loading: true, // ✅ Important! Cypress expects initial loading state
  error: null,
  title: "",
  body: "",
  posts: [],
};

function loremReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        title: action.payload.title,
        body: action.payload.body,
        posts: action.payload.posts || [],
      };
    case FETCH_LOREM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default loremReducer;
