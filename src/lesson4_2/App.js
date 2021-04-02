import React from 'react'
import TodoList from './TodoList'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { text: "test1", id: "1", completed: false },
                { text: "test2", id: "2", completed: true },
                { text: "test3", id: "3", completed: false }
            ],
            filter: 'all',
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
            { filter }
        )
    }
    changeStatus(itemId, completedStatus) {
        let items = [...this.state.items]
        let index = items.findIndex(item => item.id === itemId)
        items[index].completed = completedStatus
        this.setState({ items })
    }
    render() {
        const title = "My Todo React App"
        const data = this.state.items
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
                        {...this.state} />
                </div>
            </div>
        )
    }
}
const MyApp = <App />
export default MyApp;
