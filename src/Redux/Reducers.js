import { combineReducers } from 'redux';

function Login(state = { isLogedIn: false, token: null, user: null }, action) {
    switch (action.type) {
        case 'LOGIN':
            return { isLogedIn: true, token: action.payload.token, user: action.token.user};
        case 'LOGOUT':
            return { isLogedIn: false, token: null, user: null};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    login: Login,
});
