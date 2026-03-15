// ============================================
// 03 - TYPE INFERENCE
// ============================================

// TypeScript automatically infers types when you
// don't explicitly annotate them.

let x = 10;        // inferred as number
let y = "hello";   // inferred as string
let z = true;      // inferred as boolean

// x = "test";     // Error: Type 'string' is not assignable to type 'number'
// y = 42;         // Error: Type 'number' is not assignable to type 'string'


// --- Function return type inference ---

function add(a: number, b: number) {
    return a + b;   // return type inferred as number
}

let result = add(2, 3); // result is inferred as number


// --- Array inference ---

let arr = [1, 2, 3];          // inferred as number[]
let mixed = [1, "two", true]; // inferred as (string | number | boolean)[]


// --- Object inference ---

let person = {
    name: "Eshanth",  // inferred as string
    age: 21            // inferred as number
};

// person.name = 42;  // Error: Type 'number' is not assignable to type 'string'


// --- const inference ---

const greeting = "hello"; // inferred as literal type "hello", not string
let message = "hello";    // inferred as string (because let is reassignable)
export {};