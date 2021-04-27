import { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('enter task name')
            return
        }
        onAdd({text})

        setText('')

    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask