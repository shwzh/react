import React, {Component, Fragment} from 'react'
import 'antd/dist/antd.css'
import { List, Button, Input } from 'antd';
import { getTodoList, handleInputChange } from "./store/createActions";
import store from "./store";



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange) // 这个是最原始的redux 数据实时更新到组件内时用的方法，但是redux-thunk 或者 redux-saga都要用到
    }

    render() {
        return (
            <Fragment>
                <div style={{padding: '20px'}}>
                    <Input
                        value={this.state.inputValue}
                        style={{ width: 200 }}
                        onChange={ this.handleInputChange }
                        placeholder="Basic usage" />
                    <Button type="primary" style={{ marginLeft: '10px'}}>提交</Button>
                </div>
                <List
                    style={{ width: '300px', margin: '20px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={ this.state.list }
                    renderItem={item => <List.Item>{item}</List.Item>}/>
            </Fragment>
        )
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    handleInputChange(e) {
        const action = handleInputChange(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }
}

export default TodoList