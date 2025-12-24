import React from 'react'; 


class UserFavoriteAnimals extends React.Component { //crea una clase componente 
    render() { //render metodo obligatorio en los componentes de clase 
        return (
            <div>
                <h2>My favorite Animal</h2>
                <ul>
                    {this.props.favAnimals.map((animal, index) => {
                        return  <li key={index}>{animal}</li> //
                    })}
                </ul>
            </div>
        );
    }
}
export default UserFavoriteAnimals;

//EXPLICACIONES PARA MI  <---$ 
//{this.props.favAnimals.map((animal, index) => {
//favAnimals es un array, contiene [horse,turtle,cat..etc], esto se pasa al prop como componente hijo. 
//{this.props.favAnimals.map --> recorre cada elemento del array. 
//animal --> es cada elemento del array.
//index --> es la posicion del elemento en el array. 
//<li key={index} -->   key ayuda a React a identificar cada elemento único al actualizar la lista

