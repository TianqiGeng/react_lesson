import React, { useState, useEffect } from 'react'

function Example() {
    //声明多个state变量
    // 声明一个新的叫做count的state变量
    const [count, updateCount] = useState(0)
    const [count2, updateCount2] = useState("1")
    //相当于componentDidMount和componentDidUpdate
    useEffect(() => {
        console.log("use effect count", count)
    })

    return <div>
        <p> u clicked {count} times</p>
        <p> u clicked {count2} times</p>

        <button onClick={() => updateCount(count + 1)}> Add Count</button>
        <button onClick={() => updateCount2(count2 + '1')}> Add Count2</button>

    </div>
}


export default Example