import React from 'react'
import TodoList from './TodoList'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "active",
            items: [
                { text: "test1", id: "1", completed: false },
                { text: "test2", id: "2", completed: true },
                { text: "test3", id: "3", completed: false }
            ]

        }
    }

    addNew(text) {
        console.log("app_addNew" + text)
        let nextId = this.state.items.length + 1
        let item = {
            id: nextId,
            text: text,
            completed: false
        }
        this.setState({
            //使用es6语法，拼接成新数组
            items: [...this.state.items, item]
        })
    }
    changeFilter(filter) {
        this.setState(
            { filter: filter }
        )
    }
    changeStates(itemId, checked) {
        console.log(itemId, checked)
        //防止出现问题，直接复制
        let newItems = [...this.state.items]
        let newItems2 = { ...this.state.items }
        console.log(newItems, newItems2)
        let index = newItems.findIndex(item => item.id === itemId)
        newItems[index].completed = checked
        this.setState(
            { newItems }
        )
    }
    render() {
        const title = "My Todo App"
        const data = this.state.items
        return (
            <div className="container">
                {/* <AddTodo /> */}
                <div className="row">
                    <TodoList
                        // title={title}
                        // data={data}
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        changeStates={this.changeStates.bind(this)}

                        {...this.state}
                    />
                </div>
            </div>
        )
    }
}
const MyApp = <App />
export default MyApp;
