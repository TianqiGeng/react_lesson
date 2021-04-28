import React from 'react'
import { FaTrash } from "react-icons/fa"
import StarList from './StarList'
export default class Color extends React.Component {
    render() {
        const { title, color, rating, onRemove, onRateColorList } = this.props
        return (
            <section>
                <h1>{title}</h1>
                <button onClick={onRemove}>
                    <FaTrash />
                </button>
                <div style={{ height: 50, background: color }}></div>
                {/* <div>Star Rating:{rating}</div> */}
                <StarList starSelected={rating} onRateColor={onRateColorList} />
            </section>
        )
    }
}