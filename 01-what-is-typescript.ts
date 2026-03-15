// ============================================
// 01 - WHAT IS TYPESCRIPT?
// ============================================

// TypeScript is a statically-typed superset of JavaScript
// developed by Microsoft. It compiles down to plain JavaScript
// and adds optional type annotations, interfaces, generics,
// and other features.

// --- JavaScript (no types) ---
// let name = "Eshanth";

// --- TypeScript (with types) ---
let userName: string = "Eshanth";

// TypeScript catches errors at compile time, not runtime
let age: number = 21;
// age = "twenty one";  // Error: Type 'string' is not assignable to type 'number'

// To compile: tsc filename.ts
// To run:     node filename.js

// Install TypeScript globally:
// npm install -g typescript

// Check version:
// tsc --version
export {};