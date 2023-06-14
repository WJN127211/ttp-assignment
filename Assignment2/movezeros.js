function movezeros(nums){
    let length = nums.length;
    let nonzero = nums.filter(function(number) 
    { return number !== 0; 
        
    });
    for(let i=nonzero.length;i<length;i++){
        nonzero.push(0);
    }
    return nonzero;
    
}
let arr =[0,1,0,3,12];
arr = movezeros(arr);
console.log(arr);