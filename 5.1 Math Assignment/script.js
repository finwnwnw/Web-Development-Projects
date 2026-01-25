// let decimalNumbers = [2.1, 3.7, 6.4, 4.6, 8.5]

// let calculateMean = (numbers) => {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     console.log(sum)
//     let mean = sum / numbers.length;
//     console.log(mean)
// }

// let mean = calculateMean(decimalNumbers)
// console.log(mean)



// let numbers = [5, 6, 3, 2, 7]
// let sum = 0;

// function calculateMean() {
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     let mean = sum / numbers.length;
//     console.log(mean)
// }

// calculateMean()



let integers = [5, 6, 4]

function calculateMean(decimalNumbers) {
    let sum = 0
    for (let i = 0; i < decimalNumbers.length; i++) {
        sum += decimalNumbers[i]
    }
    return sum / decimalNumbers.length
}

let mean = calculateMean(integers);
let roundedMean = Math.round(mean);
let resultMessage = "The mean is: " + roundedMean;
console.log(resultMessage)
console.log(mean)

