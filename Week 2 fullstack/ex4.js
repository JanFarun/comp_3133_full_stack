var values = [1,60,34,30,20,5]
function filterLessThan20(array){
return array < 20;
}

var filtered = values.filter(filterLessThan20)
console.log(filtered)