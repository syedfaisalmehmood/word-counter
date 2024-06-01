#! /usr/bin/env node

//create a project of Word Counter in TypeScript....
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colorful Welcome message
console.log(chalk.bold.cyanBright("\n\t\t\t\tWord Count - Assignment"));
console.log(chalk.red("=".repeat(90)));

//Prompt the user name to enter a sentence
let answer = await inquirer.prompt([
  {
    name: "sentence",
    type: "Input",
    message: "Enter a Sentence to calculate the Words Count.",
  },
]);

//Triming the sentence and splitting it into words based on "spaces".

let words = answer.sentence.trim().split(" ");

//Analysis of user input sentence
console.log(chalk.red("=".repeat(56)));
console.log(chalk.bold("-> Sentence Words:"));
console.log(words);

//Counting the number of words in the sentence
console.log(
  chalk.bold(`\n -> Words Count are: ${chalk.bold.blue(words.length)}`)
);
