import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';
import Profile from './Profile'
import Shop from './Shop'

//componentes funcionales
function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile Page</h1>;
}
function ShopScreen() {
  throw new Error('ACA MUESTRO UN ERROR APROPOSITO')
  return <h1>Shop Page</h1>
}

function App() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/Profile'> Profile </NavLink>
        <NavLink to='/Shop'> Shop </NavLink>
      </nav>

      <Routes>
          <Route path='/' element={
              <HomeScreen />
          } />
          <Route path='/Profile' element={
              <ProfileScreen />
          } />
          <Route path='/Shop' element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          } />
        </Routes>
        </div>
  );
}
export default App;
