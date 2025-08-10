import { useState } from "react"

function UpdateObject() {

    const [car, setCar] = useState({year:2025,
                                    make:"Honda", 
                                    model:"Civic"})  
    
    const handleCarYear = (e) => {
        setCar(c => ({...c, year:e.target.value}))
        
    }    
    
    const handleCarMake = (e) => {
        setCar(c => ({...c, make:e.target.value}))
        
    } 

    const handleCarModel = (e) => {
        setCar(c => ({...c, model:e.target.value}))
        
    } 

    return(
        <div>
            <p>Mobil mu adalah: {car.make} {car.model} tahun {car.year} </p>

            <label>Merek: </label><br />
            <input type="text" onChange={handleCarMake}/><br />

            <label htmlFor="">Model: </label><br />
            <input type="text" onChange={handleCarModel}/><br />

            <label htmlFor="">Tahun: </label><br />
            <input type="number" onChange={handleCarYear}/>
        </div>
    )
}

export default UpdateObject

