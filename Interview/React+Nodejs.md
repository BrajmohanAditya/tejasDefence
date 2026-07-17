# RESTful API = A standard way of communicating between server and client using HTTP.

------------- .get() .post() .put() .delet() .use() .listen() .all() ------------------

> .get() : GET is used to fetch (retrieve) data from the server.

> .post(): POST is generally used to send data to the server.

# app.use()


>  it is use to attach a middleware at global level. express.json() is a middleware
> that parses all incoming request data into json format.

> it is also use for showing path to request.
> ex: app.use('/api/course', courseRoute)

> Ex: const app = express(), app.use(express.json()), app.use(cors());

# What is CORS() ?

> CORS() is a middleware in Express which is placed inside index.js file of backend. it specifies which frontend origins (domains or URLs) are permitted to communicate with the backend server.

# what is nodejs.

> Nodejs provide runtime environment to javascript.

# What is react?

> React is a JavaScript library used to build user interfaces .

# what are hooks in react ?

A Hook is a function that manage state(data) and other React features inside functional components.

> useState: it is use for remembering data .
> ex: const [isOpen, setIsOpen] = useState(true);

> useEffect: auto API calls, Timers, Event listeners.

> useEffect is use for doing extra work after rendering of page like baner change ho raha hai .

> Does useEffect run on page re-render?

> Haan, yeh dependency array pe depend karta hai:
>
> 1. `useEffect(() => {...})` (No array) -> Har re-render ke baad chalega.
> 2. `useEffect(() => {...}, [])` (Empty array) -> Sirf pehli baar (mount hone par) chalega. Re-render pe nahi chalega.
> 3. `useEffect(() => {...}, [data])` (With variables) -> Sirf tab chalega jab array ke variables (`data`) change honge.

# What is JWT?

JWT (JSON Web Token) is a secure way to authenticate users between client and server. Generally we store tocken in local storage.

It has 3 parts: Header, Payload (user data), Signature (security verification)

# What is callback function ?

> a function that is passed as an argument to another function.

> greet is a callback function

function greet(name) {
console.log("Hello " + name);
}

function processUser(callback) {
callback("Aditya");
}

processUser(greet);

# What is hoisting ?

Hoisting means JavaScript moves declarations to the top before running the code.

1️⃣ Function Hoisting Example:
sayHello();

function sayHello() {
console.log("Hello Mohan");
}

2️⃣ Variable Hoisting (var)
console.log(a);
var a = 10;

# What is SDLC?

SDLC stands for Software Development Life Cycle.

a) Requirement Analysis 2️⃣ Design 3️⃣ Development 4️⃣ Testing 5️⃣ Deployment 6️⃣ Maintenance

# What is Props Sending?

Props sending means passing data from parent to child in React.

# What is Prop Drilling?

> Prop drilling means passing props through many components,

# What is Memory Leak?

> when a program stop using memory but never releases it.

# What is Load Balancing?

Load balancing means sharing traffic among multiple servers so that no single server becomes overloaded.
> ek backend multiple server per host rahta hai . to traffic ko share krta hai . load balancing.


Users
  ↓
Load Balancer
  ↓
 ├─ Server A
 ├─ Server B
 └─ Server C

 
# What is Synchronous or single threaded?

> Sequential execution of task, Tasks run one after another, and each task waits for the previous one to finish.

# What is Asynchronous?

> A task does not block the next task. Long tasks run in the background.

# What is event loop ?
> Event Loop is a mechanism that make execution asynchronous operations such as await and setTimeout in JavaScript.

# What is promise?
A Promise is an object that handles asynchronous operations and represents a value that may be available in future.

# Blocking 
> The program waits until a task finishes, and no other code runs in the meantime.

# What is npm?
npm (Node Package Manager) is used to install JavaScript libraries and dependencies.

# What is middleware ?
Middleware is a function that runs between the request and the response.

# what is Schema ?
Schema controls how your data should look before it gets stored in the database.

# Monolithic Architecture
In monolithic architecture, usually there is one single database for the entire application, because everything is tightly coupled and runs as one unit.

Microservices architecture means breaking one big application into multiple small, independent services.

# What is memo?
In React, memo (React.memo) is used to prevent unnecessary re-rendering of a component.

# What is useMemo?
useMemo is used to memoize (cache) a value so it does not recalculate on every render.

# What is destructuring?

extract values from an object or array and store them in variables easily.

const user = { name: "Mohan", age: 25 };

const name = user.name;
const age = user.age;

# What is mongodb ?
NoSQL database storing data in BSON (JSON-like documents).



