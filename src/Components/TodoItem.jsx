import styles from "./todoItem.module.css"

export default function TodoItem({item, todos,setTodos}){
    function handleDelete(item){
        console.log("delete button clicked", item);
        setTodos( todos.filter((todo)=>todo !==item));
    }
    function handleClick(name){
      //used ternary operator
      setTodos(todos.map((todo)=>todo.name===name? {...todo,done:!todo.done}:todo));
      
    }
     const anu = item.done ? styles.completed:""

    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={anu} onClick={()=> handleClick(item.name)}>{item.name}</span>
            <span>
               <button  onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button>
            </span>
        </div>
        
        <hr className={styles.line}/>
    </div>
    
}