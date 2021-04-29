import React from 'react'

import styled from "styled-components"
import { UserInput } from './InputHook'
import styles from "./styles/App.module.css"
//继承并显示新的Button
const Button = styled.button`
    background-color:transparent;
    border: 2px solid red;
    padding: 5px;
    margin-left:20px;
    cursor:pointer;
    transition: all 0.1s ease-in;
`

const input = styled.input`
    border: 2px solid red;
    padding: 5px;
    margin-left:20px;
`

export default function AddColorForm({ addColor }) {
    const [titleProps, resetTitle] = UserInput("")
    const [colorProps, resetColor] = UserInput("red")
    const submit = (e) => {
        e.preventDefault()
        addColor(titleProps.value, colorProps.value)
        resetColor("")
        resetTitle("")
    }
    return (
        <form className={styles.form} onSubmit={submit}>
            <div >
                <div className={styles.content2}>
                    <h5><b>Title:</b></h5>
                    <div className={styles.input}>
                        <input
                            type="text"
                            {...titleProps}
                            placeholder="color title"
                            required
                        />
                    </div>
                </div>
                <div className={styles.content2}>
                    <h5><b>Color:</b></h5>
                    <div className={styles.input}>
                        <input
                            {...colorProps}
                            type="color"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content2}>
                <Button>Add</Button>
            </div>
        </form>
    )
}