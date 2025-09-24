

let scores = [78, 45, 89, 32, 100];

function getAverage(scores: number[]) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum /scores.length;
}

function passOrFail(scores: number[]) {
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        console.log(`Student${i + 1}: ${score >= 50 ? "Passed" : "Failed"}`);
    }
}

function getMax(scores: number[]) {
    return Math.max(...scores);
}

function getMin(scores: number[]) {
    return Math.min(...scores);
}

console.log("Average score: ", getAverage(scores));
console.log("Highest score", getMax(scores));
console.log("Lowest score", getMin(scores));
passOrFail(scores);
export {}