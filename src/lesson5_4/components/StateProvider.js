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
            query: '',
            count: 0,
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
        this.addCounter()
        this.addCounter()
        this.addCounter()
        this.setState({
            mode
        })
        console.log("count::" + this.state.count);
    }
    addCounter(count) {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((state) => {
            return { count: state.count + 1 }
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