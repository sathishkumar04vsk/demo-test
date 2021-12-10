//2.write a functions Belwon
// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
function addFive(num){
    return num + 5
}

console.log(addFive(10))

// Write a function called “getOpposite”.
// Given a number, return its opposite

function getOppposite(data){

    if (data === 0)
        return 0

    if (Number.isInteger(data)) {
        return (-data)
    } else {
        return -1
    }

}
console.log(getOppposite(10));
console.log(getOppposite(-5));
console.log(getOppposite(3.4));
console.log(getOppposite("a"));



//Create a function that takes a string and returns it as an integer.

function strToNum(str){

    return +str

}

console.log(strToNum('100'))

// Create a function that takes a number as an argument, 
// increments the number by + 1 and returns the result.

function addOne(num){
    return num + 1
}

console.log(addOne(10))

// Create a function that takes an array and returns the first element.

function firstArrayEle(arr){
    return arr[0]
}

let arr = [1, 2, 3, 4]

console.log(firstArrayEle(arr))

// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function hourToSeconds(hour){
    return hour * 60
}

console.log(hourToSeconds(2))

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
function perimeterRect(l, b){
    return 2 * (l + b)
}

console.log(perimeterRect(10, 10))

// Calculate the sum of numbers received in a comma delimited string

let str = '1.5,2.3,3.1,4,5.5,6,7,8,9,10.9'

function sumOfStringArray(str){

    let stringArray = str.split(',').map(Number);
    let sum=0;
    for(var i in stringArray){
      sum+=stringArray[i];
    }
    
    return sum
}

console.log(sumOfStringArray(str))