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

console.log(lowestAverageHighestWithoutSort([12, 5, 23, 18, 4, 45, 32]));