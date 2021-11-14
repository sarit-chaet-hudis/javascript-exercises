const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];


    for (let n in listOfNeighbours) {
        for (let j of listOfNeighbours[n]) {
            console.log(`Neighbour: ${j}`);
        }
    }