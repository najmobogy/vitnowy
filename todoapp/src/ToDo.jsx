import {useState} from "react";


const tasks = [
    {id:1, text:"zadanie 1"},
    {id:2, text:"zadanie 2"},
    {id:3, text:"zadanie 3"},
    {id:4, text:"zadanie 4"},
    {id:5, text:"zadanie 5"}



]




const ToDo = () => {
    const [todos, setToDos] = useState(tasks)


    const removeTaskHandler =(taskId) =>{
        console.log(todos)
    }

    return(
    <>
        <h1>Jestem z komponentu ToDo</h1>
        <ul> 
            {
                tasks.map( t => (
                    <li style={{color:"#ffc300", fontSize:"19px", marginBottom:"10px", backgroundColor:"#0000814"}} key={t.id}>
                       <span>{t.text}</span>
<button onClick={() => removeTaskHandler(t.id)}>usun zadanie    </button>
                    </li>
                ))
            }
        </ul>
    </>

    )



}


export default ToDo;