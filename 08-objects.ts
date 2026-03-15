// ============================================
// 08 - OBJECTS
// ============================================


// --- Inline object type ---

function printUser(user: { name: string; age: number }): void {
    console.log(`${user.name} is ${user.age}`);
}

printUser({ name: "Eshanth", age: 21 });


// --- Optional properties ---

function createUser(config: { name: string; age?: number }): void {
    console.log(config.name);
    console.log(config.age ?? "not provided");
}

createUser({ name: "Eshanth" });
createUser({ name: "Eshanth", age: 21 });


// --- Readonly properties ---

let user: { readonly id: number; name: string } = {
    id: 1,
    name: "Eshanth"
};

user.name = "Updated";  // OK
// user.id = 2;          // Error: cannot assign to readonly


// --- Index signatures ---
// When you don't know property names ahead of time

interface StringMap {
    [key: string]: string;
}

let colors: StringMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};


// --- Nested objects ---

interface Address {
    street: string;
    city: string;
    country: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}

let person: Person = {
    name: "Eshanth",
    age: 21,
    address: {
        street: "123 Main St",
        city: "Vijayawada",
        country: "India"
    }
};
export {};