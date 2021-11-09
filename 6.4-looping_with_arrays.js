const populations = [6000000, 151000000, 38000000, 27300000];
const worldPop = 7900000000 ;


function percentageOfWorld1 (pop) {
    return `${Number(pop/worldPop*100).toFixed(2)}%`;
}

function populationPercentages (populations) {
    const percentages = [];
    for (let population of populations) {
        percentages.push(percentageOfWorld1(population));
    }
    return percentages;
}

console.log(populationPercentages(populations));