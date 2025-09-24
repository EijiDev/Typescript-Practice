"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scores = [78, 45, 89, 32, 100];
function getAverage(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}
function passOrFail(scores) {
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];
        console.log("Student".concat(i + 1, ": ").concat(score >= 50 ? "Passed" : "Failed"));
    }
}
function getMax(scores) {
    return Math.max.apply(Math, scores);
}
function getMin(scores) {
    return Math.min.apply(Math, scores);
}
console.log("Average score: ", getAverage(scores));
console.log("Highest score", getMax(scores));
console.log("Lowest score", getMin(scores));
passOrFail(scores);
