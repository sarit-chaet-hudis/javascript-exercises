const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 0,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  findPerson: function (type, id) {
    return (
      this[type].find((person) => person.id === id) ||
      console.log("no id found")
    );
  },

  getTeachersBySubject: function (subject) {
    return this.teachers.filter((teacher) =>
      teacher.subjects.includes(subject)
    );
  },

  assignStudent: function (studentId, subject) {
    const student = this.findPerson("students", studentId).name;
    const relevantTeachers = this.getTeachersBySubject(subject);

    for (let teacher of relevantTeachers) {
      if (teacher.capacityLeft > 0) {
        // Teacher has capacity, assign the student, then break
        this.students.push(student);
        teacher.capacityLeft--;
        console.log(
          `congratulations, ${student}, you are enrolled to ${subject} with professor ${teacher.name}`
        );
      }
    }
    console.log(`Sorry ${student}, no available ${subject} teachers left`);
  },
  assignTeachersSubject: function (teacherId, subject) {
    const teacher = this.findPerson("teachers", teacherId);
    if (!teacher.subjects.includes(subject)) {
      // this teacher currently not teaches this subject, add it
      teacher.subjects.push(subject);
    }
  },
};

// ******************************

// console.log(school.findPerson("teachers", 2));
// console.log(school.getTeachersBySubject("history"));

school.assignTeachersSubject(2, "biology");
// console.log(school.findPerson("teachers", 2));
// console.log("teachers that teach biology: ");
// console.log(school.getTeachersBySubject("biology"));
school.assignStudent(10, "biology");
