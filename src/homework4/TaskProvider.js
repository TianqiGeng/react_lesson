//not work
const TaskProvider = () => {
    const [tasks, setTasks] = useState([])
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks')
        const data = await res.json()
        return data | []
      }
    
      const removeTask = async (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }
    
      const addTask = async (task) => {
        // let task = {id: uuidv4(), text: text}
        task.id = uuidv4()
        setTasks([...tasks, task])
      }
}

export default TaskProvider