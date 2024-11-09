import {testObject} from "./object.js" 
import {keys,values,mapObject,add,pairs,invert,defaults} from "./Solution.js"

// key function 
const keyArray=keys(testObject);
console.log(keyArray); 

// value function 
const valueArray=values(testObject);
console.log(valueArray); 

// mapObject function 
const object=mapObject(testObject,add);
console.log(object);

// pairs function 
const pairArray=pairs(testObject); 
console.log(pairArray); 

// invert function  
const invertObject=invert(testObject);
console.log(invertObject); 

//  defaults function 
const defaultProps ={age:"25"}
const defaultValue=defaults(testObject,defaultProps) 
console.log(defaultValue);