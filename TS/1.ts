let a:number=46
let b : string="nani"
let c:boolean=true
let d:void
let e:any=12.4
let f:number[]=[1,2,3]
let g:Array<string>=["nan","man","jah"]
let h:[number,string,boolean]=[1,"nan",true]
interface interface_1 { 
    //properties declaration
     x:number;
 //function declaration
    fun: ()=>number
} 

var obj:interface_1 = { 
 x:1,
 fun:():number=>{return 2}
}

class A{
    p:number;
    constructor(z:number)
    {
        this.p=z
    }
    getp():void {
        console.log(this.p)
        
    }
}
function sum1(...a:number[]):number{
    var sum:number=0
    for(let i in a){
        sum=sum+a[i]
    }
    return  sum

}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(g)
console.log(h)
console.log(obj.x)
console.log(obj.fun())

var obj1= new A(4)
console.log(obj1.p)
obj1.getp()
console.log(sum1(1,2,3,4))

