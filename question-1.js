// Question #1: Inventory Management

let inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200
inventory.orange = { price: 20, quantity: 300 }
let totalValue = Object.values(inventory).reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log(`Total inventory value: ${totalValue} baht`);
