import './App.css';
import { Car } from './components/Car';
import { MyButton } from './components/Events';
import { Phone } from './components/Phone';
import { Color } from './components/Color';
function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
    {/* DENTRO DE Car carinfo.. manda por props a Car.js el objeto carinfo */}
      <Car carinfo={carinfo} />
      <MyButton />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
