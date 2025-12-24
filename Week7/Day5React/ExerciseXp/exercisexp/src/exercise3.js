import React from "react";
import './exercise.css'; 
class Exercise extends React.Component { 
    render() { //poner esto siempre ! 
        return (
            <div>
            <h1>Welcome to tijuana</h1>
                <p>
                    <a href="https://www.google.com">Ir a Google</a>
                </p>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Apellido:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Edad:
                        <input type="text" name="name" />
                    </label>
                </form>
            </div>
        );

    }
}

export default Exercise; 