//1) Write a function splitAndMerge
function splitAndMerge(str, sp) {
    return str
        .split(" ")
        .map((word) =>
            word
                .split("")
                .join(sp)
        )
        .join(" ");
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

console.log("---------");

//2) Write a function convert
function convert(obj) {
    return Object.entries(obj);
}
let hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(hash));

console.log("---------");

//3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str) {
    return str.replace(/[-_]+(.)/g, (_, chr) => chr.toUpperCase());
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

console.log("---------");

//4) Write a function that takes a sentence (string) and reverses each word in the sentence.
function mirrorStr(str) {
    return str
        .split(" ")
        .map((word) =>
            word
                .split("")
                .reverse()
                .join(""))
        .join(" ");
}
console.log(mirrorStr(" A fun little challenge! "));

console.log("---------");

//5) Write a function stringExpansion
function stringExpansion(str) {
    let word = '';
    const regExp = new RegExp(/(?<quantity>[0-9])*?(?<char>[a-zA-Z])/g);
    for (const iterator of str.matchAll(regExp)) {
        let { quantity, char } = iterator.groups;
        (quantity == undefined) ? word += char : word += char.repeat(quantity);
    }
    return word;
}
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));
console.log(stringExpansion('a232132'));
console.log(stringExpansion('232132'));
console.log(stringExpansion(''));

console.log("---------");

//6) Write `largest` and `smallest` functions that returns the largest and smallest number passed like a argument.
function largest() {
    return Math.max(...arguments);
}
function smallest() {
    return Math.min(...arguments);
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

console.log("---------");

//7) Write function `transform` that will transform array of numbers to array of functions that will return value from a base array.
function transform(array) {
    return array.map((_, index) => () => array[index]);
}
let baseArray = [10, 20, 30, 40, 50];
let newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

console.log("---------");

//8) Write function `sum`. Function expects arbitrary number of digit arguments and returns compound value of them.
function sum(...rest) {
    return (rest.length === 0) ? 0 : rest[0] + sum(...rest.slice(1));
}
console.log(sum(1, 3, 5, 7));

console.log("---------");

//9) Write function `countDown`. Function expects number and logs values one by one till zero with one second delay.
function countDown(num) {
    for (let ms = 1000, i = num; i >= 0; i--, ms += 1000) {
        setTimeout(() =>
            console.log(i),
            (ms));
    }
}
countDown(3);
