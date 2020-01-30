import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION, DELETE_ITEM, ADD_LIST_ITEM } from './actionTypes'
import axios from "axios";
import {initListAction} from "./createActions";


const defaultState = {
    inputValue: 'hello world',
    list: [],
}
/**
 * reducer 可以接受stage 但绝不能修改state
 *
 */
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.splice(action.index, 1) // 这里是自己写的 注意
        return newState
    }

    if(action.type === INIT_LIST_ACTION) {
        // axios.get('./list.json').then((res) => {
        //     const { data } = res
        //     const action = initListAction(data)
        //     dispatch(action)
        // })
    }

    return state
}

/**
 *
 *

 */