
function moveZero() {
    let nums = [0,1,0,3,12]
    let insertionPosition = 0;
    let len = nums.length;
    for (let index = 0; index < len; index++) {
       if(nums[index] != 0){
        nums[insertionPosition] = nums[index];
        insertionPosition++;
       }
        
    }

    while(insertionPosition < len){
        nums[insertionPosition++] = 0;
    }
    console.log(nums);
}

moveZero();

let first_array = [4,9,5];
let second_array = [9,4,9,8,4];

function arrayIntersection(first_array,second_array) {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
         for (let j = 0; j < second_array.length; j++) {
            if(first_array[i] === second_array[j]){
                if(!new_array.includes(first_array[i])){
                    new_array.push(first_array[i]);
                }
                
            }         
         }     
    }
    return new_array;
}

console.log(arrayIntersection(first_array,second_array));

let input = [34, 7, 21, 89, 54, 10, 91, 67];

function minAndmaxOfArray(input) {
    let max = input[0];
    let min = input[0];
    for (let index = 1; index < input.length; index++) {
        if(input[index] > max){
            max = input[index];
        }else if (input[index] < min){
            min = input[index];
        }
        
    }
    console.log(`Minimum value of an array is ${min} and Maximum value of an array is ${max}`);
}

minAndmaxOfArray(input);

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];

function removeDuplicate(inputArray) {
    let newArray = [];
    for (let index = 0; index < inputArray.length; index++) {
        if(newArray.includes(inputArray[index])){
            console.log("It is a duplicate value : "+inputArray[index]);
        }else{
            newArray.push(inputArray[index]);
        }        
    }
    return newArray;
}

console.log("New Array without duplicate value is : "+removeDuplicate(inputArray));