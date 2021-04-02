import React from 'react'
import CheckBox from './Checkbox'
class TodoItem extends React.Component {
    render() {
        //const data = this.props.data
        //Objects are not valid as a React child
        //mm->object
        const mm = [
            { text: "test1", id: "1", completed: false },
            { text: "test2", id: "2", completed: false },
        ]
        //arrayl可以显示
        const kk = [1, 2]
        console.log(typeof (mm))
        //checkbox
        const { data, changeStatus } = this.props
        const handleChange = (checked) => changeStatus(data.id, checked)
        return (
            <div className="ui-state-default">
                <div className="checkout">
                    <label>
                        <CheckBox checked={data.completed} onChange={handleChange} />{data.text}
                    </label>
                </div>

                {/* {mm.text} */}
                {/* {kk} */}
            </div>
        )
    }
}
export default TodoItem