import React, { useState, useEffect } from 'react'

export default function App() {
    const [val, set] = useState("")
    const [phrase, setPhrase] = useState("Initial Phrase")
    const createphrase = () => {
        setPhrase(val)
        set("")
    }
    useEffect(() => {
        console.log(`type ${val}`)
    })
    useEffect(() => {
        console.log(`save pharse : ${phrase}`)
    })
    return (
        <div>
            <label>Favorite phrase:</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createphrase} >send</button>
        </div>
    )
}