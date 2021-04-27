import React from 'react'
function ListItem(props) {
    const value = props.value;
    return (
        //写法错误
        // Each child in a list should have a unique "key" prop.
        <li key={value.toString()} >{value}</li>
    )
}
function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((n) =>
        <ListItem value={n}></ListItem>
    )
    return <ul>
        {listItems}
    </ul>
}
export default NumberList