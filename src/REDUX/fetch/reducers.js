import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "./constanse";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_SUCCESS:
            return {
                isLoading: false,
                info: action.payload
            };

        case GET_FAILED:
            return {
                isLoading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
}


export default reducers;