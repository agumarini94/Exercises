// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string.Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes(“bark”).Create an instance of the Dog class and call the makeSound method.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'Unkonwn';
    }
    Animal.prototype.makeSound = function () {
        return ('sonido random');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return ('Bark = guau');
    };
    return Dog;
}(Animal));
var dog = new Dog(); //para crear una nueva instancia, uso NEW, en este caso es una instancia de Dog. 
console.log(dog.makeSound());
