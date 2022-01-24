const { dateString } = require("../get-date");
console.log(dateString);

test("Should get date", () => {
  const date = dateString();
  expect(date).toBe("Today is Monday the 24 of January , 2022");
});
