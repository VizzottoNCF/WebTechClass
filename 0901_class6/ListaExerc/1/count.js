function oddNumber10() {
    let oddNums = 0;
    let result = " ";

    do {
        if (oddNums % 2 !== 0) {
            result += oddNums + " ";
        }
        oddNums++;
    } while (oddNums <= 10);
    alert(result);
}