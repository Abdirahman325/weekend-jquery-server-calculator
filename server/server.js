const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

//store these in an array to keep the history
let equationString = [];
let equation;


// get body parser started
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//post requests
app.post('/calculator', (req, res) => {
    let equation = req.body;
    let firstNum = equation.firstNumber;
    let secondNum = equation.secondNumber;
    let operator = equation.operator;

    if (operator === "+") {
        let outcome = Number(firstNum) + Number(secondNum);
        equation = `${firstNum}${operator}${secondNum} = ${outcome}`;
        equationString.push(equation);
    }
    else if (operator === "-") {
        let outcome = Number(firstNum) - Number(secondNum);
        equation = `${firstNum}${operator}${secondNum} = ${outcome}`;
        equationString.push(equation);
    }
    else if (operator === "*") {
        let outcome = Number(firstNum) * Number(secondNum);
        equation = `${firstNum}${operator}${secondNum} = ${outcome}`;
        equationString.push(equation);
    }
    else if (operator === "/") {
        let outcome = Number(firstNum) / Number(secondNum);
        equation = `${firstNum}${operator}${secondNum} = ${outcome}`;
        equationString.push(equation);
    }
    res.sendStatus(201);
})

app.get('/calculator', function (req, res) {
    console.log('in get function');
    res.send(equationString);
    equationString = [];
})


app.listen(PORT, () => {
    console.log('server is running on', PORT)
});


//GET EMPTY ARRAY
app.get('/clearDom', function (req, res) {
    console.log('in clearDom');
    equationString = [];
    res.send(equationString);
})

