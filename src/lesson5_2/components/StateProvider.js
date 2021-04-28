import React from 'react'
import { getAll, addToList, updateStatus } from '../services/todo'
import { wrapChildWith, objectWithOnly } from '../utils.js/common'
class Provider extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: "tianqi todo list",
            filter: 'active',
            items: getAll(),
        }
    }
    addNew(text) {
        console.log("app_addNew" + text)

        let item = addToList(this.state.items, { text, completed: false })
        this.setState({
            items: item
        })
        console.log(this.state.items)
    }
    changeFilter(filter) {
        this.setState(
            { filter }
        )
    }
    changeStatus(itemId, completedStatus) {
        let items = updateStatus(this.state.items, itemId, completedStatus)
        this.setState({ items })
    }

    render() {
        let children = wrapChildWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus'])
        })
        return <div>{children}</div>
    }
}
export default Provider