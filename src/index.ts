// let x: number = 0;

// let y: string = " helloworld";
// let z: boolean = true;
// let a: any = 10;
// let b: any = "hello";
// let c: any = true;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);


// const sum = ( a: number, b: number) => {
//     return a + b;
// }
// console.log("sum result: ", sum(10, 20));
// let aa: number;
// const isLegal = (age:number): boolean => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// } // undefined, not an error
// const res : boolean= isLegal(-654564);
// console.log("isLegal result: ", res);
// const delayedCall = (fn: () => number) => {
//     setTimeout(fn,1000)
    
// }

// delayedCall(() => {
//     console.log(" hellow")
//     return 10;
// })

// // a function which takes function as argument but this fucntion does not have any paramer
// // and does return anything , void is used
// const s=(fn:()=>void) => {
    
// }
// s(() => {
//     console.log(" hejdsjkf")
// })

// //how to give types to user object which contains key value pair data
// const greet = (user: {
//     name: string,
//     age: number,
//     valid:boolean
// }) => {
//     console.log("hello "+user.name)
    
// }
// greet({
//     name: "eeeshu",
//     age: 55,
//     valid:false
// })

// // =========================
// //type in object
// function greet2(user1: {
//     firstname: string,
//     age:number
// }) {
    
// }
// let user1: {
//     firstname: string,
//     age:number
// } = {
//     firstname: "eeshu",
//     age:32
// }
// //------------------------------------
// //interface in typescript
// interface UserType{
//     firstname: string,
//     lastname: string,
//     age:number,
// }
// function greet3(user: UserType) {
    
// }
// let user3: UserType = {
//     firstname: "eeshu",
//     age: 21,
//     lastname:"narayan"
    
// }

// // ========================================
// //type in TypeScript

// type SumInput = string | number;
// // const sum1 = (a:SumInput,b:SumInput) => {
// //     return a+b
// // }


// function greet5(name: string): string{
//     return "hello"+name
    
// }

// function isEven(num: number): boolean{
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false
//     }
// }
// let result = isEven(55);
// console.log(result)

// //--------------Interface
// interface User{
//     name: string,
//     age: number,
//     address:{
//         city: string,
//         country: string,
//         pincode:number
//     }
// }
// const isLegal2 = (user: User): boolean => {
//     if (user.age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
    
// }
// isLegal2({
//     name:"eeshu",
//     age: 34,
//     address: {
//         city: "djfldj",
//         country: "djfdj",
//         pincode:5545
//     }
// })

// //---------------------------------------------------
// interface Address{
//     city: string,
//     country: string,
//     pincode: number,
//     houseNumber:number
// }
// interface User5{
//     name: string,
//     age: number,
//     address:Address
// }
// interface Office{
//     address:Address
// }


// ------------------------------------
// interface People{
//     name: string,
//     age: number,
//     greetings:()=>string
// }
// let person: People = {
//     name: "eeshu",
//     age: 21,
//     greetings: () => {
//         return "hi"
//     }
// }
// let resutss = person.greetings();
// console.log(resutss)

//     Class
// interface People{
//     name: string,
//     age: number,

// }

// class Manger implements People{
//     name: string;
//     age: number;
//     number: string;
//     constructor(name: string, age: number){
//     this.name = name;
//         this.age = age;
//         this.number="4444444444"
    
//     }

// }
// const user = new Manger("john", 21);
// console.log(user.name, user.age);
// class dnd extends
// class Shape{
//     area() :string{
//         return "area";
//     }
// }
// class Rectangle extends Shape{
//     width: number;
//     height: number;

//     constructor(width:number,height:number) {
//         super();
//         this.width =width;
//         this.height = height;
//     }
// }
// let result = new Rectangle(433, 3434);
// console.log(result)
//abstract class in TypeScript

abstract class Animal {
  abstract makeSound(): void; // must be implemented by subclass

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Woof!
dog.move();      // Moving...
console.log("helo world");