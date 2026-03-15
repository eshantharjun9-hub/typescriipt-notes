// ============================================
// 17 - TEMPLATE LITERAL TYPES
// ============================================

// Build string types using template syntax.
// Available since TypeScript 4.1


// --- Basic template literal type ---

type Greeting = `Hello, ${string}`;

let g1: Greeting = "Hello, Eshanth";  // OK
// let g2: Greeting = "Hi, Eshanth";  // Error


// --- Combining unions ---

type Color = "red" | "blue";
type Size = "small" | "large";

type Style = `${Size}-${Color}`;
// "small-red" | "small-blue" | "large-red" | "large-blue"


// --- Event names pattern ---

type EventName = "click" | "scroll" | "mousemove";
type Handler = `on${Capitalize<EventName>}`;
// "onClick" | "onScroll" | "onMousemove"


// --- Built-in string manipulation types ---

type Upper = Uppercase<"hello">;       // "HELLO"
type Lower = Lowercase<"HELLO">;       // "hello"
type Cap = Capitalize<"hello">;        // "Hello"
type Uncap = Uncapitalize<"Hello">;    // "hello"


// --- Practical example: CSS properties ---

type CSSProperty = "margin" | "padding";
type CSSDirection = "top" | "right" | "bottom" | "left";

type CSSRule = `${CSSProperty}-${CSSDirection}`;
// "margin-top" | "margin-right" | "margin-bottom" | "margin-left"
// | "padding-top" | "padding-right" | "padding-bottom" | "padding-left"


// --- With generics ---

type PropEventType<T extends string> = `${T}Changed`;

type NameEvent = PropEventType<"name">;   // "nameChanged"
type AgeEvent = PropEventType<"age">;     // "ageChanged"
export {};