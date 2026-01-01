import React, { useState } from "react";
import quotes from "../QuotesDatabase";

function DisplayImage() {
    const quotesArray = Object.values(quotes); // cambiar el objeto a array

    const [quoteToShow, setQuote] = useState(quotesArray[0]); // muestra la primera quote

    const ChangeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        setQuote(quotesArray[randomIndex]);
    };

    // función para generar color aleatorio
    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    const [colorRandom, setColor] = useState(randomColor);

    const styles = {
        backgroundColor: colorRandom,
        minHeight: "100vh", // para que cubra toda la pantalla
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    // fade del div
    const [fade, setFade] = useState(false);

    const quoteBoxStyle = {
        backgroundColor: "white",
        width: "80%",
        maxWidth: "600px",
        height: "300px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        position: "relative",
        transition: "opacity 0.5s ease",
        opacity: fade ? 0 : 1
    };

    const h1Style = {
        fontSize: "2.5rem",
        textAlign: "center",
        margin: 0
    };

    const pStyle = {
        alignSelf: "flex-end",
        margin: 0,
        fontSize: "1.125rem",
        fontWeight: "bold"
    };

    // función para cambiar el color de fondo
    const changeColor = () => {
        setColor(randomColor());
    };

    // función que hace fade + cambia quote y color
    const changeQuoteColor = () => {
        setFade(true);
        setTimeout(() => {
            ChangeQuote();
            changeColor();
            setFade(false);
        }, 300);
    };

    return (
        <div style={styles}>
            <div style={quoteBoxStyle}>
                <h1 style={h1Style}>{quoteToShow.quote}</h1>
                <p style={pStyle}>{quoteToShow.author}</p>
                <button onClick={changeQuoteColor}>Change Quote</button>
            </div>
        </div>
    );
}

export default DisplayImage;
