// ============================================
// 10 - LITERAL TYPES
// ============================================

// Restricts a variable to specific exact values.


// --- String literal types ---

type Direction = "up" | "down" | "left" | "right";

let dir: Direction = "up";
// dir = "diagonal";  // Error: not in the union


// --- Numeric literal types ---

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll = 3;
// roll = 7;  // Error


// --- Boolean literal types ---

type True = true;
let val: True = true;
// val = false;  // Error


// --- Literal types in functions ---

function setAlignment(align: "left" | "center" | "right"): void {
    console.log(`Alignment set to: ${align}`);
}

setAlignment("center"); // OK
// setAlignment("top"); // Error


// --- Literal types with objects ---
// Use 'as const' to infer literal types from objects

const config = {
    method: "GET" as const,
    url: "/api/users"
};

// config.method is now type "GET", not string


// --- Combining with other types ---

type Status = "loading" | "success" | "error";
type StatusCode = 200 | 404 | 500;

type ApiResponse = {
    status: Status;
    code: StatusCode;
    data: unknown;
};

let response: ApiResponse = {
    status: "success",
    code: 200,
    data: { name: "Eshanth" }
};
