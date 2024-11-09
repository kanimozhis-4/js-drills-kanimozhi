import {keys} from "../Drill5/Solution.js"
// counterFactory function  

export function counterFactory(){
    let counter=0; 
    function increment(){
        counter++; 
        return counter;
    } 
    function decrement(){
        counter--;
        return counter;
    } 
    return {increment,decrement}
} 

// limitFunctionCallCount function 
export function add(counter){
    counter++;
    return counter;
}
export function limitFunctionCallCount(n,add){
    let counter=0; 
    function innerFunction(){ 
        if(counter<n){ 
            counter=add(counter);
            return counter
        } 
        else{
            return null;
        }

    } 
    return innerFunction;
} 

// cacheFunction 
export function cacheAdd(key,value,cache){
    cache[key]=value; 
    return cache;
}
export function cacheFunction(cacheAdd){
    let cache={};
    const cacheKey=keys(cache);
    function insideFunction(key,value){ 
        if(cacheKey.includes(key)===false){
            cache=cacheAdd(key,value,cache); 
            
        }  
        let name=JSON.stringify(key);
        return {name:value}
    } 
    return insideFunction;
}