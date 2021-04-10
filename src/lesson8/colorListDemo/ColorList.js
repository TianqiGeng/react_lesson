import React from 'react'
import Color from "./Color"

const ColorList = ({ colors, onRate, onRemove }) => {
    return (
        <div>
            {
                colors.length === 0 ? (
                    <p> No Colors Listed</p>
                ) : (
                    colors.map(c => <Color
                        key={c.id}
                        {...c}
                        onRate={(rating) => onRate(c.id, rating)}
                        onRemove={() => onRemove(c.id)}
                    />)
                )
            }
        </div>
    )
}

export default ColorList