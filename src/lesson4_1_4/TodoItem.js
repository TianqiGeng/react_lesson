import React from 'react'
import CheckBox from './CheckBox'
class TodoItem extends React.Component {
    render() {
        const { data, changeStates } = this.props
        const handleChange = (checked) => changeStates(data.id, checked)

        return (
            <div>
                <div className="checkbox">
                    <label>
                        <CheckBox checked={data.completed} onChange={handleChange} />{data.text}
                    </label>
                </div>
            </div >
        )
    }
}
export default TodoItem