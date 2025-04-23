import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Export constants for each subject
export const cpp = new Cpp({ firstName: "John", lastName: "Doe", experienceTeachingC: 10 });
export const java = new Java({ firstName: "John", lastName: "Doe", experienceTeachingJava: 10 });
export const react = new React({ firstName: "John", lastName: "Doe", experienceTeachingReact: 10 });

// Export a Teacher object with experienceTeachingC
export const cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

// Cpp Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
