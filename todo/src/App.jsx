import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const[editText,setEditText] =useState('')


  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem('todo'))
    if(arr){
      setTodo(arr)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])

  const handleAdd = () => {
    setTodo([...todo, { id: Date.now(), task: text , isChecked : false }]);
    setText("");
  };
  const handleDelete = (id) => {
    let arr = todo.filter((item) => item.id !== id);
    setTodo(arr);
  };
  const handleEdit = (id, task) => {
    setEditId(id)
    setEditText(task)

  };

  const handleEditSave = (id) => {
    setEditId(null)
    let arr = todo.map((item) => {
      if(item.id === id){
        item.task = editText
      }
      return item
    })
    setTodo(arr)
  }

  const handleChecked = (id) => {
    setTodo(
      todo.map((item => item.id === id ? {...item , isChecked:!item.isChecked} : item))
    )
  }
  return (
    <div className="flex justify-center flex-col items-center mt-20">
      <div>
        <input
          type="text"
          className="border py-2 px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
          <input type="checkbox" defaultChecked={item.isChecked}
          onChange={() => handleChecked(item.id)}
          />
            {" "}
            {editId === item.id ? <input type="text" className="border py-2 px-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            /> : <span style={{
              textDecoration: item.isChecked ? "line-through":''
            }}>{item.task} </span> }
            <button className="" onClick={() => handleDelete(item.id)}>
              delete
            </button>
            {editId === item.id ? (
              <button onClick={() => handleEditSave(item.id)}> ✅ </button>
            ) : (
              <button onClick={() => handleEdit(item.id, item.task)}>
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
