import actions from '../actions';

import * as USER from '../reducers/user';
import fetch from './fetch';

export const authUser = store => next => action => {
    if(action.type === USER.AUTH) {
        console.log(action.payload)
        fetch('/users/auth', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then((res) => {
            console.log('request', res)
            store.dispatch(actions.userAuthResponse(res));
        })
        .catch(error => console.log(error));
    }
    next(action);
}