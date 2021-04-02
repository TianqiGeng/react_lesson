import React from 'react'

const options = {
    'all': 'All',
    'active': 'Active',
    'completed': 'Completed'
}
function Filter(props) {
    console.log("Object.keys(options)" + Object.keys(options))
    const { filter, changeFilter } = props
    console.log("filter" + filter)
    const getClass = (key) => (key == filter) ? 'selected' : ''
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