/*
//string
let str: string = 'lorem ipsum'
str = `Ipsum` // Строку можно изменить на строку 
// str = 456  Вот так будет ошибка так как это строковый тип данных, Так же и с boolean и number
let str_2: string = 'dollar'

//number
let num: number = 4.21
let num_2: number = 8452


//boolean
let bul: boolean = true
let bul_2: boolean = false


//null and undefined
let nul: null = null
let undf: undefined = undefined


//function Void

const f = ():void => {
    alert(`Htllo my name is ${str} `);//Void предназначен для определения отсутствующих типов 
     
}

// const x = ():void => {
//  return 45//будет ошибка так как void предназначен для определения отсутсвующих типов данных а тут Type number 
// }

const j = (): number => {
    return 45
   }
*/
/*lesson 2 */
/* Array 
let number: number[] = [1,2,3,4,5];
let number_2: Array<number> = [5,4,3,2,1];//второй тип
let str_1: string[] = ['kiwi','melon','watermelon','banana'];
let all: any[] = [123,'string',true];
*/

/* Tuple 
let t: [string,string,string,number]
t = ['Adam','Adminov','Adminovich',25]
let x: [string,string,string,number] = ['Black', 'Violet','White',6546]
*/

/*Any
let ann: any = 'Black'; //В задании написано Создать переменную 

let ann_1: Array <any> = ["Lorem", 42, {x:'Ipsum'}]

const f = (msg): any =>{
return msg
}
*/

/*Never 

//Функция будет возвращать ошибку и не заканчивает свое Выполнение
const infiniterror = (): never => {
    while(true){
      
    }
}

// let n: never = 'hello' //Error
// let n: never = 25 // Error
// let n: never = true // Error Во всех случиях будет ошибка 

const error = (): never => {
    throw new Error()
}
*/

/* Object 
let obj = {
    book: 'Think and Grow Rich', 
    author: 'Napoleon Hill', 
    Date:1937
}
let obj_2 = {
    name: 'Adam',
    surname: 'lincodov',
    age: 25,
}

const retfun = (ob: object | undefined): void => {

}
retfun({abj:14}) //принимает объект и ничего не возвращает 
retfun(undefined) // Просто ради интереса)

*/

/* Type 
//1
type Person = {
    name:string,
    age: number,
}
//2
type Product = {
    name: string,
    price: number,
    inStock:boolean,
}
//3
type User = {
    id:number,
    userName: string,
    email:string,
}
//4
type Account = {
    id:number,
    balance:number,
}

let persons: Person = {
    name: 'Alex',
    age: 44,
}
*/




