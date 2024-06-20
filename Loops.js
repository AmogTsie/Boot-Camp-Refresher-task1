//Exercise 1: Temperature check

//Exercise 1.1

let temp = 15;
let sign;

//if (temp >= 25){
//    console.log("It's warm");
//}
//else if (temp >= 16){
//     console.log("It's mild");
//}
//else if (temp >= 15){
//     console.log("It's cold");
//}
//else if (temp >= 0){
//     console.log ("It's freezing!"):
//}

switch (true){
     case temp >= 25:
        sign = "It's warm."
        break;
    
    case temp >= 16:
        sign = "It's mild."
        break;
    
    case temp >= 15:
        sign = "It's cold."
        break;
    
    default:
        sign = "It's freezing!"
        break
    
}

console.log(sign);

//Exercise 2: Divisibility Check

// Exercise 2.1

//let numDiv = 77;

//if (numDiv% 2 === 0 && numDiv% 3 ===0){
  //  console.log("Divisable by Both");
//}else if (numDiv% === 0){
  //   console.log ("Divisable by 2");
//}else if (numDiv% 3 === 0){
  //   console.log("Divisable by 3");
//}else if (!numDiv% 2 === 0 && !numDiv% 3 === 0){
  //   console.log("Not divisable by 2 or 3");
//}

//Exercise 2.2

let numDiv;
let output;

switch(true){
    case numDiv% 2 === 0 && numDiv& 3 === 0:
        output = "Divisable by Both";
        break
    case numDiv% 2 === 0:
        output = "Divisable by 2";
        break
    
    case numDiv% 3 === 0:
        output = "Divisable by 3"
        break
    
    case !numDiv% 2 === 0 && numDiv% 3 === 0:
        output = "Not divisable by 2 or 3";
        break;
}

//Exercise 3.: For Loops

//Exercise 3.1

//for(let i = 1; i <= 10; i++){    
 //   console.log(i);
//}

//Exercise 3.2
for(let i = 1; i <= 20; i++){
    if (i%2 === 0){
        console.log(i);
     }
}

//Exercise 3.3 

// let f = 0;

//for(let d = 1; d <= 100; d++){
//    f = f + d
//    console.log(f);
//}

//Exercise 3.4

//const numbers = [1, 2, 3, 4, 5]
//console.log( numbers)


//Exercise 3.5 

//const number = [3, 7, 2, 5, 10, 6]

 //console.log(number[4])

 //Exercise 4: While Loops

 //Exercise 4.1

// let numloop = 1;

// while( numloop <= 10){
//    console.log(numloop);
//    numloop++;
// }

//Exercise 4.2

//function evenNum(){
//     let n = 1
//     while( n <= 20){
//        console.log(n)
 //       n+= 2
//     }
//}
//evenNum();

//Exercise 4.3 

//let e = 0; 
//let t = 1;
//while( t <= 100 ){
 //   console.log(t);
 //    t++;
 //    e += t;
//}

//Exercise 4.4
    
//let o = 5;

//while( o <= 50 ){
  //  console.log(o);
  //    o+=5;
//}

//Exercise 5: DoWhile Loops

//Exercise 5.1

//let k = 1;

//do{
//    console.log (k);
//    k++;
//}while(k <= 10);

//Exercise 5.2 

//let f = 0;

//for(let d = 1; d <= 100; d++){
  //  f = f + d
    //console.log(f);
//}

//let m = 1;
//let h = 0;
//do{
//  console.log(m);
//  m++;
//  h += m;
//}while( m<=100 );


//Exercise 5.3

//let numDo ;

//do{
 // numDo= prompt("Enter number greater than 10")
 // if(numDo > 10){
 //   console.log("Congratulations");
 // }else{
 //   console.log("Give correct number...")
 // }
//}while(numDo <= 10)


//Exercise 5.4

let guess =""
let rightguess = "4"

do{
  guess = prompt("Guess a number between 1 and 10");
    if(guess === rightguess){
      console.log("Yipppy you did it!!")
    }else{
      console.log("Try again kiddo.")
    } 
}while( guess >= 10)