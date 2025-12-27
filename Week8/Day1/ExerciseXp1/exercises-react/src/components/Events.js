import React, { useState } from "react";

export const MyButton = () => {//recorda poner la funcion en mayuscula ! 
    const clickMe = () => {
        alert('You click me!')
    };
    return (
        <button onClick={clickMe}> You click me here </button>
    );
};

