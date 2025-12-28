import React from 'react';
import ErrorBundary from './ErrorBoundary';
class BuggyCounter extends React.Component{
  constructor(props) { //el constructor se ejecuta cuando se crea el componente 
    super(props);//llamo al constructor de react
    this.state = { //define el estado inicial del componente
      counter: 0
    };
  }
  handleClick = () => { //la funcion se ejecuta cada vez que el usuario hace click
    this.setState({ //state actualiza el estado del componente
      counter: this.state.counter + 1
    });
  };
  render() { //define que se muestra en pantalla
    if (this.state.counter === 5) {
      throw new Error('YOUR COMPUTER HAS BEEN HACKED');
    }
    return (
      <h1 onClick={this.handleClick}>{this.state.counter}</h1>

      )
    };    
};

function App() {
  return (
    <div>
      <ErrorBundary >
        <BuggyCounter />
      </ErrorBundary> 
    </div>
  );
}

export default App; 