// Define the String Literal Type
type Subjects = 'Math' | 'History';

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Test cases
console.log(teachClass('Math'));      // Output: Teaching Math
console.log(teachClass('History'));   // Output: Teaching History
