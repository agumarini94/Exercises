import { useEffect, useState } from "react";

export const Color = () => { //defino el componente Color
    //creo la variable de estado, favoritecolor. / y la funcion setfavcolor, para actualizar el valor. El valor inicial es red
    const [FavoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert('useEffect reacher');
    }, []);
    
    const changeColorToBlue = () => {
        setFavoriteColor("blue");
    };
    return (
        <div>
            <h1 style={{ color: FavoriteColor }}>My favorite Color is {FavoriteColor}</h1>
            <h2>My favorite color is {useEffect} </h2>
            <button onClick={changeColorToBlue}>Change color</button>
        </div>
    );
}

//Note: The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”