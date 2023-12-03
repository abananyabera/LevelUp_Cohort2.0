function arithmaticOperation(a, b, fnToCall){
    let result = fnToCall(a,b);
}

function sum(a, b){
    console.log("Sum of a and b is: "+(a+b));
}

arithmaticOperation(1,2, sum);