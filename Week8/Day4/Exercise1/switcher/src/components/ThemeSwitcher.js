import React, {useState} from "react";

function ThemreSwitcher() {
    const [theme, setTheme] = useState('light');  //theme es mi valor, /setTheme es el que lo actualiza,
    const changeColor = () => {
        setTheme(colorPrevio => (colorPrevio ==="light"? "dark":"light"));
    }//la funcion toma el color anterior, y lo invierte. 

    const styles = { //cambia el fondo y las letras. 
        backgroundColor: theme === "light" ? "white" : "black", 
        //si el fondo es blanco, sale por true en white, sino false black
        color: theme === "light" ? "black" : "white", //
        padding: "20px",
        marginTop: "60px",
        textAlign: "center",
        fontSize: "56px",
        // centra el texto horizontalmente
        borderRadius: "10px",
        // esquinas redondeadas
        boxShadow: theme === "light"
            ? "0 4px 8px rgba(0,0,0,0.1)"
            : "0 4px 8px rgba(255,255,255,0.1)",
        // sombra ligera, cambia según el tema
        transition: "all 0.3s ease",
        // suaviza la transición al cambiar de color o fondo
    }; //cambia el fondo a negro o blanco, y las letras.
    //css para el boton 
    const buttonStyles = {
        padding: "10px 20px",
        fontSize: "56px",
        cursor: "pointer",
        border: "none",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#222" : "#f0f0f0",
        color: theme === "light" ? "#fff" : "#222",
        transition: "all 0.3s ease", // transición suave
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
    };
    const buttonHover = {
        filter: "brightness(1.2)"
    };


    return (
        <div style={styles}>
            <p>THEMRE ACTUAL: {theme}</p>
            <button style={buttonStyles} onClick={changeColor} onMouseOver={e => (e.currentTarget.style.filter = "brightness(1.2)")}
            onMouseOut={e => (e.currentTarget.style.filter = "brightness(1)")}
      >
                Change theme {theme === "light" ? "dark" : "light"}
            </button>
        </div>
    );
}

export default ThemreSwitcher;

