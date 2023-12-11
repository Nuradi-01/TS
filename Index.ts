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
   