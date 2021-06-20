export const SET_DATA = 'SET_DATA';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const setData = (payload) => ({
        type: SET_DATA,
        payload
})

export const changePage = (payload) => ({
        type: CHANGE_PAGE,
        payload
})