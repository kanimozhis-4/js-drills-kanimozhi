
// keys function

export function keys(obj) { 
    let keyArray=[];
    for (let key in obj){
        keyArray.push(key);
    } 
    return keyArray;
    
  } 
// values function
export function values(obj) { 
    let valueArray=[];
    for(let key in obj){
        valueArray.push(obj[key]);
    } 
    return valueArray;
} 
// mapObject function 
export function add(key,obj){ 
    let number=2;
    obj[key]=obj[key]+number;
    return obj[key];
    
}

export function mapObject(obj){ 
    for(let key in obj){
        obj[key]=add(key,obj)
    }
    return obj;
} 

// pairs function 
export function pairs(obj){
    let pairArray=[];
    for (let key in obj){
        let array=[];
        array.push(key);
        array.push(obj[key]);
        pairArray.push(array);
    }  
    return pairArray;
   
} 

// invert function 
export function invert(obj){ 
    let invertObject={};
    for(let key in obj){
        let temp=obj[key]; 
        invertObject[temp]=key;
        
    } 
    return invertObject;
} 

// default function 
export function defaults(obj,defaultProps){ 
    let defaultKey=Object.keys(defaultProps)
    for(let key in obj){
        if(defaultKey[0]==key){
            obj[key]=defaultProps[key];
        }
    } 
    return obj;

}
  