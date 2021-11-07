function dateString() {
  let d = new Date(Date.now());
  let weekDay = d.toLocaleDateString("en-US", { weekday: "long" });
  let month = d.toLocaleDateString("en-US", { month: "long" });
  let dayNum = d.getUTCDate();
  let year = d.toLocaleDateString("en-US", { year: "numeric" });

  return (
    "Today is " + weekDay + " the " + dayNum + " of " + month + " , " + year
  );
}

console.log(dateString());


