import React from 'react';
import ReactDOM from 'react-dom';

var myStyle = {
    fontSize: 100,
    color: "#FF0000",
}
var arr = [
    <h1>AAA</h1>,
    <h1>BBB</h1>,
]
const element = (
    <div>
        <h1 style={myStyle}>Hello World</h1>
        <h2>{arr}</h2>
    </div>)

ReactDOM.render(
    element,
    document.getElementById('root')
);

