import React from 'react';

class SearchCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            result: ""
        }
    }


    searchEvent = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                result: e.target.value,
                value: e.target.value,
            })
        }
    }

    changeEvent = (e) => {
        this.setState({
            result: e.target.value,
            value: e.target.value,
        })
    }

    render() {
        return (
            <div style={{textAlign: "center", paddingTop: "20px"}}>
                <input
                    type="text"
                    placeholder="请输入查询内容"
                    onKeyDown={this.searchEvent}
                    value={this.state.value}
                    onChange={this.changeEvent}/>
                <span style={{marginLeft: "20px"}}>查询值：{this.state.result}</span>
            </div>
        )
    }
}

export default SearchCom
