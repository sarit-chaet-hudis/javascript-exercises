function darkOrLight(color) {
  let c = color.toLowerCase();
  switch (c) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
}

console.log(darkOrLight("df"));
