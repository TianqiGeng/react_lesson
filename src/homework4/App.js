import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

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

  return (
    <Router>
      <div className='container'>
        <Header title={'Tasks'} showAdd={showAddTask} onClick={()=>setShowAddTask(!showAddTask)}></Header>
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}></AddTask>}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onRemove={removeTask}></Tasks>
              )
              : ('No tasks')
            }
          </>
        )
        }>

        </Route>
      </div>
    </Router>
  )
}

export default App;
