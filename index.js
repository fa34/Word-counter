import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Please enter your sentence to count the words"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log("Your words counter value is Appended below");
console.log(words.length);
