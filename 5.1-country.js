function countryToLiveIn(language, isIsland, population, country) {
  if (language === "English" && isIsland === false && population < 50000000) {
    console.log("you should live in " + country);
    return;
  }
  console.log("you shouldn't live in " + country);
}

countryToLiveIn("English", false, 50000, "Finland");
