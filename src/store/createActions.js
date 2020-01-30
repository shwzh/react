import {CHANGE_INPUT_VALUE, DELETE_ITEM, INIT_LIST_ACTION, GET_INIT_LIST, ADD_LIST_ITEM} from './actionTypes'
import axios from 'axios'
export const handleInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getDeleteItem = (index) => ({
    type: DELETE_ITEM,
    index,
})

export const addListItem = () => ({
    type: ADD_LIST_ITEM,
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data,
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})

/**
 *
 * redux-thunk 形式  在actionCreator 中发送请求
 */
// export const getTodoList = () => {
//     return (dispatch) => {
//       axios.get('./list.json').then((res) => {
//           const { data } = res
//           const action = initListAction(data)
//           dispatch(action)
//       })
//     }
// }