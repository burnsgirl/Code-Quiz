// Variables
var start = document.getElementById("start");
var startbtn = document.getElementById("startbtn");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var userChoice = document.getElementById("answer");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials");
var endEl = document.getElementById("end");
var savebtn = document.getElementById('savebtn');
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var scoreList = document.getElementById("scorelist");
var listName = document.getElementById("listname");
var listScore = document.getElementById("listscore");
var replayBtn = document.getElementById("replaybtn");
var userChoice = choicesEl;
var currentIndex = 0;
var scoreEl = 0;
var secondsLeft = 60;
userScore = [];
i= 0;
var x = [       
        ['What is the correct linkage for JavaScript?', ['SRC', 'SCRIPT', 'LINK', 'JAVASCRIPT'], 'SCRIPT'],

        ['What does getElementById do?', ["Gets the element id","Gets the id of an element", "Links the id in html to javascript","Names a variable"], 'Links the id in html to javascript'],

        ['How do you set a timer to count down?"', ["countDown","Timer","setTime","setInterval"], 'setInterval'],

        ['What code do you use to debug?', ["console.log","return","for, else","getElementById"], 'console.log'],
];

// Beginning of quiz
scoreList.style.display = "none";
endEl.style.display = "none";
choicesEl.style.display = "none";
startbtn.addEventListener("click", function quiz () {
        choicesEl.style.display = "block";
        startbtn.style.display = "none";
        start.style.display = "none";
        setTime ();
        renderQuestion();


        console.log(x[1][1][0]);
        
        
});



// Rendering the questions
function renderQuestion () {
        
        if (currentIndex == x.length) {
                endQuiz();
        } else {
        let i = currentIndex;
       
        questionsEl.innerHTML = x[i][0]; 
        c1.innerHTML = x[i][1][0];
        c2.innerHTML = x[i][1][1];
        c3.innerHTML = x[i][1][2];
        c4.innerHTML = x[i][1][3];


        c1.addEventListener("click", anotherChoice);
        c2.addEventListener("click", anotherChoice);
        c3.addEventListener("click", anotherChoice);
        c4.addEventListener("click", anotherChoice);

        }

};

        
        
// Checking if the answer is correct or not
function anotherChoice (event) {
        
        var userChoice = event.target; 
        console.log(event.target);

                var userChoice = event.target; 
                if (currentIndex == 0 && userChoice == c2) {
                        scoreEl++;
                        console.log(event);
                } 

                else if (currentIndex == 1 && userChoice == c3) {
                        scoreEl++;

                }
                else if (currentIndex == 2 && userChoice == c4) {
                        scoreEl++;
                }
                else if (currentIndex == 3 && userChoice == c1) {
                        scoreEl++;
                } else {
                        secondsLeft - 10;
                        console.log(secondsLeft - 10);
                        alert("Incorrect");
                }


                currentIndex++;        
                renderQuestion();

        
}
// Ending the quiz and saving score
function endQuiz () {
        console.log("is this working")
        if (currentIndex == x.length) {
                choicesEl.style.display = "none";
                questionsEl.style.display = "none";
                timerEl.style.display = "none";
                endEl.style.display = "block";
                score.innerHTML = scoreEl;
                saveScore();
        }
}

// Timer Element   
function setTime () {
        
        timerEl.style.padding = "20px";
        var timerInterval = setInterval (function () {
                secondsLeft--;
                timerEl.textContent = secondsLeft + "  remaining";
                if (secondsLeft === 0 || currentIndex === x.length) {
                        console.log(secondsLeft);
                        clearInterval(timerInterval);
                        endQuiz();
                } 
        }, 1000);
}

// User input to save score
function saveScore () {
        var initials = initialsEl.value;
        var userScore = scoreEl + "" + initials;
        localStorage.setItem("userScore", JSON.stringify(userScore));
        
};
// Showing the score on score list
function renderScore () {
        scoreList.style.display = "block";
        endEl.style.display = "none";
        var userScore = scoreEl + "" + initials;
        JSON.parse(localStorage.getItem("userScore" + userScore));
        

        document.getElementById("listscore").innerHTML = "Score: " + scoreEl;
        document.getElementById("listname").innerHTML = "Player: " + initials.value;
                
};

savebtn.addEventListener("click", saveScore);

savebtn.addEventListener("click", renderScore);
