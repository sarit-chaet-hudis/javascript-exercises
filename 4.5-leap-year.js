function isLeapYear (y) {
    if (y%4 === 0){
        if (y%100 !== 0 || y%400 == 0){
            return "this is a leap year";
        }
    }

    return "this is NOT a leap year";
}

console.log(isLeapYear(2400));