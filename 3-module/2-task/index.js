let arr = [3, 5, 2, 9, 8, 4, 1]

function filterRange(arr, a, b) {
return arr.filter(num => a <= num && num <= b);
}

let filtered = filterRange(arr, 3, 7)