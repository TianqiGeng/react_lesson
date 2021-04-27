import React from 'react'
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };
        //绑定this
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(
            state => ({
                isToggle: !state.isToggle
            })
        );
    }
    deleteRow(id, e) {
        console.log(id, e)
    }
    render() {
        let id = 2
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggle ? "ON" : "OFF"}
                </button>
                <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
                <button onClick={this.deleteRow.bind(this, id)}>Delete Row with this</button>
            </div >
        )
    }
}
export default Toggle;