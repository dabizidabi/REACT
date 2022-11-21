import './Sidebar.css'
import trashlogo from '../../img/trash.png'

export default function Sidebar({createTask, deleteTask, setCurrentId, tasks, currentId, toggleCheckbox}) {
    return (
        <section>
            <button className="new-task-btn" onClick={createTask}>Add task</button>
            {tasks.length > 0 ? 
            <div>
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className={task.id === currentId ? "selected" : "unselected"} onClick={() => setCurrentId(task.id)}>
                            <div>{task.text.split('\n')[0].slice(0, 20)}</div>
                            <input 
                            className={task.check ? "checked-checkbox" : "checkbox-input"}
                            type="checkbox"
                            checked={task.check}
                            onChange={() => toggleCheckbox(task.id)}
                            name="checked-job"
                            />
                            <div className="changed">changed: {task.dateTime}</div>
                            <button className='trash-btn' onClick={() => deleteTask(task.id)}>
                                <img className='trash-logo' src={trashlogo} alt="trash.img" />
                            </button>
                        </div>
                    )
                })} 
            </div> : <div>Nothing to do...</div>} 
        </section>
    );
}