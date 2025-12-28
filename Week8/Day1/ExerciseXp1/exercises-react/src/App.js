import './App.css';
import { Car } from './components/Car';
import { MyButton } from './components/Events';
import { Phone } from './components/Phone';
function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
    {/* DENTRO DE Car carinfo.. manda por props a Car.js el objeto carinfo */}
      <Car carinfo={carinfo} />
      <MyButton />
      <Phone />
    </div>
  );
}

export default App;
