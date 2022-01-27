'regular expression'

//"01/27/2022 01:39"
function dateTime(text){
    let validation = /\d\d\/\d\d\/\d\d\d\d \d\d:\d\d/;
    return text.match(validation); //match 
}

console.log(dateTime("01/27/2022 01:39"));
// console.log(dateTime("01-30-2003 15:20"));


function dateTime(text){
	let dateTime = /\d\d\/\d\d\/\d\d\d\d \d\d:\d\d/;
	return dateTime.test(text);// t f

}
console.log(dateTime(c));


