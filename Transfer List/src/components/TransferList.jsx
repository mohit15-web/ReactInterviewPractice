import { useState } from "react"


const countryList = [
    {
        id: 1,
        name: "India",
        isChecked: false
    },
    {
        id: 2,
        name: "USA",
        isChecked: false
    },
    {
        id: 3,
        name: "UAE",
        isChecked: false
    },
    {
        id: 4,
        name: "Australia",
        isChecked: false
    },
    {
        id: 5,
        name: "Canada",
        isChecked: false
    },
]
function TransferList() {
    const [countries, setCountries] = useState(countryList);
    const [rightDiv, setRightDiv] = useState([]);
  
    const handleCheck = (id) => {
      setCountries(countries.map((item) => item.id === id ? { ...item, isChecked: !item.isChecked } : item));
    };
  
    const handleCheckForRight = (id) => {
      setRightDiv(rightDiv.map((item) => item.id === id ? { ...item, isChecked: !item.isChecked } : item));
    };
  
    const sendRight = () => {
      const selectedItems = countries.filter((item) => item.isChecked);
      const remainingItems = countries.filter((item) => !item.isChecked);
      setCountries(remainingItems);
      setRightDiv([...rightDiv, ...selectedItems.map((item) => ({ ...item, isChecked: false }))]);
    };
  
    const sendLeft = () => {
      const selectedItems = rightDiv.filter((item) => item.isChecked);
      const remainingItems = rightDiv.filter((item) => !item.isChecked);
      setRightDiv(remainingItems);
      setCountries([...countries, ...selectedItems.map((item) => ({ ...item, isChecked: false }))]);
    };
  
    const sendRightAll = () => {
      setRightDiv([...rightDiv, ...countries.map((item) => ({ ...item, isChecked: false }))]);
      setCountries([]);
    };
  
    const sendLeftAll = () => {
      setCountries([...countries, ...rightDiv.map((item) => ({ ...item, isChecked: false }))]);
      setRightDiv([]);
    };


    console.log(countries,"country");
    console.log(rightDiv , 'right div');
  return (
    <div className="flex justify-center items-center flex-col" >
        <h1>TransferList</h1>
        <div className="flex gap-8 border p-10">
            {/* left div  */}
            <div className="border p-10 h-60 w-60">
                <ul>
                    {countries.map((country) => (
                        <li key={country.id}>
                            <input type="checkbox"
                            onChange={() => handleCheck(country.id)}
                            />
                            {country.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* buttons  */}
            <div className="flex flex-col ">
                <button
                onClick={sendRightAll}
                > {">>"}</button>
                <button
                onClick={sendRight}
                > {">"}</button>
                <button
                onClick={sendLeft}
                > {"<"} </button>
                <button
                onClick={sendLeftAll}
                > {"<<"} </button>
            </div>

            {/* right div  */}
            <div className="border p-10 h-60 w-60">
                    <ul>
                        {rightDiv.map((item) => (
                            <li key={item.id}><input type="checkbox" 
                            onChange={() => handleCheckForRight(item.id)}
                            /> {item.name} </li>
                        ))}
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default TransferList