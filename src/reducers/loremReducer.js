import {
    FETCH_LOREM_REQUEST,
    FETCH_LOREM_SUCCESS,
    FETCH_LOREM_FAILURE
} from '../actions/loremActions';

const initialState = {
    loading: false,
    data: {},
    error: '',
};

const loremReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOREM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LOREM_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_LOREM_FAILURE:
            return {
                loading: false,
                data: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default loremReducer;
