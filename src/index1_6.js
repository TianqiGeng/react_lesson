import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(), 1
        );
        console.log("componentDidMount")
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
        console.log("componentWillUnmount")
    }
    tick() {
        this.setState(
            {
                date: new Date()
            }
        );
        console.log("tick")
    }
    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}
ReactDOM.render(
    <App />,

    document.getElementById('root')
);

