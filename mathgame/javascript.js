var playing = false;
var score; //variable
var action;
var timeremaining;
var correctAnswer;
var x = 0;
var y = 0;

const audio = document.getElementById("myAudio");
var operators_if = document.getElementsByName("math_operators");
//if we click on the start/reset to play
document.getElementById("startreset").onclick = 
function(){
         
           hide("choosewisely");

           //if we are playing 

       if(playing == true){

          location.reload();//reload page

      }else{//if we are not playing 

          //change mode to playing

          playing = true;
       
          //set score to 0
          show("score");
         score = 0;
document.getElementById("scorevalue").innerHTML = score;
  // HTMLElementObject.innerHTML = text, Return: A String, representing the HTML content of an element
      
          //show instruction box

          show("instruction");

          //show answer box

          show("choices");

      //show countdown box/урвуугаар тоолох хайрцаг харуулна

          show("timeremaining");
          timeremaining = 60;

document.getElementById("timeremainingvalue").innerHTML =
timeremaining;

        //hide game over box
        hide("gameOver");
        
     

        //change button to reset
        
document.getElementById("startreset").innerHTML = 
"Reset Game";

        //start countdown 

        startCountdown();

        //generate a new Q&A

        generateQA();
    }

}
           
//Clicking on an answer box

for(i=1; i<5; i++){
    
document.getElementById("box" + i).onclick = function(){
    
    //check if we are playing 
    if(playing == true){ //yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            //increase score by 1 
            score++;

document.getElementById("scorevalue").innerHTML = score;
          
        //hide wrong box and show correct box

            hide("wrong");
            show("correct");
            setTimeout(function(){ //Executes a function, after waiting a specified number of milliseconds.
                hide("correct");
            }, 1000);

            //Generate new Q&A
        
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            audio.play();
            setTimeout(function(){
                hide("wrong");
            }, 1000);
            // decreasesec();
        }
    }      
}   
}

//if we click on answer box
         //if we are playing
             //correct?
                  //yes 
                      //increase score
                      //show correct box for 1sec
                      //generate new Q&A
                  //no 
                      //show try again box for 1 sec     

//functions 

//start counter

function startCountdown(){
     action = setInterval(function(){ //Same as setTimeout(), but execution of the function continuously.
         timeremaining -= 1;

document.getElementById("timeremainingvalue").innerHTML = 
timeremaining;     
         if(timeremaining == 0){
             //game over
             stopCountdown();
             show("gameOver");

document.getElementById("gameOver").innerHTML = 
"<p>Game over!</p><p>Your score is " + score + ".</p>";
          hide("timeremaining");  // Call the function
          hide("correct");
          hide("wrong");
          playing = false;
          
document.getElementById("startreset").innerHTML = "Start Game";
         
} 
     }, 1000);// myVar = setInterval("javascript function", milliseconds);
}

//stop counter

function stopCountdown(){
    clearInterval(action); //to stop the execution - clearInterval(myVar); uses the variable returned from setInterval():
}

//decrease counter by 1 sec
// function decreasesec(){
//     timeremaining -= 1;
// }


//hide an element

function hide(Id){ //parameter
    document.getElementById(Id).style.display = "none";
}

//show an element

function show(Id){ //parameter // Declare a function
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers

function generateQA(){
     
    
     
    //check if the difficulty radio button is checked 
    if(rd1.checked==true){
    
        x = 1 + Math.round(9 * Math.random());
        y = 1 + Math.round(9 * Math.random());
        
    }
       
    else if(rd2.checked==true){
               
        x = 10 + Math.round(99 * Math.random());
        y = 10 + Math.round(99 * Math.random());
    }
    else if(rd3.checked==true){
   
        x = 100 + Math.round(999 * Math.random());
        y = 100 + Math.round(999 * Math.random());
    }
    else if(rd4.checked==true){
          
        x = 1000 + Math.round(9999 * Math.random());
        y = 1000 + Math.round(9999 * Math.random());
    }
    else {
       alert("No option is selected");
       
       location.reload();

    }
    //  //check if the operation checkbox is checked 
    //  var operation = ["add","subtract","multiply", "divide"];
    if(operators_if[0].checked==true){
        correctAnswer = x+y;
        document.getElementById("question").innerHTML = 
        x + "+" + y;
    }

    else if(operators_if[1].checked==true){
    correctAnswer = x-y; 
    document.getElementById("question").innerHTML = 
    x + "-" + y;
    }
    else if(operators_if[2].checked==true){
        correctAnswer = x*y; 
        document.getElementById("question").innerHTML = 
        x + "*" + y;
    }
    else if(operators_if[3].checked==true){
        correctAnswer = x/y
        document.getElementById("question").innerHTML = 
        x + "/" + y;
    }
    else {
        // alert("No Operation is selected");
         location.reload();
        return false;
     }
      

    var correctPosition = 1 + Math.round(3 * Math.random());
    
document.getElementById("box" + correctPosition).innerHTML = 
correctAnswer; //fill one box with the correct answer .toFixed(2) 

    //fill other boxes with wrong answers
    var answers = [correctAnswer];

    for(i=1; i<5; i++){ //loop
        if(i != correctPosition){
            var wrongAnswer;
            do{
                if(operators_if[0]&&rd1.checked==true){
                 
                wrongAnswer = (1 + Math.round(9 * Math.random()))* (1 + Math.round(9 * Math.random())); // a wrong answer is 1 digit
                }
                if(operators_if[1]&&rd2.checked==true){
                 
                    wrongAnswer = (10 + Math.round(99 * Math.random()))* (10 + Math.round(99 * Math.random())); // a wrong answer is 2 digit
                    }
                if(operators_if[2]&&rd3.checked==true){
                 
                wrongAnswer = (100 + Math.round(999 * Math.random()))* (100 + Math.round(999 * Math.random())); // a wrong answer is 3 digit
                }
                if(operators_if[3]&&rd4.checked==true){
                 
                    wrongAnswer = (1000 + Math.round(9999 * Math.random()))* (1000 + Math.round(9999 * Math.random())); // a wrong answer is 4 digit
                    }
    
}while(answers.indexOf(wrongAnswer)>-1)

document.getElementById("box"+i).innerHTML = 
wrongAnswer;
            answers.push(wrongAnswer);//The push() method adds new items to the end of an array, and returns the new length.
        }
    }
}