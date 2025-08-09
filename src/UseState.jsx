import { useState } from "react"


function UseState(){
    const [name, setName] = useState();
    const [inputValue, setInputValue] = useState();

    const handleUserInput = (e) => {
        setInputValue(e.target.value)
    }

    const updateName = () => {
        setName(inputValue)
    };

    return(
        <div>
            <input type="text"
            value={inputValue}
            onChange={handleUserInput}
            placeholder="Masukkan Nama"  />
            <p>Name: {name}</p>
            <button onClick={updateName} className="button-klik">Set Name</button>
        </div>
    )

}

export default UseState