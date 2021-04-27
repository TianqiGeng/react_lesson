import React from 'react'
function NumberList(props) {
    const numbers = props.numbers
    //n.id
    const listItems = numbers.map((n) =>
        <li key={n.toString()}>{n}</li>
    )
    // 不推荐index，最好用id
    // const listItems = numbers.map((n, index) =>
    //     <li key={index}>{n}</li>
    // )
    return <ul>
        {listItems}
    </ul>
}
export default NumberList