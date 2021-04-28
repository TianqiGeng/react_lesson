import React from 'react'
import * as KeyCode from 'keycode-js'



class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        console.log("props.value" + props.value)
        this.state = {
            value: props.value || ''
        }
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
        console.log("Finish handleChange")
    }
    handleKeyUp(e) {
        console.log("Start handleKeyUp")
        const { addNew } = this.props
        //去掉空格
        const text = this.state.value.trim()
        //输入回车，并且text有值，在执行
        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            console.log("keyCode" + text)
            addNew(text)
            this.clear()
        }

    }
    clear() {
        this.setState({ value: "" })
    }
    render() {
        return (
            <input type="text"
                placeholder="添加"
                className="form-control add-todo"
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                onKeyUp={e => this.handleKeyUp(e)}
            />
        )
    }
}

export default AddTodo