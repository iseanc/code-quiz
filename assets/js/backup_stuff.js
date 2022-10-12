// NOTE: Code is using the questions ARRAY instead of this object
var questionsObject = [
    { 
        question: "What is a characteristic of <i>first-class functions</i>?",
        answers: { 
            a: "They can be passed as an argument to other functions.",
            b: "They can be returned by another function.",
            c: "They can be assigned as a value to a variable.",
            d: "All of the above are characteristics of first-class functions."
        },
        correct: "d"
    },
    { 
        question: "The primitive data types in JavaScript are __________.",
        answers: { 
            a: "string, number, bigint, boolean, undefined, symbol, and null",
            b: "number, binary, decimal, Unicode, ASCII, and hexadecimal",
            c: "multiplication, division, addition, and subtraction",
            d: "int, byte, short, long, float, double, boolean, and char"
        },
        correct: "a"
    },
    { 
        question: "What is the output of <code>console.log(3 + 3 * 5 % 2);</code>",
        answers: { 
            a: "9",
            b: "4",
            c: "0",
            d: "1"
        },
        correct: "b"
    },
    { 
        question: "Which of the following is false?",
        answers: { 
            a: "<code>'10' == 10</code>",
            b: "The values <code>false</code>, <code>0</code>, <code>\"\"</code> (empty string) and <code>undefined</code> are all <i>falsy</i> values.",
            c: "<code>false</code>",
            d: "<code>false === false</code>",
        },
        correct: "c"
    },
    { 
        question: "Given a function <code>var greetings = function() { return 'Hello, World!' };</code>, which statement is correct?",
        answers: { 
            a: "It is a <i>function declaration</i> that can be invoked <i>anywhere</i> in the code.",
            b: "It is a <i>function expression</i> and may only be invoked <i>after</i> it has been declared.",
            c: "It is a <i>function declaration</i> and can only be invoked <i>after</i> it has been declared.",
            d: "It is a <i>function expression</i> and it can be invoked <i>anywhere</i> in the code."
        },
        correct: "a"
    }
]