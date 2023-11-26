function evenOrodd(input) {
    if(input % 2 === 0){
        return "Number is Even";
    }else{
        return "Number is Odd";
    }
}

let result = evenOrodd(101);
console.log(result);