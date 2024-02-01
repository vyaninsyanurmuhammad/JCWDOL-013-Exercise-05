// Write a function to get the lowest, highest and average value in the array (with and without sort function)

// Without sort method
const lowestAverageHighestWithoutSort = (list) => {
    for (let i = 1; i < list.length; i++) {
        let current = list[i];

        let j = i - 1;

        while (j >= 0 && list[j] > current) {
            list[j + 1] = list[j];
            j--;
        }

        list[j + 1] = current;
    }

    return { lowest: list[0], highest: list[list.length - 1], average: list.reduce((total, number) => total + number, 0) / list.length }
}

// with sort method
const lowestAverageHighestWithSort = (list) => {
    list.sort((a, b) => a - b);

    return { lowest: list[0], highest: list[list.length - 1], average: list.reduce((total, number) => total + number, 0) / list.length }
}

console.log(lowestAverageHighestWithoutSort([12, 5, 23, 18, 4, 45, 32]));
console.log(lowestAverageHighestWithSort([12, 5, 23, 18, 4, 45, 32]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

const concatenatingWord = (list) => {
    const listWithoutLastData = list.slice(0, list.length - 1);
    const lastData = list[list.length - 1];

    return listWithoutLastData.join(",") + ` and ${lastData}`;
}

console.log(concatenatingWord(["apple", "banana", "cherry", "date"]));

// Write a function to split a string and convert it into an array of words

const convertToArray = (text) => text.split(" ");

console.log(convertToArray("Hello World"));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

const calculateEachElement = (listA, listB) => listA.slice().map((data, index) => data + listB[index]);

console.log(calculateEachElement([1, 2, 3], [3, 2, 1]));