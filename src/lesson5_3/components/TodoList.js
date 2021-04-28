import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import { applyFilter, search } from '../services/filter'
import Header from './Header'

class TodoList extends React.Component {

    render() {
        //const { title, items, addNew, filter, changeFilter, changeStatus, deleteItem } = this.props
        const { title, items, filter, mode, query } = this.props.data
        const { addNew, changeFilter, changeStatus, setSearchQuery, changeMode } = this.props.actions
        const filtedList = search(applyFilter(items, filter), query)
        return (
            <div className="todolist">
                <Header {...{ title, mode, addNew, query, setSearchQuery }} />
                <ul className="list-unstyled">
                    {filtedList.map(item =>
                        <TodoItem
                            key={item.id}
                            data={item}
                            changeStatus={changeStatus}

                        />)}
                </ul>
                <Footer {...{ count: items.length, filter, changeFilter, changeMode }} />
            </div>
        )
    }
}
export default TodoList