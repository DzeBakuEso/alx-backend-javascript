import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
console.log(weakMap.get(endpoint));  // should initially be undefined

queryAPI(endpoint);  // 1st call
console.log(weakMap.get(endpoint));  // 1

queryAPI(endpoint);  // 2nd call
console.log(weakMap.get(endpoint));  // 2

queryAPI(endpoint);  // 3rd call
queryAPI(endpoint);  // 4th call
queryAPI(endpoint);  // 5th call, will trigger the error

// If it reaches 5 queries, it will throw the error and the next line won't execute
