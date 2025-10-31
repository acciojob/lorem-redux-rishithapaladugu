import axios from 'axios';

export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

export const fetchLoremRequest = () => ({
    type: FETCH_LOREM_REQUEST,
});

export const fetchLoremSuccess = (data) => ({
    type: FETCH_LOREM_SUCCESS,
    payload: data,
});

export const fetchLoremFailure = (error) => ({
    type: FETCH_LOREM_FAILURE,
    payload: error,
});

export const fetchLorem = () => {
    return (dispatch) => {
        dispatch(fetchLoremRequest());
        axios
            .get('https://api.lorem.com/ipsum')
            .then((response) => {
                const data = response.data;
                dispatch(fetchLoremSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchLoremFailure(error.message));
            });
    };
};
