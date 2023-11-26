function calculateGrade(score) {
    switch (true) {
        case (score >= 90):
           return "A";
        case (score >= 75):
            return "B";  
        case (score >= 60):
            return "C"; 
        case (score >= 35):
            return "D"; 
        default:
           return "Done"
    }
}

let result = calculateGrade(85);
console.log(result);