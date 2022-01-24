async function getTenPeople() {
  try {
    const prom1 = (await fetch(`https://swapi.dev/api/people`)).json();
    const peopleData = await prom1;

    const prom2 = (await fetch(`https://swapi.dev/api/planets/`)).json();
    const planetsData = await prom2;

    const planetsArray = [];
    for (planet of planetsData.results) {
      const planetObject = {};
      planetObject.id = planet.url;
      planetObject.name = planet.name;
      planetObject.population = planet.population;
      planetsArray.push(planetObject);
    }

    const peopleArray = [];
    for (person of peopleData.results) {
      const personObject = {};
      personObject.name = person.name;
      personObject.height = person.height;
      personObject.hair_color = person.hair_color;
      personObject.planet = getPlanet(person.homeworld);
      peopleArray.push(personObject);
    }

    function getPlanet(planetId) {
      console.log(`planetId is ${planetId}`);
      console.dir(`planetsArray[2] is ${planetsArray[2]}`);
      console.log(planetsArray.find((e) => e.id === planetId));
      return planetsArray.find((e) => e.id === planetId);
    }

    // console.log(peopleArray);
    console.log(planetsArray);
  } catch (e) {
    console.log("error", e);
  }
}

getTenPeople();
