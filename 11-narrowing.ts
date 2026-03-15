// ============================================
// 11 - NARROWING (TYPE GUARDS)
// ============================================

// Narrowing is the process of refining a type to a
// more specific type within a code block.


// --- typeof ---

function print(val: string | number): void {
    if (typeof val === "string") {
        console.log(val.toUpperCase());   // TS knows it's string
    } else {
        console.log(val.toFixed(2));      // TS knows it's number
    }
}


// --- instanceof ---

class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function speak(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();   // TS knows it's Dog
    } else {
        animal.meow();   // TS knows it's Cat
    }
}


// --- "in" operator ---
// Checks if a property exists in an object

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird): void {
    if ("swim" in animal) {
        animal.swim();   // TS knows it's Fish
    } else {
        animal.fly();    // TS knows it's Bird
    }
}


// --- Truthiness narrowing ---

function printName(name: string | null): void {
    if (name) {
        console.log(name.toUpperCase()); // TS knows it's string (not null)
    } else {
        console.log("No name provided");
    }
}


// --- Equality narrowing ---

function compare(a: string | number, b: string | boolean): void {
    if (a === b) {
        // Both must be string (only common type)
        console.log(a.toUpperCase());
    }
}


// --- Custom type guard ---
// A function that returns a type predicate

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

function getArea(shape: Shape): number {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;  // TS knows it's Circle
    }
    return shape.side ** 2;                  // TS knows it's Square
}
export {};