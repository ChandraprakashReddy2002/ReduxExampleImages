import { SET_DATA, CHANGE_PAGE } from "./actions";

const initialState = {
    data: [],
    loading: true,
    page: 1
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                loading:false,
            };
        case CHANGE_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}

export default userReducer;