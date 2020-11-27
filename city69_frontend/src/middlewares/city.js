import actions from '../actions';

import * as CITY from '../reducers/city';
import fetch from './fetch';

export const loadCity = store => next => action => {
    if(action.type === CITY.LOAD) {
        console.log(action.payload)
        fetch(`/indicators/group?city_id=${action.payload}`, {
            method: 'GET',
        })
        .then((res) => {
            store.dispatch(actions.cityLoadResponse(res));
        })
        .catch(error => console.log(error));
    }
    next(action);
}

export const loadSubgroups = store => next => action => {
    if(action.type === CITY.LOAD_SUBGROUPS) {
        console.log(action.payload)
        fetch(`/indicators/subgroup?group_id=${action.payload}`, {
            method: 'GET',
        })
        .then((res) => {
            store.dispatch(actions.cityLoadSubgroupsResponse(res));
        })
        .catch(error => console.log(error));
    }
    next(action);
}

export const loadHistory = store => next => action => {
    if(action.type === CITY.LOAD_HISTORY) {
        console.log(action.payload)
        fetch(`/indicators/history?subgroup_id=${action.payload}`, {
            method: 'GET',
        })
        .then((res) => {
            store.dispatch(actions.cityLoadHistoryResponse(res));
        })
        .catch(error => console.log(error));
    }
    next(action);
}

export const sendFile= store => next => action => {
    if(action.type === CITY.LOAD_HISTORY) {
        console.log(action.payload)
        fetch(`/upload/5f9e1825d2c4243ba05fd0b9/5f9e17d0d2c4243ba05fd0ac`, {
            method: 'POST',
            body: action.payload
        })
        .then((res) => {
            store.dispatch(actions.cityLoadHistoryResponse(res));
        })
        .catch(error => console.log(error));
    }
    next(action);
}