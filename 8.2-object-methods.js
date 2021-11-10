let mycountry = {
  countryName: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 125800000,
  neighbours: [],
  descibe: function(){
      console.log(`${this.countryName} has ${this.population} poeple, they have ${this.neighbours} neighbouring countries and a capital called ${this.capital}`)
  },
  checkIsland : function() {
    this.neighbours.length === 0   
    ? this.isIsland = true
    : this.isIsland =false
  }
};

mycountry.descibe();
console.log(mycountry.checkIsland());
console.log(mycountry.isIsland);
