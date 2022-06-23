const testData = [1, -2, 3, 2, 2, 3, 100, 5, 4, 70, 3.16];

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