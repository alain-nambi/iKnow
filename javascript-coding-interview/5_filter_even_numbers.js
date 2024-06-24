const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0)
} 

console.log(filterEvenNumbers([0, 5, 6, 78, 49, 51]))