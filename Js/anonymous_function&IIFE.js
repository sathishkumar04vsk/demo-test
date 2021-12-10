//1.Do the below programs in anonymous function & IIFE

//a.print odd numbers in an array
var result=(function(arr){
    var arrr=[];
    for(var i in arr){
        if(arr[i]%2!==0){ 
            arrr.push(arr[i])  
        }
        } 
        return arrr;
    })([1,2,3,4,5,6,7,8]);
    console.log(result);


//b.Convert all the strings to title caps in a string array
var Captitle=(function(arr1){
    var res=[];
    for(var j in arr1){
    res.push(arr1[j][0].toUpperCase()+arr1[j].slice(1));
    }
    return res;
})(["harish","magesh","vinay","manjunath"]);
console.log(Captitle);


//c.Sum of all numbers in an array
var resultsum=(function(data){
    var sum=0;
  for(var k=0;k<data.length;k++){
      sum+=data[k];
  }
return sum;

})([1,2,3,4,5,6,7,8,9]);
console.log(resultsum);


//d.Return all the prime numbers in an array
var resultprime=(function(Arr){
    return(Arr.filter((iteam)=>{
        for(var l=2;l<iteam;l++){
        if(iteam%l===0)
            return false;
        
        
    }
    return true;
}))
   
})([1,2,3,4,5,6,7,8,9]);
console.log(resultprime);


//e.Return all the palindromes in an array
var result_pallindrome=(function(palarr){
    return(palarr.filter((iteam)=>{
        let temp=iteam+"";
        if((temp.split('').reverse().join(''))===iteam+""){
        return true;
    }

    return false;
    }))
})([121,211,12321,53221]);console.log(result_pallindrome);


//f.Return median of two sorted arrays of same size
var medianresult=(function(arr11,arr12){
    let n=arr11.length;
    let j=0;
    let i=n-1;
    while(arr11[i]>arr12[j]&& j<n && i>-1){
        let temp = arr11[i];
        arr11[i]=arr12[j];
        arr12[j]=temp;
        i--;
        j++;
    }
    arr11.sort(function(a,b){return a-b});
    arr12.sort(function(a,b){return a-b});
    return parseInt((arr11[n-1]+arr12[0])/2,10);
})
([3,4,15,26,38],[2,13,17,30,45])
   console.log(medianresult);


//g.Remove duplicates from an array
let resultDup = ((arrDup, index) => {

    return [...new Set(arrDup)]

})([22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]
    )

console.log(resultDup)


//h.Rotate an array by k time
let resultShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})([0, 1, 5, 6, 7, 9], 3)

console.log(resultShifted);