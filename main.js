var inspiration = $('.inspiration');
var button =$('.carl-button');


button.on("click", randomMessage);

var messages = ["You got this!", "You can do it!", "What would Ms. Chavez do?", "Math is cool!"];

function pickMessage(){
  var randomDecimal = Math.random();
  var random = randomDecimal*messages.length;
  var final = Math.floor(random);
  return messages[final];
  console.log(pickMessage());
}

function randomMessage(){
 var messagePrint = pickMessage();
 inspiration.text(`${messagePrint}`);

}
