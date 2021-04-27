import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>hello, function {props.name}</h1>

}
class Welcome2 extends React.Component {
    render() {
        return <h1>hello, class {this.props.name}</h1 >
    }

}
const element = <Welcome2 name="Sara" />

ReactDOM.render(
    element,
    document.getElementById('root')
);

