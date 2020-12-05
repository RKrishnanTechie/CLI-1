const chalk = require('chalk');
//welcoming the user by name
var readLineSync = require("readline-sync");
var userName = readLineSync.question(chalk.greenBright("Hello ! may i know your name?"));
console.log(chalk.whiteBright("\nwelcome! "+userName+" Let's begin the game!!"));
console.log(chalk.cyan("----------------******---------------------"))
var score = 0;

//function creation
function quiz(question , answer){
  var userAnswer = readLineSync.question(question);
if(userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log(chalk.greenBright("Hurray! u answered correct"))
  score++;
}
else{
  console.log(chalk.redBright("NO! u answered wrong"))
}
  console.log("your score is "+score );

}

//array object creation


var questions = [
  {
  question : chalk.bgRed("\nwhich team is my  favourite  IPL team?\n a.Deccan chargers\n b.Rajasthan royals\n c.Chennai super kings\n"),
  answer: "c",
  },
  {
  question : chalk.bgRed("\nwhere do i work? \n a.Accenture\n b.Allstate\n c.TCS\n"),
  answer : "b",
  },
  {
    question : chalk.bgRed("\nwhich is my favourite color ? \n a.black  \n b.red \n c.torquoise \n"),
    answer : "c",
  },
  {
    question : chalk.bgRed("\nwhich is my mother tongue? \n a.telugu  \n b.kannada \n c.tamil \n"),
    answer : "c",
  },
  {
    question : chalk.bgRed("\nwho is my favourite player? \n a.sachin  \n b.kohli \n c.dhoni \n"),
    answer : "c"
  }
 ]


//looping through each array item
for(var i = 0;  i < questions.length; i++ ){
var currentQuestion = questions[i];
quiz(currentQuestion.question,currentQuestion.answer )
}

console.log(chalk.bgMagenta.bold("\n----------------GAME OVER---------------"))
if(score >= 3){
console.log(chalk.bgMagenta("\nYou have scored "+score+" You have done a good Job"))
}
else{
  console.log("\nYou have scored "+score+ " you can do much better!")
}



