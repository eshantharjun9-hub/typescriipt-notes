// ============================================
// 18 - MODULES
// ============================================

// TypeScript uses ES modules (import/export) to
// organize code into separate files.


// =====================
// --- EXPORTING ---
// =====================

// Named exports (multiple per file)
export const PI = 3.14;

export function add(a: number, b: number): number {
    return a + b;
}

export interface User {
    name: string;
    age: number;
}

// Default export (one per file)
export default class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}


// =====================
// --- IMPORTING ---
// =====================

// Named imports
// import { PI, add, User } from "./utils";

// Default import
// import Calculator from "./utils";

// Both together
// import Calculator, { PI, add } from "./utils";

// Rename on import
// import { add as sum } from "./utils";

// Import all as namespace
// import * as Utils from "./utils";
// Utils.PI
// Utils.add(2, 3)


// =====================
// --- RE-EXPORTING ---
// =====================

// Export everything from another module
// export * from "./utils";

// Export specific items
// export { add, PI } from "./utils";

// Export with rename
// export { add as sum } from "./utils";


// =====================
// --- TYPE-ONLY IMPORTS ---
// =====================

// Import only the type (stripped at compile time)
// import type { User } from "./utils";

// Inline type import
// import { type User, add } from "./utils";
