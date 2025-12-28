import { useState } from "react";

export const Phone = () => {
    const phone = {
        brand: "Samsung",
        model: "Galaxy S20",
        colorphone: "black",
        year: 2020
    };
    const [buttonColor, setButtonColor] = useState("blue");
    const ChangeColor = () => {
        setButtonColor(prev =>prev=== "blue"?"gray":"blue");
    }
    return (
        <div>
            <h1>{phone.brand}</h1>
            <p>It is a {phone.colorphone} {phone.model} from {phone.year}</p>
            <button onClick={ChangeColor} style={{ backgroundColor: buttonColor, color: "white" }}>Change Color</button>
        </div>
    );
};

