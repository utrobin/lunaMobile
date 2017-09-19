import {LOADING_FINISHED, LOADING_STARTED} from "./loading.constants";


const initialState = {
    loading: false,
    data: []
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return {
                ...state,
                loading: true,
                data: []
            };
            break;
        case LOADING_FINISHED:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        default:
            return state;
            break;
    }
};

export default loadingReducer