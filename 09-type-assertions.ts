// ============================================
// 09 - TYPE ASSERTIONS
// ============================================

// Tell the compiler to treat a value as a specific type.
// Does NOT change the runtime value — only tells TypeScript
// how to treat it during compilation.


// --- "as" syntax (preferred) ---

let value: unknown = "hello world";
let len: number = (value as string).length;


// --- Angle bracket syntax (alternative) ---
// Does not work in .tsx files (React)

let len2: number = (<string>value).length;


// --- Common use case: DOM elements ---

const input = document.getElementById("name") as HTMLInputElement;
input.value = "Eshanth";

// Without assertion, TS only knows it's HTMLElement | null
// With assertion, TS knows it's HTMLInputElement (which has .value)


// --- Non-null assertion (!) ---
// Tells TS the value is definitely not null/undefined

const el = document.getElementById("app")!; // won't be null
el.innerHTML = "Hello";

// Use with caution — if it IS null, you get a runtime error


// --- const assertion ---
// Makes values deeply readonly and literal

let point = { x: 10, y: 20 } as const;
// point.x = 30;  // Error: cannot assign to readonly

let colors = ["red", "green", "blue"] as const;
// colors is now readonly ["red", "green", "blue"]
// not string[]


// --- Double assertion ---
// Force a type when TS complains (use rarely)

let num = "hello" as unknown as number;
// First assert to unknown, then to target type
// This is a code smell — avoid unless absolutely necessary
export {};
