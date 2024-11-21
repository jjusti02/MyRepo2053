// alert("Hello World");


var hello = "Hello World"; 

console.log("this is good for debugging " + hello);


function print3Ways(){
    alert("Hello World (alert)");
    console.log("Printing to console");
    document.write("this will re-write the HTML page");
}

const arr = [4,6,2,3,8,32,11,21,44];

function funWithArrays(){
    document.write("The sum is " + getSum(arr));
    
    document.write("<br>The min is " + findMin(arr));
    
    document.write("<br>The max is " + findMax(arr));
    
    document.write("<br>The average is " +  average(arr));


}

function getSum(arr){
    let sum = 0;
    for(let num of arr){
        sum = sum + num;
    }
    return sum;
}


function findMin(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){

        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function average(arr){
    let sum = 0;
    let average = 0;
    for(let num of arr){
        sum = sum + num;
    }
    average = sum / arr.length
    return average;

}



function firstFunction(callback){
    console.log("About to execute the callback function");

    callback();

}

function myCallbackFunction(){
    console.log("This is the callback function that does something special");

}

function soManyFunctions(){
    console.log("In soManyFunctions. Begin the function calls.");
    firstFunction(myCallbackFunction);
    console.log("Returning to soMnayFunctions");
    

}