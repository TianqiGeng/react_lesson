import React from 'react'
function ListItem(props) {
    const value = props.value;
    return (
        <li>{value}</li>
    )
}
function NumberList(props) {
    const numbers = props.numbers
    //key跟着numbers.map决定
    // const listItems = numbers.map((n) =>
    //     <ListItem key={n.toString()} value={n}></ListItem>
    // )
    return <ul>
        {/* {listItems} */}
        {numbers.map((n) =>
            <ListItem key={n.toString()} value={n}></ListItem>
        )}
    </ul>
}
export default NumberList