"use strict";
exports.__esModule = true;
exports.filterPersons = exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
    { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
    { type: "admin", name: "Agent Smith", age: 32, role: "Anti-virus engineer" },
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === "admin" ? person.role : person.occupation));
}
exports.logPerson = logPerson;
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            if (fieldName !== "type")
                return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
// const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
var adminsOfAge32 = filterPersons(exports.persons, "admin", { age: 32 });
console.log("Users of age 23:");
adminsOfAge32.forEach(logPerson);
// console.log();
// console.log('Admins of age 23:');
// adminsOfAge23.forEach(logPerson);
// logPerson(persons[2]);
