import React from 'react'

/**
 * 将children组件包裹上props
 * @param {React元素} children
 * @param {JS对象} props
 * @returns React元素
 */
//把子元素所有内容复制给props
export function wrapChildWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props))
}
/**
 * 把函数名称和函数对象映射起来
 * @param {Object} object 原始的this上下文
 * @param {Array} attrs是函数名称构成的数组
 * @return {Object} 函数名->函数的Object
 */

export function objectWithOnly(object, attrs) {
    let newObject = {}
    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object)
    })
    return newObject
}