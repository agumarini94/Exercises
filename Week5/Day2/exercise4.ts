// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
//     subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.
class Calculator {
    static a: number;
    static b: number; //--> only for the class 
    static suma() {return this.a + this.b }; 

    static subtract() { return this.a - this.b };
}

Calculator.a = 7;
Calculator.b = 32;
console.log(Calculator.suma());
console.log(Calculator.subtract());