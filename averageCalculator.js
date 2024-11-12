function average(values, minimum, maximum) {
    let i = 0;
    let inputNumber = 0;
    let validNumber = 0;
    let sum = 0;

    while (values[i] !== -999 && inputNumber < 100) {
        inputNumber++;
        if (values[i] >= minimum && values[i] <= maximum) {
            validNumber++;
            sum += values[i];
        } else {
            i++;
            continue;
        }
        i++;
    }

    if (validNumber > 0) {
        return Math.floor(sum / validNumber);
    } else {
        return -999;
    }
}

module.exports = average;
