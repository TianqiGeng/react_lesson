import React, { useState } from 'react'

export const UserInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    return [
        //上面返回一个对象下面 返回最开始设定的值
        // 简化this.state.value,onchange()
        { value, onChange: (e) => setValue(e.target.value) },
        () => setValue(initialValue)
    ]
}