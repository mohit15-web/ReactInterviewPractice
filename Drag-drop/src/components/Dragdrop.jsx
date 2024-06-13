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

  const onDrag = (e, item) => {
    e.preventDefault();
    setData(item);
  };

  const onDrop = (e, category) => {
    e.preventDefault();
    setTodo(
      todo.map((item) =>
        item.id === data.id ? { ...item, type: category } : item
      )
    );
    setData({});
  };

  return (
    <div className="flex justify-center mt-40 space-x-8">
      {headingArr.map((title) => (
        <div
          key={title}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, title)}
          className="w-60 p-4 border border-gray-200 rounded-lg"
        >
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          {todo
            .filter((item) => item.type === title)
            .map((item) => (
              <p
                key={item.id}
                draggable
                onDrag={(e) => onDrag(e, item)}
                className="w-full flex justify-between rounded-lg px-6 py-4 cursor-pointer shadow-xl mb-2"
              >
                {item.title}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Dragdrop;
