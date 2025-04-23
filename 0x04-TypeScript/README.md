# 0x04. TypeScript

## Description

This project introduces TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. You’ll learn how to define types for variables, functions, interfaces, and classes, as well as how to extend JavaScript’s capabilities with more robust tooling and safety.

## Project Timeline

- **Start Date:** April 22, 2025, 6:00 PM  
- **End Date:** April 23, 2025, 6:00 PM  
- **Manual QA Review:** Required (request it when you are done with the project)

## Learning Objectives

By the end of this project, you will be able to:

- Understand and use basic types in TypeScript
- Define and implement interfaces, classes, and functions
- Work with the DOM using TypeScript
- Use generic types
- Implement namespaces and merge declarations
- Use ambient namespaces to import external libraries
- Understand basic nominal typing in TypeScript

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Transpile TypeScript on **Ubuntu 18.04**
- Use `.ts` extension where possible
- All scripts checked using **Jest (v24.9.\*)**
- No TypeScript warnings or errors should be shown during compilation
- You must have a `README.md` at the root of the project

## Configuration Files

Use the following config files in the appropriate tasks:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

## Tasks

### 0. Creating an interface for a student

- Define a `Student` interface
- Create two student objects and add them to an array
- Render a table showing each student’s first name and location using vanilla JS
- Output must have no TypeScript errors

### 1. Let's build a Teacher interface

- Define `Teacher` interface with `readonly` and optional properties
- Add support for arbitrary properties (e.g., `contract`)
- Create and log a valid teacher object

### 2. Extending the Teacher interface

- Create a `Directors` interface that extends `Teacher`
- Add a `numberOfReports` property
- Instantiate and log a director object

### 3. Printing teachers

- Write `printTeacher` function that outputs `FirstInitial. LastName`
- Create an interface `printTeacherFunction` to describe this function

### 4. Writing a class

- Create a class `StudentClass` with `workOnHomework` and `displayName` methods
- Describe the class and constructor using interfaces
- No TS compilation errors allowed

### 5. Advanced types Part 1

- Create `DirectorInterface` and `TeacherInterface`
- Implement both in `Director` and `Teacher` classes
- Write a function `createEmployee` that returns instances based on salary

### 6. Creating functions specific to employees

- Write `isDirector` as a type predicate
- Implement `executeWork` to invoke role-specific methods

### 7. String literal types

- Define a type `Subjects` limited to `'Math' | 'History'`
- Write a function `teachClass` that returns subject-specific messages

### 8. Ambient Namespaces

- Define types and interfaces in `interface.ts`
- Declare types for an external library (`crud.js`) in `crud.d.ts`
- Use the library and TypeScript types to perform insert, update, and delete operations

### 9. Namespace & Declaration merging

- Define a `Teacher` interface inside `Subjects` namespace
- Create `Subject` base class and extend it in `Cpp`, `Java`, `React`
- Add declaration merged properties for teacher experience per subject
- Implement methods `getRequirements` and `getAvailableTeacher`

## Repository

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x04-TypeScript`

## File Structure (Example)

Author: Dzeble Kwame Baku 
