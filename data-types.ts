// You can check the type of a variable by entering typeof.
// Example: 

	let testVariable: any
    testVariable = "We love Pakistan"
	console.log(typeof testVariable);
let aB = testVariable.toLocaleUpperCase();
console.log(aB);
// The variables in TypeScript cannot change types. Example: 
	let a = 2; 
	// a = “2”; //Error
	
// chat gpt example


function printMessage(message: string | number) {
    if (typeof message === "string") {
        console.log(message.toUpperCase());
    } else {
        console.log(message.toFixed(2));
    }
}

printMessage('my name is Ali Kamran')
printMessage(33.7797879789)

function mes(value: any ) {
    if (typeof value === "string")
    {
        return console.log(value.toLocaleUpperCase())

    } else if (typeof value === "number") {
        console.log(value.toFixed(2));

    } else {
                return console.log('unknown data type');
    }
}

mes(1)
