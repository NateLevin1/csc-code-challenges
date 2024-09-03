function binarySearch(arr, val) {
    return binarySearchR(arr, 0, arr.length - 1, val);
}
function binarySearchR(arr, left, right, val) {
    if (left == right - 1) {
        if (arr[right] == val) {
            return right;
        } else {
            return -1;
        }
    }
    const index = Math.floor(left + (right - left) / 2);
    const curVal = arr[index];
    if (val == curVal) {
        return index;
    } else if (val < curVal) {
        return binarySearchR(arr, left, index, val);
    } else {
        return binarySearchR(arr, index, right, val);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
