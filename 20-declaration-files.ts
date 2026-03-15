// ============================================
// 20 - DECLARATION FILES (.d.ts)
// ============================================

// Declaration files provide type information for
// JavaScript libraries that don't have built-in types.
// They contain only type declarations, no implementation.


// --- Basic declaration file ---
// File: my-library.d.ts

declare module "my-library" {
    export function doSomething(input: string): number;
    export const version: string;
}

// Now you can import with types:
// import { doSomething, version } from "my-library";


// --- Declaring global variables ---
// File: globals.d.ts

declare const API_URL: string;
declare const IS_PRODUCTION: boolean;

// These are now available globally without importing


// --- Declaring global functions ---

declare function log(message: string): void;


// --- Ambient declarations for existing JS ---
// When you have a JS file and want to add types

declare class MyJSClass {
    constructor(name: string);
    getName(): string;
    setName(name: string): void;
}


// --- @types packages ---
// Most popular JS libraries have types on DefinitelyTyped
//
// Install types for a library:
//   npm install --save-dev @types/lodash
//   npm install --save-dev @types/express
//   npm install --save-dev @types/node
//
// TypeScript automatically picks up @types packages


// --- Triple-slash directives ---
// Reference other declaration files

/// <reference path="./other-types.d.ts" />
/// <reference types="node" />
