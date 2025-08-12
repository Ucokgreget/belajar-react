import { useState } from 'react';
import style from './ToDoList.module.css'


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function handleAddTasks(){

        if(newTasks.trim() !== ""){
            setTasks((t) => [...t, newTasks])
            setNewTasks("")
        }
        

    }

    function handleRemoveTasks(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask)
    }

    function handleMoveUp(index){
        const updatedTask = [...tasks];

        if(index > 0){
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask)
        }

        
    }

    function handleMoveDown(index){

        const updatedTask = [...tasks];

        if(index < updatedTask.length - 1){
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]]
             setTasks(updatedTask)
        }

       


    }


    return(
        <div className={style.toDoList}>

            <div>
            <h1>To Do List</h1>
            <input 
            type="text" 
            onChange={handleInputChange} 
            value={newTasks} 
            placeholder='Enter a task'/>

            <button 
            className={style.addButton} 
            onClick={handleAddTasks}>
                Add
            </button>
            </div>

            <ol>
                {tasks.map((task,index)=>   <li 
                                            key={index} 
                                            >
                                            <span className={style.text}>{task}</span>

                                            <button 
                                            className={style.deleteButton} 
                                            onClick={() => handleRemoveTasks(index)}>
                                                Delete
                                            </button>

                                            <button 
                                            className={style.moveButton}
                                            onClick={() => handleMoveUp(index)}>
                                                ˄
                                            </button>

                                            <button 
                                            className= {style.moveButton} 
                                            onClick={() => handleMoveDown(index)}>
                                                ˅
                                            </button>
                                            </li>  
                                        )}
            </ol>
        </div>
        
    )

}


export default ToDoList;