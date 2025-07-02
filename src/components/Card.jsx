const Card=(props) =>{
  const handleComplete =() =>{
  props.onDeleteTask(props.task.task_id)
  }
    return(
    <div className="card">
           <p>
            {
              props.task.task_name
            }
           </p>
           <button onClick ={handleComplete}>Complete
           </button>
          </div>
          )
}
export default Card;