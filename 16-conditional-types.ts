// ============================================
// 16 - CONDITIONAL TYPES
// ============================================

// Types that depend on a condition.
// Syntax: T extends U ? TrueType : FalseType


// --- Basic conditional type ---

type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;   // "yes"
type B = IsString<number>;   // "no"


// --- Practical example ---

type IsArray<T> = T extends any[] ? "array" : "not array";

type C = IsArray<string[]>;  // "array"
type D = IsArray<number>;    // "not array"


// --- Extract element type from array ---

type ElementType<T> = T extends (infer U)[] ? U : never;

type E = ElementType<string[]>;   // string
type F = ElementType<number[]>;   // number
type G = ElementType<boolean>;    // never


// --- infer keyword ---
// Extract a type from within another type

type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

type H = ReturnOf<() => string>;           // string
type I = ReturnOf<(x: number) => boolean>; // boolean
type J = ReturnOf<string>;                 // never


// --- Unwrap Promise ---

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type K = UnwrapPromise<Promise<string>>;   // string
type L = UnwrapPromise<number>;            // number


// --- Distributive conditional types ---
// When T is a union, the condition is applied to each member

type ToArray<T> = T extends any ? T[] : never;

type M = ToArray<string | number>;
// string[] | number[]  (NOT (string | number)[])


// --- Prevent distribution with [] ---

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type N = ToArrayNonDist<string | number>;
// (string | number)[]
