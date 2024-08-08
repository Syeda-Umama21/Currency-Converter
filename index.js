#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Print welcome message
console.log(chalk.bold.rgb(284, 284, 284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 284, 284)(`<<<=======>>> ${chalk.bold.hex(`#00ced1`)(`Welcome to \`Syeda Umama\` - Currency-Converter App`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(284, 284, 284)(`\t\t <<<==============================>>>\n`));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // Base currency
    "EUR": 0.92, // European currency (Euro)
    "JYP": 157.09, // Japenese currency (Yen)
    "CAD": 1.37, // Canadian Dollar
    "AUD": 1.51, // Australian Dollar
    "PKR": 278.31, // Pakistani Rupees
    "OMR": 0.38, // Omani Rial
    "IND": 83.13, // Indian Rupee
    "HKD": 7.81, // Hong Kong Dollar
    // Add more currencies and their exchange rates here
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: 'from_currency',
        type: 'list',
        message: chalk.yellow.bold('Select the currency to convert:'),
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'PKR', 'OMR', 'IND', 'HKD']
    },
    {
        name: 'to_currency',
        type: 'list',
        message: chalk.cyan.bold('Select the currency to convert into:'),
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'AUD', 'PKR', 'OMR', 'IND', 'HKD']
    },
    {
        name: 'amount',
        type: 'input',
        message: 'Enter the amount to convert:'
    },
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(chalk.green.bold(`Converted Amount = ${converted_amount}`));
