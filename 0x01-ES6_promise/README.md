## 0x01. ES6 Promises

### Project Overview
This project focuses on understanding and implementing ES6 Promises in JavaScript. It covers various aspects of promises, including creating, resolving, rejecting, and handling multiple promises. The project also introduces async/await and error handling with try/catch.

### Learning Objectives
By the end of this project, you should be able to:
- Explain what Promises are and why they are useful
- Use `then`, `resolve`, and `catch` methods effectively
- Utilize all methods of the Promise object
- Implement error handling with `throw`/`try`
- Use the `await` operator
- Work with async functions

### Requirements
- Ubuntu 18.04 LTS with NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- Files must end with a new line
- Mandatory README.md at project root
- Code files must use `.js` extension
- Code will be tested with Jest (`npm run test`)
- Code must pass ESLint linting
- All functions must be exported

### Setup
1. Install NodeJS 12.11.x:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

bash
Copy
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
Install project dependencies:

bash
Copy
npm install
Project Structure
The project consists of several tasks, each focusing on different aspects of promises:

Task 0: Keep every promise you make
Implement getResponseFromAPI() that returns a Promise

Task 1: Don't make a promise...if you can't keep it
Implement getFullResponseFromAPI(success) that resolves or rejects based on the boolean parameter

Task 2: Catch me if you can!
Implement handleResponseFromAPI(promise) with three handlers for resolution, rejection, and logging

Task 3: Handle multiple successful promises
Use uploadPhoto and createUser from utils.js to handle multiple promises

Task 4: Simple promise
Implement signUpUser(firstName, lastName) that returns a resolved promise with user data

Task 5: Reject the promises
Implement uploadPhoto(filename) that returns a rejected promise

Task 6: Handle multiple promises
Implement handleProfileSignup(firstName, lastName, fileName) that handles multiple promises and returns their settled states

Response Data Formats
uploadPhoto returns:

{
  "status": 200,
  "body": "photo-profile-1"
}


{
  "firstName": "Guillaume",
  "lastName": "Salva"
}

npm run test

Project Timeline
Start: Apr 14, 2025 6:00 PM

End: Apr 16, 2025 6:00 PM

Checker released: Apr 15, 2025 6:00 AM

Auto review at deadline

Resources
Promise

JavaScript Promise: An introduction

Await

Async

Throw / Try

Author:Dzeble kwame
