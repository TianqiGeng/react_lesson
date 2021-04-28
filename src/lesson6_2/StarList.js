import React from 'react'
import { FaStar } from 'react-icons/fa'
import Star from './Star'


export default function StarList({
    starSelected = 0,
    totalStars = 5,
    onRateColor = (f) => f,
}) {
    return <div>
        {/* 1 2 3 4 5 数组 */}
        {/* 012345 */}
        {/* onRate是计算出第几颗星星被选择，i从0开始的，那i+1就是第几课星星，也就是确定了starSelected、rating值*/}
        {[...Array(totalStars)].map(
            (n, i) => (
                <Star
                    key={i}
                    selected={i < starSelected}
                    onClick={() => onRateColor(i + 1)}
                />
            )
        )}
        <p>
            {starSelected} of {totalStars} stars
        </p>
    </div>


}