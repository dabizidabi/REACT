import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';
import Split from 'react-split';
import {nanoid} from 'nanoid';
import {useEffect, useState} from 'react';

export default function App() {
  const currentTime = new Date().toJSON().slice(11, 19);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || 
    []);

  const [currentId, setCurrentId] = useState("");

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)));
  
  const createTask = () => {
      const newtask = {
        id: nanoid(),
        text: "Type your note...",
        check: false,
        dateTime: currentTime
      }
      setTasks(prevtasks => [...prevtasks, newtask]);
      setCurrentId(newtask.id);
  }

  const deleteTask = (id) => {
      setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
  }
  
  const getCurrentTask = () => {
    return tasks.find((task) => {
      return task.id === currentId }) || tasks[0] || "";
    }
    
  const updateTask = (newText, id) => {
    setTasks(oldTasks => oldTasks.map((oldTask) => {
      return oldTask.id === id ? { ...oldTask, text: newText, dateTime: currentTime} : oldTask;
    })
    )
  }

  const toggleCheckbox = (id) => {
    setTasks(oldTasks => oldTasks.map((oldTask) => {
      return oldTask.id === id ? {...oldTask, check: !oldTask.check, dateTime: currentTime} : oldTask;
    }))
  }

  
  return (
    <div className="App">
      <Split
        sizes={[20, 80]}
        direction="horizontal"
        className='split'
      >
          <Sidebar createTask={createTask} deleteTask={deleteTask} setCurrentId={setCurrentId} currentId={currentId} tasks={tasks} toggleCheckbox={toggleCheckbox}/>
          <Editor getCurrentTask={getCurrentTask()} updateTask={updateTask}/>
      </Split>
    </div>
  );
}
