#! /usr/bin/env node

// number guessing game with terminal hint in typescript by m.saleem

//This guess the number game is a short TypeScript/Node.js project that
//allows the user to guess the number generated by the compute.
//There are also several ways to alert the game, like adding more rounds
//or displaying the score. It's quite simple and uses the random function
//to generate a number 


console.log("guess a number between 1 to 8")

//creating variables

let a:number=Math.floor(Math.random()*8)
import inquirer from "inquirer";

while(true){
let input=await inquirer.prompt
({name:"guess",type:"number",
message:"enter your guess"})


//code for given number
let ans:number=input.guess

if (a==ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("sorry try again")}


//Adding hint
if (a>ans){console.log("hint: number is higher")}
else{console.log("hint: number is lower")}

console.log("GAME OVER")

}
