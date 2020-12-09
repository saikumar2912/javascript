//let bike = ['tvs ', 'honda ', 'hero ', 'yamaha '];
//console.log(bike);

//bike.sort();
//console.log(bike);

//bike.shift();
//console.log(bike);
//bike.splice(2, 0, 'lemon', 'kiwi');
//console.log(bike);

//for (let i = 0; i < bike.length; i++) {
//console.log(bike[i]);
//}

//function myfunction() {
//bike.splice(0, 1);
//console.log(bike);
//}
let person = ["John",
    "Doe", 50, "blue"
];
//console.log(person.firstName + ' is ' + person.age);

let a = ['a', 2, 3, 4];
let b = [5, 6, 7, 8];
const [a1, b1, ...rest] = person;
console.log(a1, b1, ...rest) == person;
console.log(a + b);