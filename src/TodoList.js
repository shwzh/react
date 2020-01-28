import React, {Component, Fragment} from 'react'
import 'antd/dist/antd.css'
import { Table,List, Button, Input } from 'antd';
import store from "./store";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // this.setState({
        //     data,
        // })
    }

    render() {
        return (
            <Fragment>
                <div style={{padding: '20px'}}>
                    <Input
                        value={this.state.inputValue}
                        style={{ width: 200 }}
                        placeholder="Basic usage" />
                    <Button type="primary" style={{ marginLeft: '10px'}}>提交</Button>
                </div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}/>
            </Fragment>
        )
    }
}

export default TodoList