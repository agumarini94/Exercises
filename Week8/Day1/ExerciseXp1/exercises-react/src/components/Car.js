import React, { useState } from "react";
import { Garage } from "./Garage";
export const Car = (props) => {
    const [color, setColor] = useState("green"); //color es el nombre de la variable, y uso setColor funcion para actualizar la variable de ese estado. 
    return (// aca va lo que muestra el html 
        <div>
            <p>This car is a {props.carinfo.model} {color}</p>
            <Garage size="small" />
            {/* Le paso a Garage, la prop -> size */}
        </div>

    );
}