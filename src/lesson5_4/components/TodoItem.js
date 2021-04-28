import React from 'react'
import CheckBox from './Checkbox'
class TodoItem extends React.Component {
    render() {

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


            </div>
        )
    }
}
export default TodoItem