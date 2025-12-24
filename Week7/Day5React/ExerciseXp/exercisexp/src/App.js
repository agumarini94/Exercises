import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercise3';
function App() {
  const myElement = <h1>I loveJSX</h1>
  const sum = 5 + 5;
  //exercise 2 
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey', 'Burro'],
  };
  return (
    <div className="App">
      <div>{myElement} </div>
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </div>
  );
  };
  


export default App;
