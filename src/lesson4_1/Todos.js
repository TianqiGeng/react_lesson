import React from 'react'
import TodoItem from "./TodoItem"
class Todos extends React.Component {
    render() {
        // const data = [
        //     { text: "test", id: "1", completed: false },
        //     { text: "test2", id: "1", completed: false },
        //     { text: "test3", id: "1", completed: false }
        // ]
        const items = this.props.data.map(({ id, text, completed }, index) => {
            return <TodoItem
                key={index}
                id={id}
                text={text}
                completed={completed}
            />
        })
        return <div>{items}</div>
    }
}
export default Todos