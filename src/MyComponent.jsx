import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("")
    

    const handleName = (e) => {
        setName(() => e.target.value)
    }

    const handleAge = (e) => {
        setAge(() => e.target.value)
    }

    const handleComment = (e) => {
        setComment(() => e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(() => e.target.value)
    }

    const handleShipping = (e) => {
        setShipping(() => e.target.value)
    }

    



    return(
        <div>
            <input type="text" value={name} onChange={handleName} />
            <p>Nama: {name}</p>

            <input type="number" value={age} onChange={handleAge} /> 
            <p>Umur: {age}</p>   

            <textarea name="commnt" id="" value={comment} onChange={handleComment}></textarea>   
            <p>Comment: {comment}</p>  

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Gopay">Gopay</option>
                <option value="Dana">Dana</option>
                <option value="QRIS">QRIS</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShipping}
                />
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShipping}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyComponent