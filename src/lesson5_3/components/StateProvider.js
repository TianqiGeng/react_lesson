import React from 'react'
import { getAll, addToList, updateStatus } from '../services/todo'
import { wrapChildWith, objectWithOnly } from '../utils/common'
import { MODE_CREATE, MODE_NONE, MODE_SEARCH } from '../services/mode'
class Provider extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: "tianqi todo list",
            filter: 'active',
            items: getAll(),
            mode: MODE_CREATE,
            query: ''
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
    setSearchQuery(text) {
        this.setState({
            query: text || ""
        })
    }
    changeMode(mode = MODE_CREATE) {
        this.setState({
            mode
        })
    }
    render() {
        let children = wrapChildWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode'
                , 'setSearchQuery'])
        })
        return <div>{children}</div>
    }
}
export default Provider