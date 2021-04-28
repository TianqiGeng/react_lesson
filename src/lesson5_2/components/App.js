import React from 'react'
import TodoList from './TodoList'
import Provider from './StateProvider'
class App extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Provider>
                        <TodoList />
                    </Provider>
                </div>
            </div>
        )
    }
}
const MyApp = <App />
export default MyApp;
