import React from 'react'
import TodoList from './TodoList'
import { getAll, addToList, updateStatus, deleteItem } from "./services/todo"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: getAll(),
            filter: 'all',
        }
    }
    addNew(text) {
        console.log("app_addNew" + text)

        let item = addToList(this.state.items, { text, completed: false })
        this.setState({
            //使用es6语法，拼接成新数组
            items: [...this.state.items, item]
        })
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
    deleteItem(itemId) {
        let items = deleteItem(this.state.items, itemId)
        this.setState({ items })
        // console.log("delete" + "items" + items)
    }
    render() {
        // const title = "My Todo React App"
        // const data = this.state.items
        // console.log("App" + typeof (data) + data[0].text)
        return (
            <div className="container">
                <div className="row">
                    <TodoList
                        // title={title}
                        // items={data}
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        changeStatus={this.changeStatus.bind(this)}
                        deleteItem={this.deleteItem.bind(this)}
                        {...this.state} />
                </div>
            </div>
        )
    }
}
const MyApp = <App />
export default MyApp;
