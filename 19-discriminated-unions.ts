// ============================================
// 19 - DISCRIMINATED UNIONS
// ============================================

// A pattern where each type in a union has a common
// literal property (the "discriminant") that TypeScript
// can use to narrow the type automatically.


// --- Basic discriminated union ---

type Success = { status: "success"; data: string };
type ErrorRes = { status: "error"; message: string };
type Loading = { status: "loading" };

type Response = Success | ErrorRes | Loading;

function handle(res: Response): void {
    switch (res.status) {
        case "success":
            console.log(res.data);      // TS knows it's Success
            break;
        case "error":
            console.log(res.message);   // TS knows it's ErrorRes
            break;
        case "loading":
            console.log("Loading...");  // TS knows it's Loading
            break;
    }
}


// --- Shape example ---

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}


// --- Exhaustiveness checking with never ---
// Ensures all cases are handled

function assertNever(x: never): never {
    throw new Error(`Unexpected value: ${x}`);
}

function describeShape(shape: Shape): string {
    switch (shape.kind) {
        case "circle":
            return "A circle";
        case "square":
            return "A square";
        case "triangle":
            return "A triangle";
        default:
            return assertNever(shape);
            // If you add a new shape to the union but forget
            // to handle it here, TS will throw a compile error
    }
}
