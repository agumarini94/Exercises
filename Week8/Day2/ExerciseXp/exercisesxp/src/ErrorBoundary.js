import React from "react";
class ErrorBundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    componentDidCatch(error, info) {
        //actualizo el estado con el error. 
        this.setState({ error });
        //muestro el detalle en la consola
        console.log("error capturado por error bundary", error)
    }
    render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>THE COMPUTER HAS BEEN HACKED BY ISRAEL</h2>
                    <p>{this.state.error.toString()}</p>
                </div>
            );
        }
        //si no hay ningun error muestro normalmente
        return this.props.children;
    }
}


export default ErrorBundary;