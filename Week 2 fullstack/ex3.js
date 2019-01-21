function capitalize(word){
    var first = word.slice(0,1) 
    var str = [...word.slice(1)];
    return first.toUpperCase()+str.join("");  
 }

const colors = ["red","green","blue"]
const x = colors.map(x=> capitalize(x))
console.log(x);