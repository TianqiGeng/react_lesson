import React from 'react'
import { MODE_CREATE, MODE_SEARCH } from "../../services/mode"

export default function ButtonWrapper({ mode, changeMode }) {
    const isSearch = mode === MODE_SEARCH
    return (
        <div>
            <a title="添加"
                className={'button add ' + (!isSearch ? 'selected' : '')}
                onClick={() => changeMode(MODE_CREATE)}
            />
            <a title="搜索"
                className={'button search ' + (isSearch ? 'selected' : '')}
                onClick={() => changeMode(MODE_SEARCH)}
            />

        </div >
    )
}