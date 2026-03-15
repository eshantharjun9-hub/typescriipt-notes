// ============================================
// 04 - UNION & INTERSECTION TYPES
// ============================================


// --- Union (|) ---
// Value can be one of multiple types

let id: string | number;
id = "abc";
id = 123;
// id = true;  // Error: boolean not in the union

function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId("hello"); // HELLO
printId(42);      // 42


// --- Union with arrays ---

let data: (string | number)[] = [1, "two", 3, "four"];


// --- Intersection (&) ---
// Combines multiple types into one. The result must have ALL properties.

type Person = { name: string };
type Employee = { company: string };

type Staff = Person & Employee;

let worker: Staff = {
    name: "Eshanth",
    company: "Google"
};
// Must have both name AND company


// --- Intersection with interfaces ---

interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

interface HasEmail {
    email: string;
}

type FullUser = HasName & HasAge & HasEmail;

let user: FullUser = {
    name: "Eshanth",
    age: 21,
    email: "eshanth@example.com"
};
export {};