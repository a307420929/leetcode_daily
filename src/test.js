let arr = [1, 2, 3, 4, 5, 6]

var sum = arr.reduce((prev, cur, index) => {
    console.log(prev, cur, index);
    return prev + cur;
})