import React, { Component } from 'react'

class CheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
        }
    }
    handleChange(e) {
        const { checked } = e.target
        this.setState({ checked })
        //传回父组件
        this.props.onChange(checked)
    }
    render() {
        return (
            <input type="checkbox"
                checked={this.state.checked}
                onChange={e => this.handleChange(e)} />
        )
    }
}
export default CheckBox

