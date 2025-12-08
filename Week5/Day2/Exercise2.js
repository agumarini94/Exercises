// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price.Attempt to modify the id property after creating a new instance of the class and observe the result.
var Product = /** @class */ (function () {
    function Product(id, fname, price) {
        this.id = id;
        this.fname = fname;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return ("product name => ".concat(this.fname, " and the price => ").concat(this.price));
    };
    return Product;
}());
var product = new Product(1, 'Yerba', 500);
console.log(product.getProductInfo());
Product.id = 4;
