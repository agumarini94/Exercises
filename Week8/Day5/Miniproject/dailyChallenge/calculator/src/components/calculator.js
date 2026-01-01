import React, { useState, useEffect } from "react"

function DoSuma() {
    const [valor1, setValor1] = useState('Ingrese number1'); //valor1 guarda el valor, setSuma es quien actualiza .
    const [valor2, setValor2] = useState('Ingrese number2'); //en donde va el numero empezaria con ese text
    const [resultado, setResultado] = useState(null); // aca guardo el resultado 
    const calculateSuma = () => setResultado(Number(valor1) + Number(valor2)); //convierto a numeros la suma
       
    
    const calculateResta = () => setResultado(Number(valor1) - Number(valor2));
            
        
    const calculateMulti = () => setResultado(Number(valor1) * Number(valor2));

    const calculatePromedio = () => setResultado((Number(valor1) + Number(valor2)) / 2);

    const calculateDiv = () => { // ------> Aca im doing division <---- 
        if (Number(valor2) === 0) {
            setResultado("Not possible / for 0")
        } else {
            setResultado(Number(valor1) / Number(valor2));
        }
    }// ----> hasta aca , end /  <---*

    const calculateResto = () => { // ------> Here im doing resto 
        if (Number(valor2) === 0) {
            setResultado("Not possible % for 0")
        } else {
            setResultado(Number(valor1) % Number(valor2));
        } //-----> Hasta aca, end % <---*
    }

    //<-----* FIN FUNCTION DOSUMA() -----* 
    
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                minHeight: "100vh",   // Ocupa toda la pantalla
                display: "flex",       // Para centrar la calculadora
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "320px",
                    backgroundColor: "#111", // fondo más oscuro dentro del contenedor
                }}
            >
                <input
                    type="number"
                    value={valor1}
                    onChange={(e) => setValor1(e.target.value)}
                    placeholder="Number1"
                    style={{
                        width: "80%",
                        padding: "10px",
                        margin: "10px 0",
                        fontSize: "18px",
                        borderRadius: "5px",
                        border: "1px solid white",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                    }}
                />
                <input
                    type="number"
                    value={valor2}
                    onChange={(e) => setValor2(e.target.value)}
                    placeholder="Number2"
                    style={{
                        width: "80%",
                        padding: "10px",
                        margin: "10px 0",
                        fontSize: "18px",
                        borderRadius: "5px",
                        border: "1px solid white",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                    }}
                />

                <div
                    style={{
                        margin: "20px 0",
                        display: "flex",      // activamos flexbox
                        flexWrap: "wrap",     // los botones se acomodan en varias filas si hace falta
                        justifyContent: "center", // centramos los botones
                        gap: "5px",           // espacio entre botones
                    }}
                >
                    <button
                        onClick={calculateSuma}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Suma +
                    </button>
                    <button
                        onClick={calculateResta}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Resta -
                    </button>
                    <button
                        onClick={calculateMulti}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Multi *
                    </button>
                    <button
                        onClick={calculateDiv}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Division /
                    </button>
                    <button
                        onClick={calculateResto}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Resto %
                    </button>
                    <button
                        onClick={calculatePromedio}
                        style={{
                            padding: "15px 20px",
                            fontSize: "18px",
                            width: "120px",
                            height: "50px",
                            borderRadius: "0px",
                            border: "1px solid white",
                            backgroundColor: "gray",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Promedio
                    </button>
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        border: "2px solid white",
                        borderRadius: "5px",
                        fontSize: "28px",
                        backgroundColor: "#222",
                        color: "lime",
                        fontWeight: "bold",
                        minHeight: "50px",
                    }}
                >
                    {resultado !== null ? resultado : "Resultado"}
                </div>
            </div>
        </div>
    );
};

// onChange toma el valor del input, e, y lo pasa a setValor1 .. 



export default DoSuma;