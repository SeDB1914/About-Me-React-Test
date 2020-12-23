function HowsYourDay() {

    let userName = "";
userName === "" ? console.log(`Hello!`) : console.log(`Hello, ${userName}!`);

let userQuestion = "Will today be a good day?";
console.log(`${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
  eightBall = "Certainly.";
  break;
case 1:
  eightBall = "Bet on it.";
  break;
  case 2:
  eightBall = "Let's rethink that one.";
  break;
  case 3:
  eightBall = "I can't say for certain.";
  break;
  case 4:
  eightBall = "Think again.";
  break;
  case 5:
  eightBall = "Is today Tuesday?";
  break;
  case 6:
  eightBall = "I'm sorry to have to tell you this. NO!";
  break;
  case 7:
  eightBall = "Go to sleep now and tomorrow will be here before you know it.";
  break;
}
console.log(eightBall);

}
export default HowsYourDay;