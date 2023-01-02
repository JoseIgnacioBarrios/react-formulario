import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, settitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({title,descripcion});
    settitle('')
    setDescripcion('')
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          autoFocus
        />
        <br />
        <textarea
          placeholder="Nueva descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <br />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default TaskForm;
