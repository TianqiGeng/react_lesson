import React from 'react'
import TodoItem from "./TodoItem"
import Footer from "./Footer"
import AddTodo from './AddTodo'
class TodoList extends React.Component {
    //默认active，把未completed选出
    //点击改变了filter，比如completed，选出completed==true的
    //选择all,直接返回所有list
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
        const { title, items, addNew, changeFilter, filter, changeStates } = this.props
        const filtedList = this.applyFilter(items, filter)
        return (
            <div className="todolist">
                <header>
                    <h1> {title}</h1>
                    <AddTodo addNew={addNew} />
                </header>
                <ul className="list-unstyled">
                    {filtedList.map((item) =>
                        <TodoItem
                            key={item.id}
                            data={item}
                            changeStates={changeStates}
                        />
                    )}
                </ul>
                <Footer {...{ count: items.length, changeFilter, filter }} />
            </div>
        )
    }
}
export default TodoList