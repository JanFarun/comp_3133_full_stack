//exercise 1
function greeter(myArray){
    var greetText = "Hello ";
    for(var index=0;index<myArray.length;index++){
        console.log(greetText+myArray[index])
    }
}
//greeter(["Randy","Rick","Hulk"],3);

function es6Greet(myArray){
    let greetText = "Hello"
    for(let i in myArray){
        console.log(`${greetText} ${myArray[i]}`)
    }
}
es6Greet(["Randy","Rick","Hulk"]);