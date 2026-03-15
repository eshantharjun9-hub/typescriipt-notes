// ============================================
// 21 - keyof & typeof
// ============================================


// --- keyof ---
// Gets all property names of a type as a union of string literals

interface User {
    name: string;
    age: number;
    email: string;
}

type UserKeys = keyof User;  // "name" | "age" | "email"

let key: UserKeys = "name";  // OK
// key = "phone";            // Error: not a key of User


// --- typeof ---
// Gets the type of a runtime value

const config = { host: "localhost", port: 3000 };

type ConfigType = typeof config;
// { host: string; port: number }

let newConfig: ConfigType = { host: "example.com", port: 8080 };


// --- typeof with functions ---

function getUser() {
    return { name: "Eshanth", age: 21 };
}

type UserReturn = ReturnType<typeof getUser>;
// { name: string; age: number }


// --- keyof typeof (common combo) ---
// Get keys of a runtime object as a type

const roles = {
    admin: "ADMIN",
    user: "USER",
    guest: "GUEST"
};

type RoleKey = keyof typeof roles;  // "admin" | "user" | "guest"

function getRole(key: RoleKey): string {
    return roles[key];
}

getRole("admin");  // "ADMIN"
// getRole("superadmin");  // Error


// --- keyof with generics (type-safe property access) ---

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Eshanth", age: 21 };

getProperty(person, "name");  // type: string, value: "Eshanth"
getProperty(person, "age");   // type: number, value: 21
// getProperty(person, "email"); // Error: "email" not in keyof person


// --- typeof with enums ---

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

type StatusType = typeof Status;
// { Active: Status; Inactive: Status }

type StatusKeys = keyof typeof Status;
// "Active" | "Inactive"


// --- typeof with arrays and as const ---

const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number];
// "red" | "green" | "blue"
