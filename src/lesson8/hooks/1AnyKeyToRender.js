import React, { useState, useEffect } from 'react'
//按一个键，触发重新渲染
const useAnyKeyToRender = () => {
    const [, forceRender] = useState()
    useEffect(() => {
        window.addEventListener("keydown", forceRender)
        return () => window.removeEventListener("keydown", forceRender)
    })
}

export default function Appya() {
    useAnyKeyToRender()
    useEffect(() => {
        console.log("fresh render")
    })
    return <h1>Test useEffect</h1>
}