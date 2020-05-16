import React, {Component} from 'react';
import {actions} from 'mirrorx';
import {Table} from 'tinper-bee';

import './index.less';


class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        actions.ncp.loadList(); // 查询默认条件
    }


    columns = [
        {title: "人员编码", dataIndex: "code", key: "code", width: 150},
        {title: "人员名称", dataIndex: "name", key: "name", width: 200},
        {title: "人员邮箱", dataIndex: "email", key: "email", width: 200},
        {title: "人员电话", dataIndex: "mobile", key: "mobile", width: 100},
    ];


    render() {

        const {list} = this.props;

        return (
            <div className='single-table-query'>
                <Table
                    columns={this.columns}
                    data={list}
                    showRowNum={true}
                />
            </div>
        )
    }
}

export default IndexView;
