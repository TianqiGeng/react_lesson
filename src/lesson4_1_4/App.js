import React from 'react'
import TodoList from './TodoList'
import { getAll, addToList, updateStatus, deleteItem } from './services/todo'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "active",
            items: getAll()

        }
    }

    addNew(text) {
        let updateList = addToList(this.state.items, { text, completed: false })
        this.setState({
            //使用es6语法，拼接成新数组
            items: [...this.state.items, updateList]
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
        const updateList = updateStatus(this.state.items, itemId, checked)
        this.setState(
            { updateList }
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
