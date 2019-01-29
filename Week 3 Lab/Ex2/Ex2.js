const arrayOfNames = ['jaxx','tiny','clay'];
const mixedAray = ['anarchy',99,true];

function sortWords(array){
    return array.sort();
}
function makeUpperCase(array){
return new Promise((resolve,reject) => {
    for (i of array){
        if(typeof(i)=='string'){
            var result = array.map(a => a.toUpperCase());
            resolve(result)
        }
        reject(new Error('Not all items in the array are strings!'));
    }
});
}
makeUpperCase(mixedAray)
.then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error));