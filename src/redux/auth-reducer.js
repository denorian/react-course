import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
    );

export const getUserData = () => (dispatch) => {
    authApi.me().then(responce => {
        if (responce.data.resultCode === 0) {
            let {id, login, email} = responce.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
               dispatch(getUserData());
            }
        });
};

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}
export default authReducer;