function arrayToList(arr){
    let list =null;
    for(let i=arr.length-1;i>=0;i--){
        list ={value:arr[i], rest:list};
    }
    return list;
}

function listToArray(list){
    let newArray=[];
    while(list!=null){
        newArray.push(list.value);
        list=list.rest;
    }
    return newArray;
}

function prepend(element,list){
    list = {value:element,rest:list};
    return list;
}

function nth(list,index){
    if(index===0){
        return list.value;
    }else{
        list=list.rest;
        return nth(list,index-1);
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(prepend(10, prepend(20, null)));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(arrayToList([10, 20]));