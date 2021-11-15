const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
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
    return this.teachers.filter((teacher) => teacher.subjects.includes(subject));
  },

  assignStudent: function (studentId, subject) {
    //get teacher that teaches subject, and has capacity

    //get name of student
    this.findPerson("student", studentId).name;
  },
};

console.log(school.findPerson("teachers", 2));
console.log(school.getTeachersBySubject("history"));
