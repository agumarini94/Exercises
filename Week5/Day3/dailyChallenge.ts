    type User = {
        type: 'user';
        name: string;
        age: number;
    };

    type Product = {
        type: 'product';
        id: number;
        price: number;
    };

    type Order = {
        type: 'order';
        orderId: string;
        amount: number;
    };
    // type type = 'order' | 'product' | 'user';

    function handleData(myArray: (User | Product | Order)[]) {
        for (let item = 0; item < myArray.length; item++) {
            // @ts-ignore
            const item = myArray[i]; // --> This says to do chat gpt 
            if (myArray[item].type === 'user') {    
                console.log(`Holaa user ${myArray[item].name}`);
            }
            else if (myArray[item].type === 'product') {
                console.log(`the product id is ${myArray[item].id} and the price is ${myArray[item].price}`)
            }
            else {
                console.log(`order id ${myArray[item].orderId} , and the amount is ${myArray[item].amount}`);
            }
        }
    }

    let user1: User = {
        type: 'user',
        name: 'user1',
        age: 32
    }; 

    let product1: Product = {
        type: 'product',
        id: 11,
        price: 150
    };

    let order1: Order = {
        type: 'order',
        orderId: '11',
        amount: 149
    }
    handleData([user1, product1, order1]);