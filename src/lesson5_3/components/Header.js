import React from 'react'
import InputWrapper from './wrapper/InputWrapper'

export default function Headers({ title, mode, addNew, query, setSearchQuery }) {
    return <header>
        <h1>{title}</h1>
        <InputWrapper {...{ mode, addNew, query, setSearchQuery }} />
    </header>
}