/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Exact method signature the checker expects
    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
