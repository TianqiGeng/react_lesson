import { render } from '@testing-library/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'


export default function Star({ selected = false, onClick = (f) => f }) {
    console.log(selected)
    return <FaStar id="star" color={selected ? 'red' : 'grey'}
        onClick={onClick} />

}