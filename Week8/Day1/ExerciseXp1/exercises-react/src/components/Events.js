import React, { useState } from "react";

export const MyButton = () => {//recorda poner la funcion en mayuscula ! 
    const clickMe = () => {
        alert('You click me!')
    };

    const HandleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert("you write " + event.target.value);
        }
    };

    const [isTogglleOn, setIsToggleOn] = useState(true);
        const handleClick = () => {
            setIsToggleOn(!isTogglleOn);
    };
    return (
        <div>
        <button onClick={clickMe}> You click me here </button>
        <input type="text" onKeyDown={HandleKeyDown}></input>
        <button onClick={handleClick}>{isTogglleOn ? "ON" : "OFF"}</button>    
        </div>
    );
};
