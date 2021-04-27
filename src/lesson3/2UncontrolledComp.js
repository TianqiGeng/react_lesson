import React from 'react'
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('提交的名字' + this.input.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="提交" />

            </form>
        )
    }
}

export default NameForm