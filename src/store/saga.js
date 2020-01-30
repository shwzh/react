import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from "./createActions";
import axios from 'axios';

function* getInitList() {
    const res = yield axios.get('./list.json')
    try {
        const { data } = res
        const action = initListAction(data)
        yield put(action)
    } catch (e) {
        console.log('请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}


export default mySaga