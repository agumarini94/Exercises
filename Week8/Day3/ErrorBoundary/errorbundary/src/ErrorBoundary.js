import React from 'react';
class ErrorBundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(error, info);
    }
    render() {
        if (!this.state.hasError) {
            return (<h1>Hubo un error</h1>);
        }
        <p>No hubo errores</p>;
        
    }
}

export default ErrorBundary; 