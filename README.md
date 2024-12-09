# TypeScript Implicit Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript where implicit type coercion can lead to runtime errors that are not caught during compilation.

## Problem

The `combine` function is defined to accept two numbers and return their sum. However, if you pass a string as an argument, TypeScript does not throw a type error during compilation.  Instead, the runtime behavior results in `NaN` (Not a Number).

This can be problematic because such type errors only manifest at runtime, making them harder to debug. The ideal solution is to have the TypeScript compiler identify this issue during compilation.

## Solution

The solution involves using stricter type checking in TypeScript to prevent such errors.  See `bugSolution.ts` for details.