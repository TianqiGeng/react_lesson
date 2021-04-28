import React from 'react'
import { getOptions } from '../services/filter'
function Filter(props) {
    const options = getOptions()
    const { filter, changeFilter } = props
    console.log("filter" + filter)
    const getClass = (key) => (key === filter) ? 'selected' : ''
    return (
        <ul className="filters list-unstyled clearfix">
            {
                //Object.keys 返回一个所有元素为字符串的数组，来自前面的对象

                Object.keys(options).map(key => (
                    <li key={key}>
                        <a onClick={() => { changeFilter(key) }} className={getClass(key)}>
                            {options[key]}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
export default Filter