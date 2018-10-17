// const fruits = ['apple', 'pear', 'cherry'];

// const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(capitalizedFruits);

//--------------------------------------------------------------------------------------------------//

// const prices = [5, 4.23, 6.4, 8.09, 3.20];

// const displayPrices = prices.map(price => `$${price.toFixed(2)}`);

// console.log(displayPrices);
//     // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
//--------------------------------------------------------------------------------------------------//

// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 47}
//   ];

// const usersObject = users.reduce((usersObject, user) => {
//     usersObject[user.name] = user.age;
//     return usersObject;
// }, {});
// console.log(usersObject);
//--------------------------------------------------------------------------------------------------//

// let userAge = users.map(user => `${user.name} is ${user.age} years old.`);
// console.log(userAge);

// let filteredUsers = users.filter(user => user.name !== 'Samir');
// console.log(filteredUsers);
//--------------------------------------------------------------------------------------------------//

// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
// const nameArray = userNames
//     .filter(name => name.charAt(0)==='S')
//     .map(name => ({name}));

//     console.log(nameArray);
//--------------------------------------------------------------------------------------------------//

// const products = [
//     { name: 'hard drive', price: 59.99 },
//     { name: 'lighbulbs', price: 2.59 },
//     { name: 'paper towels', price: 6.99 },
//     { name: 'flatscreen monitor', price: 159.99 },
//     { name: 'cable ties', price: 19.99 },
//     { name: 'ballpoint pens', price: 4.49 }
//   ];

// const totalPrice = products
//   .filter(product => product.price > 10)
//   .reduce((sum, product) => sum + product.price, 0).toFixed(2);
//       // Result: 239.97
// console.log(totalPrice);
//--------------------------------------------------------------------------------------------------//

//       const customers = [
//         {
//           name: "Tyrone",
//           personal: {
//             age: 33,
//             hobbies: ["Bicycling", "Camping"]
//           }
//         },
//         {
//           name: "Elizabeth",
//           personal: {
//             age: 25,
//             hobbies: ["Guitar", "Reading", "Gardening"]
//           }
//         },
//         {
//           name: "Penny",
//           personal: {
//             age: 36,
//             hobbies: ["Comics", "Chess", "Legos"]
//           }
//         }
//       ];
//       let hobbies;

//       // hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
//       // Write your code below

//       hobbies = customers
//         .map(customer => [...customer.personal.hobbies])
//         .reduce((arr, hobby) => [...arr, ...hobby], []);

// console.log(hobbies);

//--------------------------------------------------------------------------------------------------//

