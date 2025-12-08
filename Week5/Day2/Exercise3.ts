
class Animal {
    name: string = 'Unkonwn'; //unkonwn crea un nombre desconocido para name

    makeSound(): string {
        return ('sonido random');
    }
}
class Dog extends Animal{
    makeSound(): string {
        return ('Bark = guau');
    }
}

let dog = new Dog(); //para crear una nueva instancia, uso NEW, en este caso es una instancia de Dog. 
console.log(dog.makeSound()); 