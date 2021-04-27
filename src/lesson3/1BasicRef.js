import React, { useRef } from 'react'

export class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.show = this.show.bind(this)
    }
    show() {
        console.log(this.myRef)
    }
    render() {
        return (
            <div ref={this.myRef} onClick={this.show}>
                My ref
            </div>
        )
    }
}

export function FuncTextInput(props) {
    const textInput = useRef(null)
    function handleClick() {
        textInput.current.focus();
    }
    return (
        <div>
            <input
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Focus the text"
                onClick={handleClick}
            />
        </div>
    )
}
export class CustomeTextPut extends React.Component {
    constructor(props) {
        super(props)
        this.textInput2 = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
        this.state = {
            name: "tom"
        }
    }
    focusTextInput() {
        this.textInput2.current.focus()
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput2} />
                <input
                    type="button"
                    value="Focus the text"
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

export class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    componentDidMount() {
        console.log(this.textInput.current)
        this.textInput.current.focusTextInput()
    }
    render() {
        return (
            <CustomeTextPut ref={this.textInput} />
        )
    }
}