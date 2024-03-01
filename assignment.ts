

console.log('*************************** BASIC TYPES ******************************');
//assigns a number to num variable
let num: number=10;
//assigns a string to str variable
let str: string="TypeScript";
//assigns a boolean value to a variable isArray
let isArray: boolean=false;
//assigns an array of numbers to a numarr variable
let numarr: number[]=[1,2,3,4,5];
//assigns a tuple with elements of type string and number to a variable tup
let tup: [string,number]=["Hello",20];
//Enum for the Daya of the Week
enum DaysOfWeek{Monday,Tuesday,Wednesday,Thursday,Friday,Saturday};
//Displays the data
console.log("Number is : "+num);
console.log("String is : "+str);
console.log("Boolean : "+isArray);
console.log("The numbers are : "+numarr);
console.log("The tuple is : "+tup);
console.log("Enum (Saturday) : "+DaysOfWeek.Saturday);


console.log('****************************** FUCTIONS *******************************');
//function to add two numbers
function add(x: number,y: number)
{
    return (x+y);
}
//Displays the addition of two numbers
console.log("The addition of two numbers is: "+add(10,20));

//function to change the string to uppercase
function cap(s: string)
{
    return String(s.toUpperCase());
}
//Displays the capitalized of string
let s: string = "typescript";
console.log("Capitalized form of "+ s +" is "+cap(s));



console.log('*************************** INTERFACES ******************************');
//Defining an interafce
interface Person
{
    name: string;
    age: number;
    email: string;
}
//using an interface 
let user: Person={
    name:"Tanuja",
    age: 20,
    email: "tanujayamana@gmail.com",
}
//Displays the data
console.log("User data :",user)



console.log('****************************** CLASSES *******************************');
//Defining a class
class Car
{
    make: string;
    model: string;
    year: number;
    //Defining a constructor
    constructor(make: string,model: string,year: number)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    //Defining a method
    displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
}
let cardata: Car=new Car("Suzuki","abc",2020);
//Displaying the Car information
cardata.displayInfo();



console.log('****************************** GENERIC FUCTION *******************************');
//Generic function
function revarr<T>(a: T[]): T[]
{
    return a.reverse();
}
var a: any[]=[11,"HI",31,41,51,"Hello"];
//Displaying the reversed array
console.log("Reversed array is: "+revarr(a));