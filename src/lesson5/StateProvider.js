import React from 'react'
import { getAll } from './services/todo'
class Provider extends React.Component {
    constructor(props) {
        super()
        this.state = {
            filter: 'active',
            items: getAll(),
        }
    }
    render() {
        return
    }
}