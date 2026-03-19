# TypeScript Notes

Self-contained TypeScript mini-lessons that mirror the concepts covered in each numbered `.ts` file. Every file is executable on its own, heavily commented, and shows the idiomatic syntax for the feature it explains.

## Getting Started

1. Install TypeScript globally (or use `npx`): `npm install -g typescript`.
2. Run a specific lesson: `tsc 07-functions.ts && node 07-functions.js`.
3. Delete the emitted `.js` files when you are done (these notes keep only `.ts`).

## Lesson Index

| File | Topic | Highlights |
| --- | --- | --- |
| 01-what-is-typescript.ts | What is TypeScript? | Superset definition, compilation workflow, global install commands. |
| 02-basic-types.ts | Basic Types | Primitive annotations, tuples, enums, `any` vs `unknown`, `void`/`never`. |
| 03-type-inference.ts | Type Inference | Implicit typing for variables, functions, arrays, objects, and `const` literals. |
| 04-union-and-intersection.ts | Union & Intersection | Sample unions, narrowing checks, and `Person & Employee` intersections. |
| 05-type-aliases.ts | Type Aliases | Reusable alias patterns for primitives, objects, and function signatures. |
| 06-interfaces.ts | Interfaces | Optional/readonly props, extension, declaration merging, function interfaces. |
| 07-functions.ts | Functions | Typed params/returns, optional/default/rest params, overloads, callbacks. |
| 08-objects.ts | Objects | Inline object annotations, optional/readonly props, index signatures, nesting. |
| 09-type-assertions.ts | Type Assertions | `as` syntax, DOM assertions, non-null/const assertions, double casts. |
| 10-literal-types.ts | Literal Types | String/number/boolean literals, constrained parameters, `as const` config. |
| 11-narrowing.ts | Narrowing | `typeof`, `instanceof`, `in`, truthiness, equality, custom type guards. |
| 12-generics.ts | Generics | Generic functions/classes/interfaces, constraints, `keyof`, default generics. |
| 13-classes.ts | Classes | Access modifiers, inheritance, abstract classes, getters/setters, statics. |
| 14-utility-types.ts | Utility Types | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, etc. |
| 15-mapped-types.ts | Mapped Types | Optional/readonly transformers, key remapping, conditional property mapping. |
| 16-conditional-types.ts | Conditional Types | `extends` checks, `infer`, promise/array helpers, distributive behavior. |
| 17-template-literal-types.ts | Template Literal Types | Patterned string unions, event handlers, built-in string helpers. |
| 18-modules.ts | Modules | Named/default exports, namespace imports, re-exports, type-only imports. |
| 19-discriminated-unions.ts | Discriminated Unions | Tagged unions, switch-based narrowing, exhaustiveness via `never`. |
| 20-declaration-files.ts | Declaration Files | Ambient module/global declarations, `@types`, triple-slash directives. |
| 21-keyof-and-typeof.ts | `keyof` & `typeof` | Property key unions, runtime-to-type extraction, enum/array combos. |
| 22-tsconfig.ts | tsconfig | Annotated compiler options, strictness flags, path aliases, useful commands. |

## How to Use

- Browse files sequentially—they build from basics to advanced type-system features.
- Copy/paste snippets into a sandbox (StackBlitz, TS Playground) to experiment quickly.
- Treat comments as reference cards; adapt the code into your own projects or exercises.