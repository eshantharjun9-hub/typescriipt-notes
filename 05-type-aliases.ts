// ============================================
// 05 - TYPE ALIASES
// ============================================

// A custom name for a type using the 'type' keyword.
// Makes code cleaner and reusable.


// --- Basic type alias ---

type ID = string | number;

let userId: ID = 101;
let orderId: ID = "ORD-123";


// --- Object type alias ---

type Point = {
    x: number;
    y: number;
};

let p: Point = { x: 10, y: 20 };


// --- Function type alias ---

type MathFn = (a: number, b: number) => number;

const add: MathFn = (a, b) => a + b;
const subtract: MathFn = (a, b) => a - b;


// --- Complex type alias ---

type User = {
    id: ID;
    name: string;
    age: number;
    email?: string;           // optional
    readonly createdAt: Date; // cannot be modified
};

let user: User = {
    id: 1,
    name: "Eshanth",
    age: 21,
    createdAt: new Date()
};


// --- Combining type aliases ---

type Address = {
    street: string;
    city: string;
    country: string;
};

type UserWithAddress = User & { address: Address };

let fullUser: UserWithAddress = {
    id: 1,
    name: "Eshanth",
    age: 21,
    createdAt: new Date(),
    address: {
        street: "123 Main St",
        city: "Vijayawada",
        country: "India"
    }
};
export {};