# OBJECT ORIENTED PROGRAMMING

<!--
> OOP (Object-Oriented Programming) is a way of designing programs by dividing the program into
  classes and objects. class contains the common information of objects , and objects are specific
  instances (example) of these classes. This approach makes the program more modular, reusable, and easier to manage.

> class, object and constructor have  same  name.

> Class: Student ka common information( — name, roll number, DoB, etc.)

> Object: Actual student — Rahul Sharma, Anjali Verma

> A constructor in Java is a special method whose main work is to initialize an object when it is created.

* Four main piller of OOPS
1. Encapsulation, 2. Inheritance 3. Polymorphism  4. Abstraction





| Term                 | Description                                     |
| -------------------- | ----------------------------------------------- |
| **Class**            | Blueprint or template of an      object.             |
| **Object**           | Real-world entity / Instance of a class.        |
| **Constructor**      | Special method used to initialize object.       |
| **this keyword**     | Refers to current class object.                 |
| **super keyword**    | Refers to parent class object.                  |
| **Access Modifiers** | Define visibility (private, protected, public). |
| **Static keyword**   | Belongs to class rather than instance.          |

| Concept       | Definition                       | Example Keyword    |
| ------------- | -------------------------------- | ------------------ |
| Encapsulation | Data hiding                      | private/getter     |
| Inheritance   | Reuse code                       | extends            |
| Polymorphism  | Many forms (Overload/Override)   | overload/override  |
| Abstraction   | Hide details, show functionality | abstract/interface |


* Static members

Static members (fields and methods declared with the `static` keyword) belong to the class itself rather than to any particular instance. You can access static members using the class name without creating an object.

Example — non-static (instance) method:
```java
class Test {
    void show() {
        System.out.println("Hello");
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test(); // create an object
        t.show();            // call instance method via object
    }
}
```

Example — static method:
```java
class Test {
    static void show() {
        System.out.println("Hello");
    }
}

public class Main {
    public static void main(String[] args) {
        Test.show(); // call static method via class name (no object needed)
    }
}
```

Static fields are shared across all instances of a class. Example:
```java
class Student {
    String name;
    int roll;
    static String school;
}

public class P11_static {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Ram";
        Student.school = "DPS"; // set static field via class name

        Student s2 = new Student();
        System.out.println(s2.school); // prints "DPS"
    }
}
```

Notes:
- **Static**: shared by all objects of the class.
- **Non-static**: each object has its own copy.
* main(String[] args) → program ka entry point

// static keyword in java is used to share the same variable or method of a given class.

class student{
    String name;
    int roll;
    static String school;
}

public class P11_static {
    public static void main(String[] args) {
        student s1 = new student();
        s1.name = "ram";
        s1.school = "Dps";

        student s2 = new student();
        System.out.println(s2.school);
    }
}

// here we didnt defined s2 school still it will show dps bcg school is a static variable.
Static = Shared by all objects.
Non-static = Har object ka apna copy.
-->

# DATA STRUCTURE AND ALGORITHM (DSA)

> its a way of storing data in memory so we can perform our operation efficently.

| Type        | Example                  | Real-life Analogy                     |
| ----------- | ------------------------ | ------------------------------------- |
| Array       | [1,2,3,4]                | Train ke compartments                 |
| Stack       | push/pop                 | Plate stack (upar wali pehle niklegi) |
| Queue       | enqueue/dequeue          | Line me khade log                     |
| Linked List | nodes linked by pointers | Chain                                 |
| Tree        | parent-child             | Family tree                           |
| Graph       | nodes + edges            | Map of cities                         |
| HashMap     | key → value              | Dictionary                            |

<!-- 🧩 1. Array -->

Diagram:
Index: 0 1 2 3 4
Data : [10] [20] [30] [40] [50]

<!-- 🔗 2. Linked List (Singly) -->

Diagram:
[10 | *] → [20 | *] → [30 | *] → null
head -> [10 | next] -> [20 | next] -> null

Each node = data + pointer

Dynamic size

<!-- 🥞 3. Stack (LIFO – Last In, First Out) -->

Diagram:
Top → [30]
[20]
[10]

Notes:

Insert (push) and remove (pop) from top only.

Example: undo/redo, recursion calls.

Operations: push(), pop(), peek()

we create stack using ArrayList and LinkedList

<!-- 🚪 4. Queue (FIFO – First In, First Out) -->

Diagram:

Front -> [10] -> [20] -> [30] -> Rear

Notes:

Insert (add/enqueue) at rear, remove (poll/dequeue) from front

Example: printer queue, CPU scheduling

Operations: add(), remove(), peek()

Can implement using LinkedList, ArrayDeque

<!-- 🌳 6. Binary Tree -->

Diagram:

       1
     /   \
    2     3

/ \
4 5

Notes:

Each node = data + left + right

Levels, height, root, leaf nodes

Traversals: inorder, preorder, postorder, level-order

<!-- 🌲 7. Binary Search Tree (BST) -->

Diagram:

       50
      /  \
    30    70

/ \ / \
 20 40 60 80

Notes:

Left child < parent < Right child

Fast search, insert, delete → O(log n) avg

Used in dictionaries, sets

<!-- 🗝 8. HashMap (Key-Value) -->

Diagram (bucket view):

Index | Key -> Value
0 | null
1 | 1 -> "A"
2 | 2 -> "B"
3 | null

Notes:

Key-value storage

Hash function → bucket

Fast search O(1) average

Example: phonebook, caching

# Most confusing Concepts(Mislanious)

<!-- stud s1 = new stud("Rahul Sharma", 101, 1997); -->

class Stud { String name; int rollNumber; int DoB;}

> s1 = new stud(): creating empty object from class stud{}, and object picks their value from that particular class. and ush object ko s1 refer krta hai.
> // Heap Memory = s1

Stack (method ke andar)

| s1 | 0x1111 | ---> points to heap

(object created by new Stud())

| name : null
| rollNumber : 0
| DoB : 0
| (address) : 0x1111

---

> Q) Heap meh variable kaha seh aya ?
> ans) name, rollNumber, DoB → right side ke stud() class seh heap meh aaya. or java pic these variables from
> class stud{} and store in heap.

s1 ak variable hai jiska type stud hai.

The first Stud (before s1) : stud s1 (int s1)

The second Stud(...) (after the =) is a constructor call — it actually creates a new Stud object in the heap with the values you pass.

<!-- Queue<Info> q = new LinkedList<>(); -->

🧩 Ek LinkedList type ka object banao aur usse Queue ke tarah treat karo. and queue k ander variable Info class k ander seh aya.

[10 | next → ] → [20 | next → ] → [30 | next → null]

public class Main {

    public static class Info {
        int data;
        Info(int data) { this.data = data; }
    }

    public static void main(String[] args) {
      Queue<Info> q = new LinkedList<>();

      q.add(new Info(10));
      q.add(new Info(20));
      q.add(new Info(30));

      System.out.println(q.remove().data); // 10
      System.out.println(q.peek().data);   // 20
    }

}

🧩

<!-- ✅ HashMap<Integer, Node> map = new HashMap<>(); ka matlab hai — -->

Ek HashMap object heap mein create hua jisme key: integer aur value: Node object store hongi,
aur isko map reference variable point kar raha hai.

HashMap:
Key (Integer) Value (Node)
┌─────────────┬───────────────────┐
│ 10 │ Node@A (data=5) │
│ 20 │ Node@B (data=8) │
└─────────────┴───────────────────┘

<!-- List<Integer> res = new ArrayList<>(); -->

create a arrayList whose type is integer and it is stored at variable "res".
