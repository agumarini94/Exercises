//4) In shop.js, require the product objects from the products.js module.
const objProducts = require('./products.js'); //i get the array from the another file 

const searchProduct = (product) => { //i do the function.. product is my parameted 
    const found = objProducts.find(items => items.name.toLowerCase() === product.toLowerCase());
    //found is my variable where i keep if i found the item.. 
    //-item is my element of the array, and name is name in the objects. 
    // => , es lo que la funcion devuelve. 
    if (found) {
        console.log('find product ', found);
    }
    else {
        console.log('producto not found it')
    }
}
// ANOTHER METHOD TO MAKE THE FUNCTION *** ==> 
// function searchProduct(product) {
//     for (let i = 0; i < objProducts.length; i++){
//         if (objProducts[i].name === product) {
//             console.log('find product', objProducts[i]);
//             return; // para salir del bucle cunando encuentra el obj
//         }
//     }
//     console.log('product not found it');

// }
// searchProduct('telephone');
searchProduct('Ball');
searchProduct('Thermus') //Not found it . 
