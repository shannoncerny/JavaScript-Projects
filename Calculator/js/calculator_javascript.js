//creates an object to keep track of values
const Calculator = {
    //displays 0 on the calculator screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, set to null for now
    First_Operand: null,
    //checks wether or not the second operand has been inputted by user
    Wait_Second_Operand: false,
    //holds the operator, set to null for now
    operator: null,
};

//modifies values each time a button is clicked on
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checks in wait_second_operand is true and sets display_value to the key that was clicked on
    if (Wait_Second_Operand ===true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites display_value if the current value is 0, otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//decimal point section
function Input_Decimal(dot) {
    //ensures that accidental clicking of decimal point doesnt cause bugs in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; 
    }
}

//operator section
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator exsists and if wait_second_input is true, then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks to see if operator already exsists
        const Value_Now = First_Operand || 0;
        //if operator exsists, property lookup is performed fr the operator in the perform_calculation object
        //the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add a fixed amount of numbers after decimal
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//This function updates the calculator screen with the contents of display_value
function Update_Display() {
    //makes use of the calculator-screen class to target input tag in html doc
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//button clicks section
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is an object that represents the element that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that ac clears all inputs from calculator screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})