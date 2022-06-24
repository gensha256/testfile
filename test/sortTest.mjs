const testData = [1, -2, 3, 2, 2, 3, 100, 5, 4, 70, 3.16];
import {dirInfo} from "./test.mjs";

function isSorted(arr) {

    for (let pointer = 1; pointer < arr.length - 1; pointer++) {

        let element = arr[pointer];
        let previous = arr[pointer - 1];
        let next = arr[pointer + 1];


        if (element >= previous && element <= next) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function sort(array) {

    let iterations = 0;
    let sorted = isSorted(array);

    while (!sorted) {

        iterations++;

        for (let pointer = 0; pointer < array.length - 1; pointer++) {

            let current = array[pointer];
            let next = array[pointer + 1];

            if (current > next) {

                array[pointer] = next;
                array[pointer + 1] = current;
            }
        }

        sorted = isSorted(array);
    }

    console.log("iterations for sort : " + iterations);
    return array;
}

const sortedArray = sort(testData);
console.log(sortedArray);
console.log("sorted ? : " + isSorted(sortedArray));



const knowObjects = new Map();
const generate = function*() {
    while (true) {
        const random = Math.random()
            .toString(16)
            .slice(2, 8);
        yield `0x${random}`;
    }
};
const generator = generate();

const refs = {};

const findRef = object => {
    let address;
    if (knowObjects.has(object)) {
        address = knowObjects.get(object);
    } else {
        address = generator.next().value;
        knowObjects.set(object, address);
        refs[address] = object;
    }
    return address;
};
const references = [dirInfo].map(p => findRef(p));
console.log(references);