import { display } from "../Drill4/Solution.js";
import {counterFactory,limitFunctionCallCount,add,cacheAdd,cacheFunction} from "./Solution.js"
// counterFactory function 

const value=counterFactory(); 
console.log(value.increment())
console.log(value.decrement());

// limitFunctionCallCount function 
let n=2;
const callFunction=limitFunctionCallCount(n,add);  
console.log(callFunction())
console.log(callFunction())
console.log(callFunction()) 

// cacheFunction 
const innerFunction=cacheFunction(cacheAdd); 
console.log(innerFunction("kani",23));



