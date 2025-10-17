import React, { useState} from 'react'

function Todolist() {
  
    const [tasks, setTasks] = useState([]); // [{text, deadline, completed, completedAt}]
    const [taskDateTime, setTaskDateTime] = useState("");
    const [newTask, setNewTask] = useState("");
    const [ontime, setOntime] = useState("");
    const [notontime, setNotontime] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);



    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        const hasText = newTask && newTask.trim() !== "";
        const hasTime = taskDateTime && taskDateTime.trim() !== "";

        if(hasText && hasTime){
            const newTaskItem = {
                text: newTask,
                deadline: taskDateTime,
                completed: false,
                completedAt: null
            };
            setTasks(t => [...t, newTaskItem]);
            setNewTask("");
            setTaskDateTime("");
            setOntime("");
        } else if(!hasText && !hasTime){
            alert("Please enter a task and select date/time before adding.");
        } else if(!hasText){
            alert("Please enter a task before adding.");
        } else {
            alert("Please select date and time for the task.");
        }
    }

    function completeTask(index) {
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            const task = { ...newTasks[index] };
            const now = new Date();
            const deadline = new Date(task.deadline);
            
            task.completed = true;
            task.completedAt = now.toISOString();
            newTasks[index] = task;
            
            return newTasks;
        });
    }

    function isCompletedOnTime(task) {
        if (!task.completed) return null;
        const completedAt = new Date(task.completedAt);
        const deadline = new Date(task.deadline);
        return completedAt <= deadline;
    }
    function ontimechange(e){
        const selectedDateTime = e.target.value;
        setTaskDateTime(selectedDateTime);
        
        if(selectedDateTime) {
            setOntime("green");
            setNotontime("");
        } else {
            setOntime("");
            setNotontime("red");
        }
    }
    function editTask(index){
        setIsEditing(true);
        setEditIndex(index);
        setEditedTask(tasks[index].text);
        setTaskDateTime(tasks[index].deadline); // Set the datetime for editing
    }

    function handleEditChange(e) {
        setEditedTask(e.target.value);
    }

    function saveEdit() {
        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = {
                ...updatedTasks[editIndex],
                text: editedTask,
                deadline: taskDateTime,  // Save the updated deadline
                completed: false,        // Reset completion status since time changed
                completedAt: null
            };
            setTasks(updatedTasks);
            setIsEditing(false);
            setEditIndex(null);
            setEditedTask("");
            setTaskDateTime("");
        }
        else {
            alert("No task selected for editing.");
        }
    }

    function cancelEdit() {
        setIsEditing(false);
        setEditIndex(null);
        setEditedTask("");
        setTaskDateTime("");
    }
    // function
    function deleteTask(index){
        setTasks(tasks => tasks.filter((_, i) => i !== index));
    }


    return (
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder='Enter a task'value={newTask} onChange={handleInputChange} />
                <input 
                    type="datetime-local" 
                    className='date' 
                    id="datetimepicker" 
                    name="datetimepicker" 
                    value={taskDateTime} 
                    onChange={ontimechange}
                    style={{ 
                        borderColor: ontime ? ontime : notontime ? notontime : '',
                    }}
                />
            <button className='add-task' onClick={addTask}>
                Add Task
            </button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                <li key={index}>
                    {isEditing && editIndex === index ? (
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <input
                                type="text"
                                value={editedTask}
                                onChange={handleEditChange}
                                className="edit-input"
                                style={{ marginRight: '10px' }}
                            />
                            <input 
                                className='date'
                                type="datetime-local" 
                                value={taskDateTime}
                                onChange={ontimechange}
                                style={{ marginRight: '10px' }}
                            />
                            <button className='save-task' onClick={saveEdit}>Save</button>
                            <button className='cancel-task' onClick={cancelEdit}>Cancel</button>
                        </div>
                    ) : (
                        <>
                            <span className='text'>{task.text}</span>
                            <span style={{ marginLeft: '10px' }}>
                                (Due: {new Date(task.deadline).toLocaleString()})
                            </span>
                            {task.completed && (
                                <span style={{ 
                                    marginLeft: '10px',
                                    color: isCompletedOnTime(task) ? 'green' : 'red',
                                    fontWeight: 'bold'
                                }}>
                                    {isCompletedOnTime(task) 
                                        ? '✓ Completed On Time' 
                                        : '✗ Completed Late'}
                                </span>
                            )}
                            {!task.completed && (
                                <button 
                                    className='complete-task'
                                    onClick={() => completeTask(index)}
                                    style={{
                                        marginLeft: '10px',
                                        backgroundColor: '#4CAF50',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Complete
                                </button>
                            )}
                            <button className='delete-task' onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button className='edit-task' onClick={() => editTask(index)}>
                                Edit
                            </button>
                        </>
                    )}
                </li>
                )}
            </ol>

        </div>
    )
}

export default Todolist

