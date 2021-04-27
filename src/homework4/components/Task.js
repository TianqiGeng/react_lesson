import {FaTimes} from 'react-icons/fa'
const Task = ({task, onRemove}) => {
    return (
        <div>
            <h3>
                {task.text}{' '}
                <FaTimes style={{color: 'red'}} onClick={()=>onRemove(task.id)}></FaTimes>
            </h3>
        </div>
    )
}

export default Task