const people = ["Greg", "Mary", "Devon", "James"];

for (let person of people) {
    console.log(person);
}

people.splice(people.indexOf("Greg"),1);
console.log(people);
people.splice(people.indexOf("James"),1);
console.log(people);
people.unshift("Matt");
console.log(people);
people.push("Sarit");
console.log(people);
for (let i=0; i<(people.indexOf("Mary")+1); i++){
    console.log(people[i]);
}

const peopleCopy = people.slice(2);
console.log(peopleCopy);
console.log(people.indexOf('foo'));

const people2 = ["Greg", "Mary", "Devon", "James"];
people2.splice(2,1,"Elizabeth","Artie");
console.log(people2);

const withBob = people2.concat("Bob");
console.log(withBob);