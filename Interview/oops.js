/*
🚀 Simple Class & Object in JavaScript
👉 Example: Student

> constructor is use to initialize data.  

> this = new object (s1)


const s1 = new Student("Mohan", 22);  jb ya linne chalta hai to object create hota hai 

s1 = {
  name: , 
  age: 
}   
like this and constructor yaha data initialize karata hai  ya sahi samjha hu ya galat

s1 = {
  name: "Mohan",
  age: 22
}

*/

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showDetails() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

const s1 = new Student("Mohan", 22);

// Method call karna
s1.showDetails();


/*
👉 Encapsulation = data ko hide karna + controlled access

👉 Matlab:
- Direct access ❌
- Method ke through access ✅

👉 Controlled Access:
- Getter → private data ko access karne ke liye
- Setter → private data ko update karne ke liye (with validation)
*/
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Invalid amount");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

acc.deposit(-500);   // Invalid amount
acc.deposit(1000);

console.log(acc.getBalance()); // 1000, it is right acessing through method. 
console.log(acc.balance); // direct acess not allowed

/*
🚀 What is Inheritance? (Simple)

👉 Inheritance = Parent class ke properties + methods ko child class use kare

👉 Matlab:

Ek class dusri class ka data reuse kare

👉 method override : same name of method in parent and child class, then child class override parent class method

👉 super keyword : parent class ke method ko call karne ke liye
*/

class Person {
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do some work");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("heal people");
    }
}

let shradhaObj = new Engineer();

// Super key word example

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    eat() {
        super.eat(); // parent method call
        console.log("Dog is eating");
    }
}

const d1 = new Dog();
d1.eat();

/*
Animal is eating
Dog is eating
*/

/*
🚀 1️⃣ Polymorphism (Same method, different behavior)

👉 Poly = many, morph = forms
*/

class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const d = new Dog();
const c = new Cat();

d.speak(); // Dog barks
c.speak(); // Cat meows

/*
👉 Abstraction = Hiding internal implementation and shows only essential features

👉 Matlab:
- Bahar se sirf important methods dikhenge
- Internal working hidden rahegi
*/
class Circle {
    area(radius) {
        return this.#calculateArea(radius);
    }

    #calculateArea(radius) {
        return 3.14 * radius * radius;
    }
}

const c1 = new Circle();

console.log(c1.area(5)); // 78.5
/*
c1.#calculateArea(5); // ❌ Error no direct access
*/

/*
🚀 What is Caching?

👉 Caching = data ko temporarily store karna taaki fast access mile
*/

let cache = {};

cache["name"] = "Mohan";

console.log(cache["name"]); // Mohan

let cache = {};

function square(num) {
    if (cache[num]) {
        console.log("From cache");
        return cache[num];
    }

    console.log("Calculating...");
    let result = num * num;

    cache[num] = result; // store in cache
    return result;
}

console.log(square(4)); // Calculating... 16
console.log(square(4)); // From cache 16 🚀
