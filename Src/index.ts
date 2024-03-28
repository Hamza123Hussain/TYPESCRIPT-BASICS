// type casting as number
let age:number=3
if(age<10)
age+=1;

// type casting an array as number
let numarray:number[]=[1,3,43,4,44]

// do not leave array or elements as any type
// let x; let arr=[]

// type casting of tuples
// keep at most 2 types in the tuple
let multiplearray:[number,string]=[32,'32']


// enum
const enum size {small=2,medium,large}
let mysize:size=size.medium
console.log(mysize)

//FUNCTION
// we have turned on unused paramters and local in config file to remove errors
// the return type is set to number
// if tax year is not passed then default value will be used 
function caltax(tax:number,taxyear:number=2022):number{

    if(taxyear<2021){
        return tax*3
    }


    return tax*1.3
}

caltax(377,2013)

/// OBJECTSSS

let emp:{
    readonly id:number, // readonly means this can not be edited
    name:string,
    retire:(date:Date)=>void // function propety of an object
}={
    id:1,
    name:'',
    retire:(date:Date)=> {
    console.log(date)
    },
}

// refinng objs using type alias

type Human={ // this is the type alias
    // the propties of object defined here
    // can be used by all object instances
    readonly id:number,
    Name:string,
    Age:number
}

let person:Human={
    id:1,
    Name:'hamza',
    Age:23
}

//UNION TYPES
// using the or oeprator we can give multiple types to a data
function Kg_to_LB(weight:number|string):number{


    if(typeof weight=="number"){// we have to do type of when giving multiple types to a data
        // type of helps to use propeties of  a given data type
        return weight*2.2
    }
    else{
        // parse int is a propety of string data type
        return parseInt(weight)*2.2
    }
}

Kg_to_LB(30)
Kg_to_LB("42")

// intersection types

type Draggable={
    drag:()=>void}


type resize={
        resize:()=>void}

        // the uiwidget consits of both of the types
 type UIWIDGET= Draggable&resize       

 let textbox:UIWIDGET={
    drag:()=>{}, // this is function of first type
    resize:()=> { // function of second type
        
    },
 }