import React from 'react'
class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.text}
                    <span>{this.props.completed ? '已完成' : '未完成'}</span>
                    <span>{this.props.id}</span>
                    <span>删除</span>
                </div>
            </div>
        )
    }
}
export default TodoItem