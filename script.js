//make array user [R,P,S]
//user picks a random letter from the array
//comp picks a random letter from the array
//if user wins, alert you win
//if user loses, alert you lose
//show total wins, ties, and losses
//else pop up would you like to pay again

//Userside
//prompt asking to pick R,P,S
//user picks
//display win or lose
//show total wins, ties, and losses
//display do you want play again

var win = 0;
var loss = 0;
var ties = 0;

var choose = ["R", "P", "S"];

function gameOn() {
  var userPick = prompt("pick a letter from R,P,S(uppercase only)");

  var compPick = choose[Math.floor(Math.random() * choose.length)];
  console.log(compPick);

  if (userPick === compPick) {
    alert("It's a tie");
    ties++;
  } else if (userPick === "R" && compPick === "S") {
    alert("You win");
    win++;
  } else if (userPick === "S" && compPick === "R") {
    alert("You lose");
    loss++;
  } else if (userPick === "P" && compPick === "S") {
    alert("You lose");
    loss++;
  } else if (userPick === "R" && compPick === "P") {
    alert("You win");
    win++;
  } else if (userPick === "S" && compPick === "P") {
    alert("You win");
    win++;
  }
  var playAgain = confirm("do you want to play again?");
  if (playAgain == true) {
    gameOn();
  } else {
    alert("wins:" + win + " losses:" + loss + " ties:" + ties);
    alert("goodbye!");
  }
}

gameOn();
