import { useState } from "react"

function UpdateArray(){
    
    const [fruits, setFruits] = useState(["Apple", "Mango", "Banana"])

    const handleAddFruit = (e) => {
        const inputFruits = document.getElementById("input-fruits").value;
        document.getElementById("input-fruits").value = "";

        setFruits(f => [...f, inputFruits]);
    }

    function handleRemoveFruit(index) {
        setFruits(fruits.filter((_, i) => i !== index))
    }
    


    return(
        <div>
            <h1>List of Fruits</h1>

            <ul>
                {fruits.map((fruit,index) => 
                <li key={index} 
                onClick={() => handleRemoveFruit(index)}>
                {fruit}</li>)}
            </ul>

            <input type="text" id="input-fruits"/>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    )


}

export default UpdateArray