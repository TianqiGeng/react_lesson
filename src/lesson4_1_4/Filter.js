import React from 'react'
import { getOptions } from './services/filter'


function Filter(props) {
    const options = getOptions()
    const { filter, change } = props
    console.log("Filter=" + filter)
    const getClass = (key) => (key === filter) ? 'selected' : ''
    return (
        <ul className="filters list-unstyled clearfix">
            {
                //Object.keys 返回一个所有元素为字符串的数组，来自前面的对象
                //默认未active，有三个li，如果选择all，
                //然后执行change，改变filter值，那么样式也会变
                //也就是map循环出的key值和filter相等了
                Object.keys(options).map(key => (
                    <li key={key}>
                        <a onClick={() => { change(key) }} className={getClass(key)}>
                            {options[key]}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
export default Filter