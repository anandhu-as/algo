const arr = [10, 22, 33, 4, 66, 7];
const targetValue = 66;

const search = (arr, targetValue) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetValue) {
            return i;
        }
    }
    return -1;
};

let result = search(arr, targetValue);
result === -1 ? console.log(false) : console.log(true, result);
