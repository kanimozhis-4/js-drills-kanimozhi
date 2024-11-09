import {items} from "./arrays.js"
import {each,map,reduce,getEvenAndOdd,addTwo,display,find,findElement,filter,getEven,flatten}  from "./Solution.js"
// each function 

each(items,display); 

// map function 

let result=map(items,addTwo); 
console.log(result); 

// reduce function   

let evenAndOddArray={"even":[],"odd":[]}
evenAndOddArray=reduce(items,evenAndOddArray,getEvenAndOdd);
console.log(evenAndOddArray);

// find function  
let value=10;
let presentOrNot=find(items,value,findElement);
console.log(presentOrNot); 

// filter function 
let evenArray=filter(items,getEven);
console.log(evenArray);

// flatten function 
let array=flatten(items); 
console.log(array)
