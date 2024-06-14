import { useState } from "react";

function App() {
  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  let grid = [];

  for (let r = 0; r < row; r++) {
    let temp = []
    for (let c = 0; c < column; c++) {
      temp.push(<div className="p-4 border m-2" key={`row-${r} col-${c}`} > {`${r + c}`} </div>);
    }
    grid.push(
      <div key={`row-${r}`} className="flex">
        {temp}
      </div>
    )
  }
  console.log(grid);
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex gap-4">
        <h1>
          {" "}
          Row :{row} <input type="range"
          onChange={(e) => setRow(e.target.value)}
          max={'10'}
          
          />
        </h1>
        <h1>
          {" "}
          Column :{column} <input type="range"
          max={'14'}
          onChange={(e) => setColumn(e.target.value)}
          />
        </h1>
      </div>
     <div className="mt-10"> {grid}</div>

     <p contentEditable='true'>hi i am mohit my name is editable</p>
    </div>
  );
}

export default App;
