// ============================================
// 07 - FUNCTIONS
// ============================================


// --- Typed parameters and return ---

function add(a: number, b: number): number {
    return a + b;
}


// --- Optional parameters ---
// Use ? to make a parameter optional (must come after required params)

function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}`;
}

greet("Eshanth");             // "Hello, Eshanth"
greet("Eshanth", "Welcome");  // "Welcome, Eshanth"


// --- Default parameters ---

function power(base: number, exp: number = 2): number {
    return base ** exp;
}

power(3);     // 9    (3^2)
power(3, 3);  // 27   (3^3)


// --- Rest parameters ---

function sum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10


// --- Arrow functions ---

const multiply = (a: number, b: number): number => a * b;

const square = (n: number): number => n * n;


// --- Function types ---
// Define a type for a function signature

type MathFn = (a: number, b: number) => number;

const subtract: MathFn = (a, b) => a - b;
const divide: MathFn = (a, b) => a / b;


// --- Function overloads ---
// Multiple signatures for the same function

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

format("hello"); // "HELLO"
format(3.14159); // "3.14"


// --- Callback functions ---

function fetchData(callback: (data: string) => void): void {
    const data = "some data";
    callback(data);
}

fetchData((data) => {
    console.log(data);
});
