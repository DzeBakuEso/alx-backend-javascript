namespace Subjects {
  // Extend Teacher interface to add experienceTeachingReact
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
