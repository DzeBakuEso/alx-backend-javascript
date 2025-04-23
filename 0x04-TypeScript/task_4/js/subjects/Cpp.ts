namespace Subjects {
  // Extend Teacher interface to add experienceTeachingC
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
