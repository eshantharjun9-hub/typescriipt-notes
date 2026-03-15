// ============================================
// 15 - MAPPED TYPES
// ============================================

// Create new types by transforming properties of existing types.
// Syntax: { [K in keyof T]: NewType }


// --- Basic mapped type ---

type Optional<T> = {
    [K in keyof T]?: T[K];
};

type ReadonlyAll<T> = {
    readonly [K in keyof T]: T[K];
};

interface Config {
    host: string;
    port: number;
}

type OptionalConfig = Optional<Config>;
// { host?: string; port?: number }

type ReadonlyConfig = ReadonlyAll<Config>;
// { readonly host: string; readonly port: number }


// --- Mapped type with transformation ---

type Stringify<T> = {
    [K in keyof T]: string;
};

interface User {
    name: string;
    age: number;
    active: boolean;
}

type StringUser = Stringify<User>;
// { name: string; age: string; active: string }


// --- Mapped type with key remapping (TS 4.1+) ---
// Use 'as' to rename keys

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number; getActive: () => boolean }


// --- Removing properties with mapped types ---

type RemoveReadonly<T> = {
    -readonly [K in keyof T]: T[K];
};

type MakeRequired<T> = {
    [K in keyof T]-?: T[K];
};

// The - prefix removes the modifier (readonly or ?)


// --- Conditional mapped types ---

type NullableStrings<T> = {
    [K in keyof T]: T[K] extends string ? T[K] | null : T[K];
};

type Result = NullableStrings<User>;
// { name: string | null; age: number; active: boolean }
