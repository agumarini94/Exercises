// type type = 'order' | 'product' | 'user';
function handleData(myArray) {
    for (var item = 0; item < myArray.length; item++) {
        // @ts-ignore
        var item_1 = myArray[i]; // --> This says to do chat gpt 
        if (myArray[item_1].type === 'user') {
            console.log("Holaa user ".concat(myArray[item_1].name));
        }
        else if (myArray[item_1].type === 'product') {
            console.log("the product id is ".concat(myArray[item_1].id, " and the price is ").concat(myArray[item_1].price));
        }
        else {
            console.log("order id ".concat(myArray[item_1].orderId, " , and the amount is ").concat(myArray[item_1].amount));
        }
    }
}
var user1 = {
    type: 'user',
    name: 'user1',
    age: 32
};
var product1 = {
    type: 'product',
    id: 11,
    price: 150
};
var order1 = {
    type: 'order',
    orderId: '11',
    amount: 149
};
handleData([user1, product1, order1]);
