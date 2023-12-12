// Poorly organized and unreadable JavaScript code

var a = 10, b = 20, c = 30, d = 40, e = 50;

function x(y, z) { return y + z; }

if (a > b && c < d || e === 50) {
  console.log("Condition satisfied");
  console.log("The sum is: " + x(a, b));
} else {
  console.log("Condition not satisfied");
}

for (let i = 0; i < 10; i++) { console.log(i * 2); }

function calculateAverage(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) { sum += numbers[i]; }
  return sum / numbers.length;
}

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var average = calculateAverage(numbersArray);
console.log("The average is: " + average);

function processData(data) {
  if (data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === 'number') {
          console.log(key + ": " + data[key]);
        }
      }
    }
  }
}

var sampleData = { a: 10, b: 20, c: 30, d: 40 };
processData(sampleData);


var a = 'abc', b = 'def', c = 'ghi', d = 'jkl', e = 'mno';

function x(y, z) { return y + z; }

var f = (a === 'abc' && b !== 'def') ? (c + d) : (e === 'mno' ? (x(a, b) + x(c, d)) : '');

for (var i = 0; i < 10; i++) {
  f = f.split('').reverse().join('') + i;
}

var g = '';
for (var j = 0; j < f.length; j++) {
  g += String.fromCharCode(f.charCodeAt(j) + 1);
}

console.log(g);


// Example of good code practices

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input should be a non-empty array of numbers.');
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function processUserData(users) {
  if (!Array.isArray(users)) {
    throw new Error('Input should be an array of User objects.');
  }

  for (const user of users) {
    console.log(user.getDetails());
  }
}

const users = [
  new User('Alice', 28),
  new User('Bob', 35),
  new User('Charlie', 22),
];

try {
  const ages = users.map(user => user.age);
  const averageAge = calculateAverage(ages);
  console.log(`Average age: ${averageAge}`);

  processUserData(users);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// Example of bad code practices

const u = [{n:"flag",a:0+1},{n:"at",a:2+5},{n:"line",a:3+3}];

function avg(a){if(!Array.isArray(a)||a.length===0)throw new Error('Invalid input.');return a.reduce((s,n)=>s+n,0)/a.length;}

function pr(d){if(!Array.isArray(d))throw new Error('Invalid data.');d.forEach(e=>console.log(e.n+' is '+e.a+' years old.'));}

try {
  const ag = u.map(e=>e.a);
  console.log(`Average age: ${avg(ag)}`);
  pr(u);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
