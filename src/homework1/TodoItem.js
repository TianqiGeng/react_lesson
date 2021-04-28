import React from 'react'
import CheckBox from './Checkbox'
class TodoItem extends React.Component {
    render() {
        console.log(typeof (mm))
        //checkbox
        const { data, changeStatus, deleteItem } = this.props
        const handleChange = (checked) => changeStatus(data.id, checked)
        const deleteIt = () => deleteItem(data.id)
        return (
            <div className="ui-state-default">
                <div className="checkout">
                    <label>
                        <CheckBox checked={data.completed} onChange={handleChange} />{data.text}
                    </label>
                    <a onClick={deleteIt}>
                        删除
                    </a>
                </div>

                {/* {mm.text} */}
                {/* {kk} */}
            </div>
        )
    }
}
export default TodoItem