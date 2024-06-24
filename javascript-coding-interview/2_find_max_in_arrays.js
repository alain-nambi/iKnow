const findMaxArr = (array) => {
    return Math.max(...array);
}

const findMinArr = (array) => {
    return Math.min(...array);
}

console.log('Array : [1, 2, 3, 4, 5]');
console.log('Max : ' + findMaxArr([1, 2, 3, 4, 5]));
console.log('Min : ' + findMinArr([1, 2, 3, 4, 5]));