import { useState } from "react";
import { useEffect } from "react";
const Input=(props)=>{
    const [enteredTask, setEnteredTask]= useState("");
    const [disableButton, setDisableButton] = useState(false);
    const handleChange=(e) =>{
      
        console.log(e.target.value);
          setEnteredTask(e.target.value);
    };
    const handleSubmit=(event) =>{
        event.preventDefault();
        props.onAddTask(enteredTask);
        setEnteredTask("");

    }
    useEffect(() =>{
    if(enteredTask.length<3){
        setDisableButton(true);
    }
    else{
                setDisableButton(false);

    }
    },[enteredTask]);
     return ( 
     <form id="add-task" onSubmit={handleSubmit}>
          <input 
          placeholder="enter task"
          onChange={handleChange}
          value={enteredTask}
          />
          <button className="add-task-button"
          disabled={disableButton}>Add task</button>
          </form>)
}
export default Input;