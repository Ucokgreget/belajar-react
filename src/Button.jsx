import React, {useState} from 'react';

function Button(){

    const [clicked, setClicked] = useState();

    
    const handleClick = () => {
        setClicked(!clicked)
    }


    return(
        <button className="button-klik" onClick={handleClick}>{clicked ? "Woi 😡" : "Klik Aku 😁"}</button>
    )

}

export default Button