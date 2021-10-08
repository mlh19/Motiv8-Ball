// The MOTIV8 BALL
//Ask a question with a prompt
var question = prompt("Please ask the moviv8 ball a question!");
alert("You asked " + question);

//Instead of using a lof of if/ else statements I will use an array to populate a random response.
answers = ["It is certain", "Certainly", "It is decidely so", "Without a doubt","Duh", "Yes, def", "You may rely on it"];
//Use Math.random to pick a choice, Math.floor more specifically 
var arrPos = Math.floor(Math.random() * answers.length);
//Pick from the array using a random number
var finalAns = answers[arrPos];
//Return an answer with an alert
alert("The Motiv8 ball said " + finalAns);