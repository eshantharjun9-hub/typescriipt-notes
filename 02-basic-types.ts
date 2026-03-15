// ============================================
// 02 - BASIC TYPES
// ============================================

// --- Primitive Types ---

let isDone: boolean = false;
let age: number = 21;
let username: string = "Eshanth";
let nothing: null = null;
let notDefined: undefined = undefined;


// --- Array ---
// Two ways to define arrays

let nums: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b", "c"];


// --- Tuple ---
// Fixed-length array with specific types per position

let user: [string, number] = ["Eshanth", 21];
// user = [21, "Eshanth"];  // Error: wrong order


// --- Enum ---
// A set of named constants

enum Direction {
    Up,       // 0
    Down,     // 1
    Left,     // 2
    Right     // 3
}

let move: Direction = Direction.Up;

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let c: Color = Color.Red; // "RED"


// --- Any ---
// Disables type checking. Avoid when possible.

let data: any = 42;
data = "hello";
data = true;
// No errors — but you lose all type safety


// --- Unknown ---
// Safer version of any. Must narrow the type before using.

let value: unknown = "hello";

if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK after narrowing
}
// console.log(value.toUpperCase());  // Error without narrowing


// --- Void ---
// Function that returns nothing

function log(msg: string): void {
    console.log(msg);
}


// --- Never ---
// Function that never returns (throws or infinite loop)

function throwError(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {}
}
export {};