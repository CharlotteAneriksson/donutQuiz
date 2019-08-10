function check(){
   
   var question1 = document.quiz.question1.value;
   var question2 = document.quiz.question2.value;
   var question3 = document.quiz.question3.value;
   var question4 = document.quiz.question4.value;
   var question5 = document.quiz.question5.value;
   var correct = 0;
   
        if (question1 == "unshiftPush"){
       correct++;
    }
        if (question2 == "!false"){
       correct++;
    }
        if (question3 == "8"){
            correct++;
    }
        if (question4 == "trunc"){
            correct++;
    }
        if (question5 == "remainder"){
            correct++;
        }
   
   var messege = ["Great, you got them all!", "Almost there!", "You did okey...", "Oh come on, did you even try?"];
   var donuts = ["img/0-5.png", "img/1-5.png", "img/2-5.png", "img/3-5.png", "img/4-5.png", "img/5-5.png"];
   var score;
   
        if (correct <= 2) {
            score = 3;
        }
        if (correct == 3){
            score = 2;
        }
        if (correct == 4){
            score = 1;
        }
        if (correct == 5){
            score = 0;
        }
   
    document.getElementById("submit-results").style.visibility = "visible";
    
    document.getElementById("messege").innerHTML = messege[score];
    document.getElementById("correct-score").innerHTML = `You got ${correct} correct answers.`;
    document.getElementById("score-in-donuts").src = donuts[correct];
   
   
   //Empty inputs
   
}

