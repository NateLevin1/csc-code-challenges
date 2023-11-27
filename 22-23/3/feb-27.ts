const daysByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isValidDate = (input: string) => {
    const [month, days, year] = input.split("/").map((el) => parseInt(el));
    if (month > 12 || month < 1) return "Invalid";
    if (days > daysByMonth[month + 1] || days < 1) return "Invalid";
    if (year < 1) return "Invalid";
    return "Valid";
};

console.log(isValidDate("01/01/2023"));
console.log(isValidDate("13/01/2023"));
console.log(isValidDate("1/32/2023"));
