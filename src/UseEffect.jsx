import { useState, useEffect } from "react";

function UseEffect(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event added")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event removed")
        }
    },[])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    })
    

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

   

    return(
        <div>
            <p>width: {width}</p>
            height: {height}
        </div>
    )


}

export default UseEffect;