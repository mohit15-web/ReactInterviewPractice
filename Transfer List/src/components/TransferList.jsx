import { useState } from "react"


const countryList = [
    {
        id: 1,
        name: "India",
        isCheked: false
    },
    {
        id: 2,
        name: "USA",
        isCheked: false
    },
    {
        id: 3,
        name: "UAE",
        isCheked: false
    },
    {
        id: 4,
        name: "Australia",
        isCheked: false
    },
    {
        id: 5,
        name: "Canada",
        isCheked: false
    },
]
function TransferList() {
    const[countries,setCountries] = useState(countryList)
    const[rightDiv,setRightDiv] = useState([])
    const handleCheck = (id) => {
        let newArr = countries.map((item) => item.id === id ? {...item,isCheked:!item.isCheked} : item )
        setCountries(newArr)
    }

    const handleCheckForRight = (id) => {
        let newArr = countries.map((item) => item.id === id ? {...item,isCheked:!item.isCheked} : item )
        setRightDiv(newArr)
    }

    const sendRight = () => {
        let updatedArr = countries.filter((item) => item.isCheked === true)
        let updatedArr2 = countries.filter((item) => item.isCheked === false)
        let temp = [...rightDiv, ...updatedArr]
        temp.forEach(element => {
            element.isCheked = false
        });
        setCountries(updatedArr2)
        setRightDiv(temp)
    }

    const sendLeft = () => {
        let updatedArr = rightDiv.filter((item) => item.isCheked === true)
        let updatedArr2 = rightDiv.filter((item) => item.isCheked === false)
        let temp = [...countries, ...updatedArr]
        setCountries(temp)
        setRightDiv(updatedArr2)
    }

    const sendRightAll = () => {
        let temp = []
        countries.forEach(ele => {
            temp.push(ele)
        });
        setRightDiv(temp)
        setCountries([])
    }

    const sendLeftAll = () => {
        let temp = []
        rightDiv.forEach(ele => {
            temp.push(ele)
        });
        setRightDiv([])
        setCountries(temp)
    }


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