let arr =["A", "B", "C"];
let arr1 = arr;
function reverseArray(arr){
    const newArray=[];
    
    for(let i=arr.length-1;i>=0;i--){
        let element = arr[i];
        newArray.push(element);
    }
    return newArray;
}

function reverseArrayInPlace(arr){
    let length =Math.floor(arr.length/2);
    
    for(let i=0;i<=length;i++){
        const temp =arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    
}
reverseArrayInPlace(arr);

console.log(arr);