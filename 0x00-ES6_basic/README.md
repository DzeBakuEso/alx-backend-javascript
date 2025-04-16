# ES6 Basics

This project covers the fundamentals of ECMAScript 6 (ES6), the 2015 update to JavaScript. It focuses on key ES6 features and syntax improvements.

## Learning Objectives

By completing this project, you will understand:

- What ES6 is and its significance
- New features introduced in ES6
- Differences between `const` and `let`
- Block-scoped variables
- Arrow functions and default parameters
- Rest and spread operators
- String templating (template literals)
- Object creation and property shorthand
- Iterators and `for-of` loops

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- Files must end with a new line
- A `README.md` file at the root is mandatory
- Code should use `.js` extension
- Code will be tested using Jest and ESLint
- All functions must be exported

## Setup

1. Install NodeJS 12.11.x:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify installation:

bash
Copy
nodejs -v  # Should show v12.11.1
npm -v     # Should show 6.11.3
Install project dependencies:

bash
Copy
npm install
Project Tasks
0. Const or let?
Modify functions to use const and let appropriately.

File: 0-constants.js

1. Block Scope
Modify variables to prevent overwriting in conditional blocks.

File: 1-block-scoped.js

2. Arrow functions
Convert standard function to arrow function syntax.

File: 2-arrow.js

3. Parameter defaults
Simplify function using default parameters.

File: 3-default-parameter.js

4. Rest parameter syntax
Modify function to use rest parameters.

File: 4-rest-parameter.js

5. Spread syntax
Concatenate arrays and string using spread syntax.

File: 5-spread-operator.js

6. Template literals
Rewrite return statement using template literals.

File: 6-string-interpolation.js

7. Property value shorthand
Simplify object creation using property shorthand.

File: 7-getBudgetObject.js

8. Computed property names
Use computed property names in object creation.

File: 8-getBudgetCurrentYear.js

9. ES6 method properties
Convert methods to ES6 method properties.

File: 9-getFullBudget.js

10. For...of loops
Rewrite function using for...of loop.

File: 10-loops.js

11. Iterator
Create function to generate employee objects.

File: 11-createEmployeesObject.js

12. Report object
Create function to generate a report object.

File: 12-createReportObject.js

Configuration Files
package.json: Contains project scripts and dependencies

babel.config.js: Babel configuration for ES6 support

.eslintrc.js: ESLint configuration for code quality

Running Tests
To run all tests:

bash
Copy
npm test
To run ESLint:

bash
Copy
npm run lint
To run both tests and linting:

bash
Copy
npm run full-test
Author
[Dzeble kwame Baku]

License
This project is licensed under the ALX License.
