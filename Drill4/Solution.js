
// each function
export function display(elements){  
  for(let index=0;index<elements.length;index++){
      console.log(elements[index]);
  }
 

}

export function each(elements, display) {  
    return display(elements);
   
  }  

// map function 
export function addTwo(element){ 
  let array=[] 
  for(let index=0;index<element.length;index++){  
      array.push(element[index]+2);
  } 
  return array 
} 
export function map(elements,addTwo){  
    return addTwo(elements);

    
} 
// reduce function
export function getEvenAndOdd(accumlator,items,){ 
  for(let index=0;index<items.length;index++){ 
      if(items[index]%2===0){
          accumlator.even.push(items[index]);
      } 
      else{
          accumlator.odd.push(items[index]);
      }
  } 
  return accumlator;

}
export function reduce(accumlator,elements,getEvenAndOdd){
  return getEvenAndOdd(accumlator,elements);
} 

// find function 
export function findElement(items,value){
  for(let index=0;index<items.length;index++){
    if(items[index]==value){
      return true;
    }
  } 
  return false
}
export function find(items,value,findElement){ 

  return findElement(items,value);
} 

// filter function  
export function getEven(items){ 
  let evenArray=[];
  for(let index=0;index<items.length;index++){
      if(items[index]%2==0){
          evenArray.push(items[index]);
      } 
  } 
  return evenArray;
}

export function filter(items,getEven){
  
  return getEven(items);
} 

// flatten function 
export function flatten(items){ 
  let array=[] 
  for(let index=0;index<items.length;index++){
    if(Array.isArray(items[index])){ 
      array+=array.concat(flatten(items.index));

    } 
    array.push(items[index]);
  } 
  return array
}