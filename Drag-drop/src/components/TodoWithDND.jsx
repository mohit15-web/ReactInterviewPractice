import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Task 1", status: "todo" },
  { id: 2, title: "Task 2", status: "todo" },
  { id: 3, title: "Task 3", status: "in-progress" },
  { id: 4, title: "Task 4", status: "done" },
];

const statuses = ["todo", "in-progress", "done"];

function TodoWithDND() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);
  const [name, setName] = useState("");

  const onDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === draggedTask.id ? { ...task, status } : task
      )
    );
    setDraggedTask(null);
  };

  const handleAdd = () => {
    let arr = [...tasks, { id: Date.now(), title: name, status: "todo" }];
    console.log(arr);
    setTasks(arr);
    setName("");
  };

  const handleDelete = (id) => {
    setTasks(
        tasks.filter((item) => item.id !== id )
    )
  }

  return (
    <div className="App flex-col gap-8">
      <div className="flex">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="task" onClick={handleAdd}>
          Add todo
        </button>
      </div>
      <div className="container">
        {statuses.map((status) => (
          <div
            key={status}
            className="status-column"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, status)}
          >
            <h2>{status?.toUpperCase()}</h2>
            <div className="tasks">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="task"
                    draggable
                    onDragStart={(e) => onDragStart(e, task)}
                  >
                    {task.title} <button className="ml-16"
                    onClick={() => handleDelete(task.id)}
                    >❌</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWithDND;
