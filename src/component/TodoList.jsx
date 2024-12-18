import React, { useState } from 'react';
import  style from '../styles/Todolist.module.css'
import { BiEditAlt } from "react-icons/bi";
import { ImMoveUp } from "react-icons/im";
import { ImMoveDown } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import Btn from './Btn';
import Form from './Form';

const TodoList = () => {
  let [task, settask] = useState(['on my way to china', 'Back to abuja'])
  let [newTask, setNewTask] = useState ("")
  let [isEditing, setisEditing] = useState (false) 
  let [isEditingValue, setisEditingValue] = useState ("") 
  let [isEditingIndex, setisEditingIndex] = useState (null) 

  
  function handleNewTask (e){
    setNewTask(e.target.value)
  } 

  function handleInput (e){
    e.preventDefault() // prevent form submission
    if(newTask.trim()){
      settask(g=>[...g, newTask])
      setNewTask("")
    } // prevent adding empty tasks
  }

  function editTask(index){
      setisEditing(true)
      setisEditingIndex(index)
      setisEditingValue(task[index])
  }
 
  function moveUpTask(index){
    if(index === 0) return;
    settask( d => {
      let moveupTask = [...d]; 
      //swapping the element from each other
      [moveupTask[index -1], moveupTask[index]] = [moveupTask[index], moveupTask[index -1]];
      return moveupTask;
    } );
  }
  function moveDownTask(index){
    if(index === task.length -1) return;
    settask( d => {
      let moveupTask = [...d]; 
      //swapping the element from each other
      [moveupTask[index +1], moveupTask[index]] = [moveupTask[index], moveupTask[index +1]];
      return moveupTask;
    } ); 
  }

  function deleteTask(index){
    settask(d => d.filter((task, i) => i !== index))
  }

  /* function saveTask(index){
      let lastestTask = [...task]
     /*  lastestTask {isEditingIndex} = isEditingValue 
      settask[lastestTask]
  } */
  
  return (
    <div className={style.Todolist_wrapper}>
      <h2 className={style.todo_name}>MY TODOS</h2>
      
      <form action="" className={style.form}>
        <Form taskname= {newTask} event={handleNewTask} placeholder="Enter your wish"/> 
        {/* <button onClick={handleInput} className={style.addbtn}>Add Task</button> */}
        <Btn click={handleInput}  text= "Add Task" buttonName ="addbtn"/> 
      </form> 

      <ol className={style.taskbox} >{task.map((task, index) => (
       <li className={style.tasklist} key={index}>
        {/* {isEditing && isEditingIndex === index}
          <div>
            <Form taskname={isEditingValue} event={HandleEditChange} placeholder="" />
            <Btn click={saveTask} text="Save Edit"/>
            <button onClick={saveTask}>Save Edit</button>
          </div>  */}

         <span>{task}</span>
         <Btn click={() => deleteTask(index)}  text= {<RiDeleteBin6Line />} buttonName ='Deletebtn'/> 
         <Btn click={() => moveDownTask(index)}  text= {<ImMoveDown />} buttonName ='MoveDownbtn'/> 
         <Btn click={() => moveUpTask(index)} text={ <ImMoveUp />} buttonName = "MoveUpbtn"/>
         <Btn click={() => editTask(index)} text={<BiEditAlt />} buttonName="editbtn"/>
       </li>
        ))
        }
      </ol>
        
    </div>
  )
}

export default TodoList