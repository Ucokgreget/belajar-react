import { useState } from "react";

function UpdateArrayObject(){

    const [cars, setCars] = useState([]);
    const [newMake, setNewMake] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newYear, setNewYear] = useState(new Date().getFullYear())
    
    function handleAddCars(){

        const newCar = {make:newMake,
                        model: newModel,
                        year:newYear}

        setCars((c) => [...c, newCar])

        setNewMake("")
        setNewModel("")
        setNewYear(new Date().getFullYear())
    }

    function handleRemoveCars(index){
        setCars(cars.filter((_, i) => i !== index))


    }

    function handleMakeCars(e){
        setNewMake(e.target.value)

    }

    function handleModelCars(event){
        setNewModel(event.target.value)


    }

    function handleYearCars(event){
        setNewYear(event.target.value)
    }

    return(
        <div>
            <h2>List of cars</h2>
            <ul>
                {cars.map((car,index) =>  <li key={index} 
                                            onClick={() => handleRemoveCars(index)}>
                                            {car.make} {car.model} {car.year}</li>)}
            </ul>

            <input type="text" value={newMake} onChange={handleMakeCars}/>
            <input type="text" value={newModel} onChange={handleModelCars}/>
            <input type="number" value={newYear} onChange={handleYearCars} /><br />
            <button onClick={handleAddCars}>Add Car</button>
        </div>

    )

}

export default UpdateArrayObject;