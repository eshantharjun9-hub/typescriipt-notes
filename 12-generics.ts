// ============================================
// 12 - GENERICS
// ============================================

// Write reusable code that works with any type.
// Use <T> as a placeholder for a type that gets
// filled in when the function/class is used.


// --- Generic function ---

function identity<T>(value: T): T {
    return value;
}

identity<string>("hello");   // "hello"
identity<number>(42);        // 42
identity(true);              // inferred as boolean


// --- Multiple generics ---

function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

pair<string, number>("age", 21);  // ["age", 21]
pair("name", "Eshanth");          // inferred


// --- Generic interface ---

interface Box<T> {
    value: T;
}

let strBox: Box<string> = { value: "hello" };
let numBox: Box<number> = { value: 42 };


// --- Generic type alias ---

type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
};

let userResponse: ApiResponse<{ name: string }> = {
    data: { name: "Eshanth" },
    status: 200,
    message: "OK"
};


// --- Generic constraints ---
// Restrict what types can be used with extends

function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength("hello");     // 5
getLength([1, 2, 3]);   // 3
// getLength(123);      // Error: number doesn't have .length


// --- Generic class ---

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.pop();  // 2

const strStack = new Stack<string>();
strStack.push("hello");


// --- keyof with generics ---

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "Eshanth", age: 21 };
getProperty(person, "name");  // "Eshanth"
// getProperty(person, "email"); // Error: "email" not in keyof person


// --- Default generic type ---

interface Container<T = string> {
    value: T;
}

let c1: Container = { value: "hello" };        // T defaults to string
let c2: Container<number> = { value: 42 };     // T is number
