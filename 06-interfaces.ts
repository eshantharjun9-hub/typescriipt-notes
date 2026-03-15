// ============================================
// 06 - INTERFACES
// ============================================

// Defines the shape of an object.
// Similar to type aliases but can be extended and merged.


// --- Basic interface ---

interface User {
    name: string;
    age: number;
    email?: string;          // optional property
    readonly id: number;     // cannot be changed after creation
}

let user: User = { id: 1, name: "Eshanth", age: 21 };
// user.id = 2;  // Error: cannot assign to readonly


// --- Extending interfaces ---

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let dog: Dog = { name: "Max", breed: "Labrador" };


// --- Multiple extension ---

interface HasLegs {
    legs: number;
}

interface Pet extends Animal, HasLegs {
    owner: string;
}

let pet: Pet = { name: "Buddy", legs: 4, owner: "Eshanth" };


// --- Declaration merging ---
// Interfaces with the same name are automatically merged

interface Config {
    host: string;
}

interface Config {
    port: number;
}

// Config now has both host and port
let config: Config = { host: "localhost", port: 3000 };


// --- Interface for functions ---

interface SearchFunc {
    (source: string, term: string): boolean;
}

const search: SearchFunc = (source, term) => {
    return source.includes(term);
};


// --- Interface vs Type Alias ---
//
// | Feature              | Interface              | Type Alias        |
// |----------------------|------------------------|-------------------|
// | Extend               | extends keyword        | & intersection    |
// | Reopen/merge         | Yes                    | No                |
// | Primitives/Unions    | No                     | Yes               |
// | Use for objects      | Preferred              | Also works        |
export {};