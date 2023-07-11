import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md h-auto">
      <h1 className="text-xl font-bold capitalize truncate">{task.title}</h1>
      <p className="text-gray-500 text-sm overflow-hidden overflow-ellipsis h-16">
        {task.description}
      </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600 hover:text-zinc-200"
        onClick={() => {
          deleteTask(task.id);
        }}>
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
