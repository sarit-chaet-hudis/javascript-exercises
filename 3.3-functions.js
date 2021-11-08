const worldPop = 7900 ;

function percentageOfWorld1 (pop) {
    return `${Number(pop/worldPop*100).toFixed(4)}%`;
}

let china = percentageOfWorld1(1441);
console.log(china);

let india = percentageOfWorld1(1380);
console.log(india);

let us = percentageOfWorld1(331);
console.log(us);

const percentageOfWorld2 = function (pop) {
    return `${Number(pop/worldPop*100).toFixed(4)}%`;
}

let indonesia = percentageOfWorld2(273);
console.log(indonesia);

