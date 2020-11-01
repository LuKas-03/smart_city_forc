import * as USER from '../reducers/user';


export const userAuthenticate = payload => ({
    payload: payload,
    type: USER.AUTH
})

export const userAuthResponse = payload => ({
    payload: payload,
    type: USER.AUTH_RESPONSE
})