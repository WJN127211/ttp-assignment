//define the function to create the array
function range(begin,end,step=1){
    const result=[];
    if(step>=0){
        for(let i=begin;i<=end;i+=step){
            result.push(i);
        }
    }else{
        for(let i=begin;i>=end;i+=step){
            result.push(i);
        }
    }
    return result;
}
let array = range(1,10);
let sum = array.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum);