function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    console.log(firstNumber);
    console.log(secondNumber);
    result.innerText = firstNumber - secondNumber
}