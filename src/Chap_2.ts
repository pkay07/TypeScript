// here we see that how we define a data type

let num: number = 12;

let bool: boolean = false;

let guru: string = "Elon Musk";

// here we see the any data type when we don't declare the data type then that variable hold the any data type property which means that variable can accumulate any data type into it

let tum; // now this is any data type

// now here we see the union data type it means that variable can handle the any specified types of data into it

let sab: number | boolean | string; // now it can handle any type of value into it

// here we see that we need to specify the data type into a function so that it does not produce any problem

const kya = (a: number, b: number) => {
  return a + b;
};

// now here we see the regular expression

let re: RegExp = /\w+/g;
