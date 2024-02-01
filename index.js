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

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

const addElementToEnd = (list, number) => {
    if (!list.includes(number)) list.push(number);

    return list;
}

console.log(addElementToEnd([1, 2, 3, 4], 4));
console.log(addElementToEnd([1, 2, 3, 4], 7));

// 
// 
// 
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const removeAllOddArray = (list) => {
    const result = list.filter((data) => data % 2 === 0);

    return result;
}

console.log(removeAllOddArray([1, 2, 3, 4, 5, 6]));

/*

Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).

*/

const insertToArrayByMaxSize = (max, ...number) => number.slice(0, max);

console.log(insertToArrayByMaxSize(5, 5, 10, 24, 3, 6, 7, 8));

// Write a function that will combine 2 given array into one array

const combineTwoGivenArray = (listA, listB) => [...listA, ...listB];

console.log(combineTwoGivenArray([1, 2, 3], [4, 5, 6]));

// Write a function to find duplicate values in an array

const findDuplicateInArray = (list) => {
    const seen = {};
    const duplicates = [];

    list.forEach((value) => {
        if (seen[value] === 1) duplicates.push(value);

        seen[value] = (seen[value] || 0) + 1;

    });

    return duplicates;
}

console.log(findDuplicateInArray([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Write a function to find the difference in 2 given array

const findDifferenceTwoGivenArray = (listA, listB) => {

    const combinedList = [...listA, ...listB];
    const seen = {};
    let difference = [];

    combinedList.forEach((value) => {

        seen[value] = (seen[value] || 0) + 1;

        if (seen[value] === 1) difference.push(value);
        if (seen[value] > 1) difference = difference.filter((data) => data !== value);
    });
    
    return difference;
}

console.log(findDifferenceTwoGivenArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));