# Write code for map fucntion ?

const numbers = [1, 2, 3, 4];

const result = numbers.map(function(num) {
return num \* 2;
});

console.log(result);

# Redux ka REAL purpose ?

👉 Redux ka matlab:

Data ek baar lao → sab jagah use karo

# what is Kafka ?
it has high in and out operation, but it store data for temporary time.
so we need database for data storing. kafka seh data pick kr k bulk insert krta hai data base meh.

👉 Kafka acts as a middle system that connects producers and consumers, allowing multiple systems to communicate without directly depending on each other.

👉 HTTP creates tightly coupled synchronous communication, while Kafka enables loosely coupled asynchronous communication.

# what is axios ?
It is used to make HTTP requests (like GET, POST, PUT, DELETE) from the frontend (React) to the backend server (Node.js) to fetch or send data.



# Query execution flow in sql ?

1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. SELECT
7. ORDER BY
8. LIMIT

# Left Join ?

🧠 LEFT JOIN kya hota hai?

👉 LEFT JOIN = Left table ka sab data + right table ka matching data

👉 Agar right table me match nahi mila:
➡️ NULL aa jata hai

📊 Example Tables
👤 users
user_id name
1 Mohan
2 Ramesh
3 Sohan

🧠 user_skills
user_id skill
1 Java
1 SQL
2 Python

SELECT u.user_id, u.name, us.skill
FROM users u
LEFT JOIN user_skills us
ON u.user_id = us.user_id;

🎯 Final Output
user_id name skill
1 Mohan Java
1 Mohan SQL
2 Ramesh Python
3 Sohan NULL

# SQL Query

> Left join Query

SELECT column1, column2
FROM table1
LEFT JOIN table2
ON table1.common_column = table2.common_column;

> SELECT \* FROM table_name;


# setTimeout() function?

> setTimeout() is used to execute a function after a specific delay.

# How we do error handling ?
try...catch, 

# Difference Between == and === in JavaScript

✨ "==' (Loose Equality) vs '===' (Strict Equality)
console.log(5 == "5"); // true , it matches only value
console.log(5 === "5"); // false, it matches data type and value also.

# what is closer function in js.
calling inner function from outside of outer function .

function outer() {
  let name = "Mohan";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunc = outer();
myFunc();

# What is DOM?
DOM (Document Object Model) is a programming interface that represents an HTML page as a tree of objects.

<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Mohan</h1>
    <button>Click Me</button>
  </body>
</html>

Document
│
└── html
    │
    └── body
        │
        ├── h1
        │   └── "Hello Mohan"
        │
        └── button
            └── "Click Me"

> virtual DOM is the light version of DOM. 






### 3. What is "Prop Drilling" and how do you avoid it?
**Answer:** Prop drilling is the process of passing data from a parent component down to deeply nested child components through props, even if the components in between don't need that data. It makes code harder to maintain. You can avoid it using the **Context API** (for global state) or state management libraries like **Redux/Zustand**.


### 8. What is the difference between `require()` and `import()`?
**Answer:** 
- `require()`: It is synchronous and loads the entire module.
- `import()`: It can be asynchronous and import only specific parts of a module.

### 9. What are environment variables and how do you use them?
**Answer:** Environment variables are used to store sensitive information (like database URIs, API keys, and port numbers) outside the source code. in a `.env` file

### 10. How do you handle file uploads in Node.js?
**Answer:** Typically, I use a middleware like multer. 


### 12. How do you handle global errors in Express?
**Answer:** We create an error-handling middleware function that takes four arguments: `(err, req, res, next)`. We place it at the very end of all `app.use()` and route calls. If an error occurs anywhere, we pass it to `next(err)`, and this global handler catches it and sends a formatted response to the client.




# what is clustering in nodejs ?

Clustering ka matlab hai apne computer ke saare CPU cores ka poora fayda uthana by creating multiple copies of your Node.js app, taaki app fast aur stable chale.


# What is Buffer in Node.js?

A Buffer is a temporary memory area used to store binary data.

When data comes from:

File
Image
Video
Network request

Node.js stores it in a Buffer.

# What is Stream in Node.js?

A Stream is a way to process data piece by piece (chunk by chunk) instead of loading everything into memory at once.

Example

Suppose you have a 5 GB video file.


# What do we use for reading and writing files in Node.js?

Answer:

In Node.js, we use the File System (fs) module to read, write, update, delete, and manage files. It provides both synchronous and asynchronous methods such as fs.readFile() and fs.writeFile().

> Nested callback problems (callback hell) are usually solved using Promises and Async/Await.