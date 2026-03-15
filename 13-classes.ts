// ============================================
// 13 - CLASSES
// ============================================


// --- Basic class ---

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi, I'm ${this.name}`;
    }
}

const p = new Person("Eshanth", 21);


// --- Access modifiers ---
// public    — accessible everywhere (default)
// private   — accessible only inside the class
// protected — accessible inside class + subclasses
// readonly  — cannot be modified after initialization

class Employee {
    public name: string;
    private salary: number;
    protected dept: string;
    readonly id: number;

    constructor(name: string, salary: number, dept: string, id: number) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
        this.id = id;
    }

    getSalary(): number {
        return this.salary; // OK — inside the class
    }
}

const emp = new Employee("Eshanth", 50000, "Engineering", 1);
// emp.salary;  // Error: private
// emp.dept;    // Error: protected
// emp.id = 2;  // Error: readonly


// --- Shorthand constructor ---
// Automatically creates and assigns properties

class User {
    constructor(
        public name: string,
        private age: number,
        readonly id: number
    ) {}
}

const user = new User("Eshanth", 21, 1);


// --- Inheritance ---

class Animal {
    constructor(public name: string) {}

    speak(): string {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // call parent constructor
    }

    speak(): string {
        return `${this.name} barks`;
    }
}

const dog = new Dog("Max", "Labrador");
dog.speak(); // "Max barks"


// --- Abstract classes ---
// Cannot be instantiated, must be extended

abstract class Shape {
    abstract area(): number; // must be implemented by subclass

    describe(): string {
        return `Area is ${this.area()}`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

// const s = new Shape();  // Error: cannot instantiate abstract class
const c = new Circle(5);
c.area();     // 78.54
c.describe(); // "Area is 78.539..."


// --- Implementing interfaces ---

interface Printable {
    print(): void;
}

interface Loggable {
    log(msg: string): void;
}

class Report implements Printable, Loggable {
    print(): void {
        console.log("Printing report...");
    }

    log(msg: string): void {
        console.log(`LOG: ${msg}`);
    }
}


// --- Getters and setters ---

class BankAccount {
    private _balance: number = 0;

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount < 0) throw new Error("Cannot be negative");
        this._balance = amount;
    }
}

const acc = new BankAccount();
acc.balance = 100;     // uses setter
console.log(acc.balance); // uses getter — 100


// --- Static members ---
// Belong to the class itself, not instances

class MathHelper {
    static PI = 3.14159;

    static square(n: number): number {
        return n * n;
    }
}

MathHelper.PI;          // 3.14159
MathHelper.square(5);   // 25
