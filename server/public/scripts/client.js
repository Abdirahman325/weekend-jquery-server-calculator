
$(document).ready(onReady);

function onReady() {
    console.log('js ready!');
    //have past entries stay on DOM
    //getAnswers();
    //click listeners
    $('#equalButton').on('click', makeNumberObject);
    $('#plusButton').on('click', addPlus);
    $('#minusButton').on('click', addMinus);
    $('#multiplyButton').on('click', addMultiply);
    $('#divideButton').on('click', addDivide);
    $('#clearButton').on('click', clearInputs);
    $('#resetButton').on('click', clearDom);
}
