// ============================================
// 14 - UTILITY TYPES
// ============================================

// Built-in types that transform other types.

interface User {
    name: string;
    age: number;
    email: string;
}


// --- Partial<T> ---
// Makes all properties optional

type PartialUser = Partial<User>;
// { name?: string; age?: number; email?: string }

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}


// --- Required<T> ---
// Makes all properties required

interface Config {
    host?: string;
    port?: number;
}

type RequiredConfig = Required<Config>;
// { host: string; port: number }


// --- Readonly<T> ---
// Makes all properties readonly

type ReadonlyUser = Readonly<User>;

let user: ReadonlyUser = { name: "Eshanth", age: 21, email: "e@e.com" };
// user.name = "New";  // Error: readonly


// --- Pick<T, Keys> ---
// Select specific properties

type UserName = Pick<User, "name" | "email">;
// { name: string; email: string }


// --- Omit<T, Keys> ---
// Exclude specific properties

type UserWithoutEmail = Omit<User, "email">;
// { name: string; age: number }


// --- Record<Keys, Type> ---
// Define key-value pair types

type Roles = Record<string, boolean>;
let permissions: Roles = { admin: true, user: false };

type UserMap = Record<number, User>;
let users: UserMap = {
    1: { name: "Eshanth", age: 21, email: "e@e.com" }
};


// --- Exclude<Union, Excluded> ---
// Remove types from a union

type AllTypes = string | number | boolean;
type StringOrNumber = Exclude<AllTypes, boolean>;
// string | number


// --- Extract<Union, Extracted> ---
// Keep only matching types from a union

type OnlyStrings = Extract<AllTypes, string>;
// string


// --- NonNullable<T> ---
// Remove null and undefined

type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// string


// --- ReturnType<T> ---
// Get return type of a function

function getUser() {
    return { name: "Eshanth", age: 21 };
}

type UserReturn = ReturnType<typeof getUser>;
// { name: string; age: number }


// --- Parameters<T> ---
// Get parameter types of a function as a tuple

function createUser(name: string, age: number): User {
    return { name, age, email: "" };
}

type CreateUserParams = Parameters<typeof createUser>;
// [string, number]


// --- Awaited<T> ---
// Unwrap the type inside a Promise

type PromiseString = Promise<string>;
type Resolved = Awaited<PromiseString>;
// string
