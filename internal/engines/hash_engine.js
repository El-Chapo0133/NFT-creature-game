


class Hasher {
    constructor() {
        this.NBCHARS = 40;
        this.REFAUGMENT = 10;

    }
    create(input) {
        this.REFAUGMENT = 10;
        if (typeof(input) != "string") {
            throw new Error(`${input} is not a string`);
        }
        let bytes = this.extend(this.toByteArray(input));
        return this.arrayToString(this.apply(bytes));
    }
    
    extend(input) {
        let output = [];

        if (input.length < this.NBCHARS) {
            while (output.length < this.NBCHARS) {
                for (let x = 0; x < input.length; x++) {
                    output.push((input[x] + this.REFAUGMENT) % 94 + 33);
                }
                this.REFAUGMENT += 5;
            }
            output = output.slice(0, this.NBCHARS);
        } else {
            for (let x = 0; x < this.NBCHARS; x++) {
                output.push(0);
            }
            for (let x = input.length - 1; x >= 0; x--) {
                output[x % this.NBCHARS] += input[x];
            }
        }
        return output;
    }
    apply(array) {
        var output = [];
        for (var index = 0; index < array.length; index++) {
            if (!isLastIndex(array, index)) {
                output[index] = this.NlogNOne(array[index], array[index + 1]);
            } else {
                output[index] = array[index];
            }
            if (index >= 2) {
                output[index] = this.fibonacci(array[index - 2], array[index - 1])
            }
        }
        return output;
    }
    NlogNOne(input, inputNext) {
        return input % inputNext;
    }
    fibonacci(inputFirst, inputSecond) {
        return inputFirst + inputSecond;
    }
    toByteArray(input) {
        let output = [];
        for (var index = 0; index < input.length; index++) {
            output[index] = (input).charCodeAt(index);
        }
        return output;
    }
    arrayToString(array) {
        let output = "";
        array.forEach(function (cell) {
            while (cell < 32) {
                if (cell == 0) {
                    cell = 1;
                }
                cell *= 2;
            }
            output += String.fromCharCode(cell % 74 + 48);
        });
        return output;
    }
}

function isLastIndex(array, index) {
    return index == array.length - 1;
}
function isNull(input) {
    return input == null;
}
function isUndefined(input) {
    return input == undefined;
}

module.exports = Hasher;