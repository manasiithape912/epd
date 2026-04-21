function toggleArray(arr, value){
  let index = arr.indexOf(value);
  if(index > -1){
    arr.splice(index,1);
  }else{
    arr.push(value);
  }
}