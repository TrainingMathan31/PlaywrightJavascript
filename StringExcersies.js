let input = "   fly me   to   the moon  ";
function getLastSubString() {
    input = input.trim();
    let output = input.split(/\s+/);
    console.log(output);
    console.log("Length of the last String is : "+output[output.length - 1].length);
}

getLastSubString();


let s1 = "Listen";
let s2 = "Silent";

function anagram() {
    if(s1.length === s2.length){
        let data1 = s1.toLowerCase().split("").sort().join('');
        let data2 = s2.toLowerCase().split("").sort().join('');
        console.log(data1,data2);
        if(data1 === data2){
            console.log(s1,s2+" both the strings are Anagram.")
        }else{
            console.log(s1,s2+" both the strings are not Anagram.")
        }

    }else{
        console.log("Length is differing so, It is not Anagram")
    }
}

anagram();