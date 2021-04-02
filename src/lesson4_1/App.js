import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'


class App extends React.Component {
    render() {

        const data = [
            { text: "test", id: "1", completed: false },
            { text: "test2", id: "1", completed: false },
            { text: "test3", id: "1", completed: false }
        ]
        return (
            <div>
                <h1>My Todo React App</h1>
                <br />
                <AddTodo />
                <Todos data={data} />
            </div>
        )
    }
}
const MyApp = <App />
export default MyApp;
