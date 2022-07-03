const input = require('sync-input');

const initialSupplies = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550 };

let coffee = [ { water: -250, milk: 0, beans: -16, cups: -1, money: 4 },
    { water: -350, milk: -75, beans: -20, cups: -1, money: 7 },
    { water: -200, milk: -100, beans: -12, cups: -1, money: 6 } ];

let action = input('Write action (buy, fill, take, remaining, exit): ');

while(action !== 'exit') {
    if (action === 'buy') {
        let buy = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ');
        if (buy === 'back') return;
        for (coffee in initialSupplies) {
            if (initialSupplies[coffee] >= Math.abs(coffee[buy - 1][coffee])) {
                initialSupplies[coffee] += coffee[buy - 1][coffee];
            } else {
                return console.log(`Sorry, not enough ${initialSupplies[coffee]}`)
            }
        }
        console.log(`I have enough resources, making you a coffee!`);
    }
    if (action === 'fill') {
        initialSupplies['water'] += Number(input('Write how many ml of water you want to add: '));
        initialSupplies['milk'] += Number(input('Write how many ml of milk you want to add: '));
        initialSupplies['beans'] += Number(input('Write how many grams of coffee beans you want to add: '));
        initialSupplies['cups'] += Number(input('Write how many disposable coffee cups you want to add: '));
    }
    if (action === 'take') {
        console.log(`I gave you $${initialSupplies['money']}`);
    }
    if (action === 'remaining') {
        console.log(`
        The coffee machine has:
        ${initialSupplies['water']} ml of water
        ${initialSupplies['milk']} ml of milk
        ${initialSupplies['beans']} g of coffee beans
        ${initialSupplies['cups']} disposable cups
        $${initialSupplies['money']} of money`);
    }
    action = input('Write action (buy, fill, take, remaining, exit): ');
}



