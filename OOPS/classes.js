// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance.

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calcTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.05

const product1 = new Product("Shirt", 19.99);
const total1 = product1.calcTotal(salesTax)
const product2 = new Product("Pants", 22.50);
const total2 = product2.calcTotal(salesTax)
const product3 = new Product("Underwear", 100.00);
const total3 = product3.calcTotal(salesTax)

product1.displayProduct();
console.log(`Total price (inc tax): $${total1.toFixed(2)}\n\n`);
product2.displayProduct();
console.log(`Total price (inc tax): $${total2.toFixed(2)}\n\n`);
product3.displayProduct();
console.log(`Total price (inc tax): $${total3.toFixed(2)}\n\n`);

