import React from 'react'

import InputBox from "../AddTodo"
import SearchBox from "../SearchBox"

import { MODE_CREATE, MODE_SEARCH } from "../../services/mode"

export default function InputWrapper({ mode, addNew, query, setSearchQuery }) {
    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{ addNew }} />
        case MODE_SEARCH:
            return <SearchBox {...{ query, setSearchQuery }} />
        default:
            return null
    }
}