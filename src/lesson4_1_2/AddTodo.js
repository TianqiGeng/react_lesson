import React from 'react'
import * as KeyCode from 'keycode-js'
class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value || ''
        }
        console.log("this.state.value" + this.state.value);
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
        console.log("Finish handleChange")
    }
    handleKeyUp(e) {
        console.log("Start handleKeyUp")
        const { addNew } = this.props
        const text = this.state.value.trim()
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
                className="fomr-control add-todo"
                value={this.state.value}
                onChange={e => this.handleChange(e)}
                onKeyUp={e => this.handleKeyUp(e)} />
        )
    }
}

export default AddTodo