// MajorCredits interface with brand property to uniquely identify it
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Unique brand property for MajorCredits
}

// MinorCredits interface with brand property to uniquely identify it
interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Unique brand property for MinorCredits
}

// Function to sum MajorCredits, ensuring the result is typed as MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MajorCredits' }; // return value typed as MajorCredits
}

// Function to sum MinorCredits, ensuring the result is typed as MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MinorCredits' }; // return value typed as MinorCredits
}

// Example usage of the functions

// Define two subjects with MajorCredits type
const major1: MajorCredits = { credits: 12, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 8, brand: 'MajorCredits' };

// Define two subjects with MinorCredits type
const minor1: MinorCredits = { credits: 6, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 4, brand: 'MinorCredits' };

// Sum of MajorCredits
const totalMajorCredits = sumMajorCredits(major1, major2);
console.log('Total Major Credits:', totalMajorCredits); // { credits: 20, brand: 'MajorCredits' }

// Sum of MinorCredits
const totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log('Total Minor Credits:', totalMinorCredits); // { credits: 10, brand: 'MinorCredits' }
