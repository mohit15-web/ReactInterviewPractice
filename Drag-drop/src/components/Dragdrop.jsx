import { useState } from "react";

const headingArr = ["Todo", "Doing", "Done"];

function Dragdrop() {
  const [data, setData] = useState({});
  const [todo, setTodo] = useState([
    {
      id: 1,
      type: "Done",
      title: "Okay",
    },
    {
      id: 2,
      type: "Doing",
      title: "Demo",
    },
    {
      id: 3,
      type: "Todo",
      title: "hmmm",
    },
  ]);

  const setDrag = (e,item) => {
    e.preventDefault()
    setData(item)
  }

  const handleDrop =(e,title) => {
    e.preventDefault()
    setTodo(
      todo.map((item) => item.id === data.id ? {...item ,type:title } : item)
    )
  }

  return (
    <div className="flex justify-center items-center mt-10">
      {headingArr.map((title) => (
        <div key={title} className="p-4 border h-40 w-40"
        onDrop={(e) => handleDrop(e,title)}
        onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl font-bold py-2">{title} </h1>
          {todo
            .filter((item) => item.type === title)
            .map((item) => (
              <p key={item.id}
              draggable
              onDrag={(e) => setDrag(e,item)}
              > {item.title} </p>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Dragdrop;
