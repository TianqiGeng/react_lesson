import Task from './Task'
const Tasks = ({tasks, onRemove}) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task task={task} key={index} onRemove={onRemove}></Task>
            ))}
        </>
    )
}
export default Tasks