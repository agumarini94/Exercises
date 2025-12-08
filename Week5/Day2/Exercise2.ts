
// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price.Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product{
    readonly id: number; 
    fname: string;
    price: number;

    constructor(id: number, fname: string, price: number) {
        this.id = id; 
        this.fname = fname;
        this.price = price;
    }
    getProductInfo(): string{
        return(`product name => ${this.fname} and the price => ${this.price}`)
    }
}
let product = new Product(1, 'Yerba', 500);
console.log(product.getProductInfo());

//Product.id = 4 --> Property 'id' does not exist on type 'typeof Product'.