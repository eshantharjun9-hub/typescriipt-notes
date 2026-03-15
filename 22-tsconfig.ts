// ============================================
// 22 - tsconfig.json
// ============================================

// tsconfig.json configures the TypeScript compiler.
// Generate one with: tsc --init

// Below is a reference of key options:

/*
{
    "compilerOptions": {

        // --- Target & Module ---
        "target": "ES6",            // JS version to compile to (ES5, ES6, ES2020, ESNext)
        "module": "commonjs",       // Module system (commonjs, ES6, ESNext)
        "lib": ["ES6", "DOM"],      // Built-in type declarations to include

        // --- Strict Mode ---
        "strict": true,             // Enables ALL strict checks below:
        "noImplicitAny": true,      // Error on implicit 'any' type
        "strictNullChecks": true,   // null/undefined not assignable to other types
        "strictFunctionTypes": true,// Strict checking of function parameter types
        "noImplicitThis": true,     // Error on 'this' with implicit any type

        // --- File Paths ---
        "outDir": "./dist",         // Output directory for compiled JS
        "rootDir": "./src",         // Root directory of source files
        "baseUrl": "./",            // Base path for module resolution
        "paths": {                  // Path aliases for imports
            "@/*": ["src/*"]
        },

        // --- Module Resolution ---
        "moduleResolution": "node",     // How modules are found (node or classic)
        "esModuleInterop": true,        // Enables default imports from CommonJS
        "resolveJsonModule": true,      // Allow importing .json files
        "allowSyntheticDefaultImports": true,

        // --- Output ---
        "declaration": true,        // Generate .d.ts declaration files
        "declarationMap": true,     // Generate sourcemaps for .d.ts files
        "sourceMap": true,          // Generate .js.map sourcemap files
        "removeComments": true,     // Remove comments from output

        // --- Checking ---
        "noUnusedLocals": true,         // Error on unused local variables
        "noUnusedParameters": true,     // Error on unused function parameters
        "noImplicitReturns": true,      // Error when not all paths return a value
        "noFallthroughCasesInSwitch": true, // Error on fallthrough in switch

        // --- Advanced ---
        "skipLibCheck": true,       // Skip type checking of .d.ts files (faster)
        "forceConsistentCasingInFileNames": true
    },

    "include": ["src"],             // Files/folders to compile
    "exclude": ["node_modules", "dist"]  // Files/folders to skip
}
*/


// --- Common tsconfig presets ---
//
// For Node.js:
//   npm install --save-dev @tsconfig/node18
//   { "extends": "@tsconfig/node18/tsconfig.json" }
//
// For React:
//   npm install --save-dev @tsconfig/create-react-app
//   { "extends": "@tsconfig/create-react-app/tsconfig.json" }


// --- Useful commands ---
//
// tsc                  Compile using tsconfig.json
// tsc --init           Generate a new tsconfig.json
// tsc --watch          Compile and watch for changes
// tsc --noEmit         Type check without generating output files
// tsc file.ts          Compile a single file (ignores tsconfig)
