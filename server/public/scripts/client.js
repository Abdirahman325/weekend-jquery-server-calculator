
$(document).ready(onReady);

function onReady() {
    console.log('js ready!');
    //have past entries stay on DOM
    getAnswers();
    //click listeners
    $('#equalButton').on('click', makeNumberObject);
    $('#plusButton').on('click', addPlus);
    $('#minusButton').on('click', addMinus);
    $('#multiplyButton').on('click', addMultiply);
    $('#divideButton').on('click', addDivide);
    $('#clearButton').on('click', clearInputs);
    $('#resetButton').on('click', clearDom);
}

let operator;

//post requests


//making the object to send to the server
function makeNumberObject() {
    console.log('clicked equals')
    firstNumber: Number($('#firstNumber').val()),
        secondNumber; Number($('#secondNumber').val()),
        operator: operator

    }
    console.log(calcsToDo);
    //post inputs to server

$.ajax({
    method: 'POST',
    url: '/calculator',
    data: calcsToDo
}).then(function (response) {
    console.log(response);
    getAnswers();
})
    //empty input
    $('input').val('');


//get requests

function getAnswers() {
    $.ajax({
        url: '/calculator',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        $('#answerHistory').append(`<li>${response}</li>`);

    })

}

// operator functions
function addPlus() {
    let operatorToPost = "+";
    operator = operatorToPost;
}

function addMinus() {
    let operatorToPost = "-";
    operator = operatorToPost;
}

function addMultiply() {
    let operatorToPost = "*";
    operator = operatorToPost;
}

function addDivide() {
    let operatorToPost = "/";
    operator = operatorToPost;
}


function clearInputs() {
    $('input').val('');
}

function clearDom() {
    console.log('yessir');
    $.ajax({
        method: 'GET',
        url: '/clearDom'
    }).then(function (response) {
        operator = '';
        $('#answerHistory').empty();
        $('#answerHistory').append(response);
    })
};