//1.Declare four variable without assigining values and print them in console
var value;
var value1;
var value2;
var value3;

console.log(value);

//2.How to get value of the variable myvar as output
var myvar=1;
console.log(myvar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="sathish";
var lastname="kumar";
var marital_status="unmaried";
var country="india";
var age=21;
console.log(firstname);

//4.Declare variables to store your first name, last name, marital status, country and age in single lines
var detial=[firstname="sathish",lastname="kumar",marital_status="unmaried",country="india"];
console.log(firstname);

//5.Declare variables and assign string, boolean, undefined and null data types
var val="I am";
var age=25;
var val2="years old" 
var val3;
var val4=true;
console.log(typeof(val));
console.log(typeof(age));
console.log(typeof(val3));
console.log(typeof(val4));

//6.Convert the string to integer
let num="34";
console.log(+num);
console.log(parseInt(num));
console.log(Number(num));

//7.Write 6 statement which provide truthy & falsey values
var a=11;
var b=12;
if (a===b){
    console.log(true);
}
else if(a!==b){
    console.log(true);
}