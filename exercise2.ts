
let sentence = "TypeScript makes JavaScript safer and more fun";

function wordCount(sentence: string): number {
    let words = sentence.split(" ");
    return words.length;
}

function longestWord (sentence: string): string {
    let longest = "";
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}