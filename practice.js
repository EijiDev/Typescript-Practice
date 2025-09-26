
let fruits = ["apple", "banana", "grape", "orange"];
const vowels = "aeiou";
let results = [];

fruits.forEach(fruit => {
    let count = 0;
    for (let char of fruit) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }
    results.push({ word: fruit, vowels: count });
});

console.log(results);
