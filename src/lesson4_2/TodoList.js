import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import AddTodo from './AddTodo'


class TodoList extends React.Component {
    applyFilter(list, filter) {
        switch (filter) {
            case 'completed':
                return list.filter(item => item.completed === true)
            case 'active':
                return list.filter(item => item.completed === false)
            default:
                return list
        }
    }

    render() {
        const { title, items, addNew, filter, changeFilter, changeStatus } = this.props
        const filtedList = this.applyFilter(items, filter)
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
                        />)}
                </ul>
                <Footer {...{ count: items.length, filter, changeFilter }} />
            </div>
        )
    }
}
export default TodoList