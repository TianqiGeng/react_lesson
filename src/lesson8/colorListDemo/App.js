import ColorList from "./ColorList"
import React, { useEffect, useState } from 'react'
import AddColorForm from "./AddColorForm"
import styles from "../styles/App.module.css"
export default function App() {
    const [colors, setColors] = useState([
        {
            id: "111",
            color: "yellow",
            title: "test1",
            rating: 3,
        },
        {
            id: "222",
            color: "pink",
            title: "test2",
            rating: 1,
        },
        {
            id: "333",
            color: "red",
            title: "test3",
            rating: 5,
        },
    ])

    const removeColor = (id) => {
        const newColors = colors.filter(c => c.id !== id)
        setColors(newColors)
    }

    const rateColor = (id, rating) => {
        const newColors = colors.map(c => c.id !== id ? c : {
            ...c,
            rating
        })
        setColors(newColors)
    }

    const addColor = (title, color) => {
        const newColors = [
            {
                id: Math.random(),
                title,
                color,
                rating: 1
            },
            ...colors

        ]
        setColors(newColors)
    }
    const [count, setCount] = useState();
    useEffect(() => {
        if (colors.length > count) {
            alert("增加了一个color");
        }
        setCount(colors.length);
    }, [colors])

    return (
        <div className={styles.all}>
            <AddColorForm addColor={addColor} />
            <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
        </div>
    )
}