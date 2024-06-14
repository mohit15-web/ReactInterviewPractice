import { useState } from "react";

const obj = [
  {
    id: 1,
    name: "Item 1",
    desc: "Description for Item 1",
    show: false,
  },
  {
    id: 2,
    name: "Item 2",
    desc: "Description for Item 2",
    show: false,
  },
  {
    id: 3,
    name: "Item 3",
    desc: "Description for Item 3",
    show: false,
  },
  {
    id: 4,
    name: "Item 4",
    desc: "Description for Item 4",
    show: false,
  },
  {
    id: 5,
    name: "Item 5",
    desc: "Description for Item 5",
    show: false,
  },
];

function Accordian() {
  // let [show,setShow] = useState(false)
  const [items, setItems] = useState(obj);
  const showAccordian = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };
  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      <h1 className="text-3xl font-semibold mb-4">Accordian</h1>
      <div>
        {items.map((item) => (
          <div key={item.id} className=" rounded-lg shadow-xl my-2 px-6 py-2 w-96">
            <div
              className="flex justify-between"
            >
              <h1>{item.name}</h1>
              {!item.show ? <span
              className="cursor-pointer"
              onClick={() => showAccordian(item.id)}
              >➕</span> : <span
              onClick={() => showAccordian(item.id)}
              className="cursor-pointer"

              >➖</span>}
            </div>
            {item.show ? <p>{item.desc} </p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
