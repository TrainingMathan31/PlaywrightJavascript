function checkNumberType(numberType) {
    if(numberType > 0){
        return "Number is greater than 0";
    }else if(numberType < 0){
        return "Number is less than 0";
    }else{
        return "Number is equal to 0";
    }
}

let output = checkNumberType(1);
console.log(output)