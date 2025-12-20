// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSON Placeholder API to fetch data for all posts.
const axios = require('axios'); 
// const data = axios();

async function fetchPosts() { // funcion para recibir los datos , uso async para esperar promesas await.
    try {
        //await axios.. detiene la ejecucuin hasta que axios traiga los datos, si no el codigo se sigue ejecutando y asi no tendria ningun dato xq el response demora un poco mas... 
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //jsonplace.. es una pagina random para obtener post data 
        return response.data;
    } catch (error) {
        console.log('Something wrong getting the data users', error);
        return []; //devuelvo un array vacio para quein llame a la funcion no se rompa,, no entendi bien para q es.
        
    }
}
//exportar la funcion : 
module.exports = fetchPosts;
