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