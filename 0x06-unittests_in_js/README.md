## 0x06. Unittests in JS

**Short Specializations**  
**Average:** 99.07%  
**Weight:** 1  

**Track:** Back-end  
**Languages & Tools:** JavaScript, ES6, NodeJS, ExpressJS, Mocha, Chai, Sinon  

**Project Duration:**  
Start: June 10, 2025, 6:00 PM  
End: June 12, 2025, 6:00 PM  
Checker Released: June 11, 2025, 6:00 AM  
Auto Review: At deadline  

---

## Resources

Read or watch:

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://dev.to/lakshmanan/testing-nodejs-applications-using-mocha-chai-and-sinon-5bo4)

---

## Learning Objectives

By the end of this project, you should be able to:

- Write test suites using Mocha
- Use assertion libraries such as Node’s `assert` or Chai
- Organize long test suites effectively
- Understand and apply spies and stubs
- Use hooks and understand when they are necessary
- Handle async functions in unit tests
- Write integration tests with small Node.js servers

---

## Requirements

- All code will be run on **Ubuntu 18.04** using **Node 12.x.x**
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- File extensions must be `.js`
- Must include a `README.md` file
- Tests must run with `npm run test *.test.js` and pass without warnings or errors

---

## Tasks

### 0. Basic test with Mocha and Node assertion library

- **Files:** `0-calcul.js`, `0-calcul.test.js`
- Implement `calculateNumber(a, b)` — rounds both and returns their sum
- Test using Node’s `assert`
- All tests should pass with `npm test 0-calcul.test.js`

---

### 1. Combining descriptions

- **Files:** `1-calcul.js`, `1-calcul.test.js`
- Extend previous function to support `type` parameter: `'SUM'`, `'SUBTRACT'`, `'DIVIDE'`
- Handle divide-by-zero by returning `'Error'`
- Organize test cases using `describe`
- Use Node’s `assert`

---

### 2. Basic test using Chai assertion library

- **Files:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- Refactor test suite using `Chai`'s `expect` syntax
- Maintain identical logic and behavior
- All tests should pass with `npm test 2-calcul_chai.test.js`

---

### 3. Spies

- **Files:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- Move `calculateNumber` to a `Utils` module
- Create `sendPaymentRequestToApi(totalAmount, totalShipping)` to compute total and log it
- Write test using `sinon.spy` to verify internal call to `Utils.calculateNumber('SUM', ...)`
- Restore spy after test to avoid side effects

---

## Repository Structure

- **GitHub Repo:** `alx-backend-javascript`
- **Project Directory:** `0x06-unittests_in_js`
- **Essential Files:**
  - `package.json`
  - `0-calcul.js`, `0-calcul.test.js`
  - `1-calcul.js`, `1-calcul.test.js`
  - `2-calcul_chai.js`, `2-calcul_chai.test.js`
  - `utils.js`, `3-payment.js`, `3-payment.test.js`

---

## How to Run

1. **Install dependencies**
   ```bash
   npm install

Author: Dzeble Kwame Baku
