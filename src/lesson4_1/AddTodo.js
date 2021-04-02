import React from 'react'

class AddTodo extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <input type="text" placeholder="TODO" ref="text" />
                </div>
                <button type="submit">添加</button>
            </form>
        )
    }
}

export default AddTodo