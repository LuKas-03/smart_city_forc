import * as CITY from '../reducers/city';


export const cityLoad = payload => ({
    payload: payload,
    type: CITY.LOAD
})

export const cityLoadResponse = payload => ({
    payload: payload,
    type: CITY.LOAD_RESPONSE
})

export const cityLoadSubgroups = payload => ({
    payload: payload,
    type: CITY.LOAD_SUBGROUPS
})

export const cityLoadSubgroupsResponse = payload => ({
    payload: payload,
    type: CITY.LOAD_SUBGROUPS_RESPONSE
})

export const cityLoadHistory = payload => ({
    payload: payload,
    type: CITY.LOAD_HISTORY
})

export const cityLoadHistoryResponse = payload => ({
    payload: payload,
    type: CITY.LOAD_HISTORY_RESPONSE
})

export const citySendFile = payload => ({
    payload: payload,
    type: CITY.SEND_FILE
})

export const citySendFileResponse = payload => ({
    payload: payload,
    type: CITY.SEND_FILE_RESPONSE
})