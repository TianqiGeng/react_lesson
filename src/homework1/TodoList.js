import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import AddTodo from './AddTodo'
import { applyFilter } from './services/filter'

class TodoList extends React.Component {

    render() {
        const { title, items, addNew, filter, changeFilter, changeStatus, deleteItem } = this.props
        const filtedList = applyFilter(items, filter)
        return (
            <div className="todolist">
                <header>
                    <h1>{title}</h1>
                    <AddTodo addNew={addNew} />
                </header>
                <ul className="list-unstyled">
                    {filtedList.map(item =>
                        <TodoItem
                            key={item.id}
                            data={item}
                            changeStatus={changeStatus}
                            deleteItem={deleteItem}
                        />)}
                </ul>
                <Footer {...{ count: items.length, filter, changeFilter }} />
            </div>
        )
    }
}
export default TodoList