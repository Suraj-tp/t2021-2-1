// Problem-1: Create a small calculator which performs operations such as Addition, 
// Subtraction, Multiplication and Division using class.

// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’

// Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
// *********************************************************************************


class calculator {

    constructor(number1, number2, operator) {
        this.a = number1
        this.b = number2
        this.op = operator
    }

    operation() {
        let num1 = this.a
        let num2 = this.b
        let op = this.op

        if (op == '+') {
            console.log(num1 + num2);
        }
        if (op == '-') {
            console.log(num1 - num2);
        }
        if (op == '*') {
            console.log(num1 * num2);
        }
        if (op == '/') {
            if (num2 == 0) {
                console.log("Division by zero is not defined");
            }
            else {
                console.log(num1 / num2);
            }

        }
    }
}

var values = new calculator(30.8, 0.5, '*')
values.operation()