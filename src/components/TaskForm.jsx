import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4 rounded-lg"
        onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tarea</h1>
        <input
          className="bg-white p-3 w-full mb-2 rounded-md"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-white p-3 w-full mb-2 rounded-md"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}></textarea>
        <button className="bg-indigo-500 text-slate-200 px-3 py-1 rounded-full hover:bg-indigo-700">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
