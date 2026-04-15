// Hint

// const num = 5

// switch(num) {
//     case 1:
//         console.log("Number is 1")
//         break;
//     case 2:
//         console.log("Number is 2")
//         break;
//     case 5:
//         console.log("Number is 5")
//         break;
//     default:
//         console.log("Other")

// }

function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value)
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter a valid number!'
    } else {
        switch (operation) {
            case 'add':
                result = `${number1} + ${number2} = ${number1 + number2}`;
                break;
            case 'subtract':
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break
            case 'multiply':
                result = `${number1} × ${number2} = ${number1 * number2}`;
                break;
            case 'divide':
                if (number2 === 0) {
                    result = 'Cannot be divided by 0'
                } else {
                    result = `${number1} ÷ ${number2} = ${number1 / number2}`;
                }
                break;
            default:
                result = 'Unknown operation'
        }

        function showResult(result) {
            document.getElementById('result').innerText = result;
        }

        showResult(result)
    }
}