export const AUTH = '@user/AUTH';
export const AUTH_RESPONSE = '@user/AUTH_RESPONSE'

const initalState = {
    isAuth: false,
    user: {},
    error: '',
}

export default function( state = initalState, action) {
    switch(action.type) {
        case AUTH_RESPONSE: {
            console.log('reducer', action.payload)
            if(action.payload.errorCode === 0) {
                return {
                    ...state,
                    error: action.payload.message,
                }
            }
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}