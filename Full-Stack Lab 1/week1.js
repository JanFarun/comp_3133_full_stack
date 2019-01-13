//exercise 1
function capitalize(str){
    var x = str.split(" ");
    for (i=0;i < x.length;i++){
        x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1);
    }
    return x.join(" ");
}
console.log("Exercise 1\n"+capitalize("jan adam farun"));

//exercise 2
function largestNumber(num1,num2,num3){
 var numbers = [num1,num2,num3]
 var y = Math.max(...numbers)
 return y
}
console.log("\nExercise 2\n" + largestNumber(10,55,66))

//exercise 3
function right(str){
    if(str.length <= 3){

    console.log(str + " is too short,enter word with more than 3 characters")
    }
    else{
        str = str.slice(-3)+ str.slice(0,-3)
    }
    return str;
}
console.log(right("Janggg"))

//exercise 4
function angle_type(degree){

    if(degree >0 && degree<90){
        return "Acute angel"
    }
    else if(degree == 90){
        return "Right angel"
    }
    else if(degree >90 && degree <180){
        return "Obtuse angle"
    }
    else if(degree = 180){
        return "Straight angle"
    }
    else{
        return "I dont get it"
    }
}
console.log(angle_type(47))