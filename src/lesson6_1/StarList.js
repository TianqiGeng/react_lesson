import React from 'react'
import { FaStar } from 'react-icons/fa'
import Star from './Star'


export default function StarList({
    starSelected = 0,
    totalStars = 5,
    onRate = (f) => f,
}) {
    return <div>
        {/* 1 2 3 4 5 数组 */}
        {[...Array(totalStars)].map(
            (n, i) => (
                <Star
                    key={i}
                    selected={i < starSelected}
                    onClick={() => onRate(i + 1)}
                />
            )
        )}
        <p>
            {starSelected} of {totalStars} stars
        </p>
    </div>


}