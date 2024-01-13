const questionbox = document.getElementById("question");
const answerlist = document.getElementById("answer");
const nextbtn= document.getElementById("next");

const questions = [
    {
        question:"what is the capital city of india?",
        answers:[
         {text:"delhi",correct:"true"},
         {text:"coimbatore",correct:"false"},
         {text:"madurai",correct:"false"},
         {text:"chennai",correct:"false"}
        ]
    },
    {
        question:"what is the largest condinent?",
        answers:[
         {text:"south america",correct:"false"},
         {text:"australia",correct:"false"},
         {text:"asia",correct:"true"},
         {text:"antartica",correct:"false"}
        ]
    },
    {
        question:"what is the square root of 9?",
        answers:[
         {text:"3",correct:"true"},
         {text:"99",correct:"false"},
         {text:"81",correct:"false"},
         {text:"0",correct:"false"}
        ]
    },
    {
        question:"which of the following is a leap year?",
        answers:[
         {text:"2029",correct:"false"},
         {text:"3031",correct:"false"},
         {text:"1999",correct:"false"},
         {text:"2024",correct:"true"}
        ]
    }

];

let index=0;
let score=0;

function start(){
    index=0;
    score=0;
    nextbtn.innerHTML="next";
    showquestion();
}

function showquestion(){
    prevclear();
    let questionno=index+1;
    let currentquestion = questions[index];
    questionbox.innerHTML=questionno+" . " + currentquestion.question;
    currentquestion.answers.forEach(item=>{
        const answer=document.createElement("button");
        answer.innerHTML=item.text;
        answer.classList.add("btn");
        answerlist.appendChild(answer);
        if(item.correct){
            answer.dataset.correct = item.correct;
        }
        answer.addEventListener("click",checkanswer);
    });
}

function prevclear(){
    nextbtn.style.display="none";
    while(answerlist.firstChild){
        answerlist.removeChild(answerlist.firstChild);
    }
}

function checkanswer(e){
    const selected = e.target;
    const iscorrect = selected.dataset.correct === "true";
    if(iscorrect){
        selected.classList.add("correct");
        score++;
    }else{
        selected.classList.add("incorrect");
    }
    Array.from(answerlist.children).forEach((answer)=>{
        if(answer.dataset.correct==="true"){
            answer.classList.add("correct");
        }
        answer.disabled="ture";
    });
    nextbtn.style.display="block";
    nextbtn.addEventListener("click",nextfunc);
}

 function nextfunc(){
    if(index<questions.length){
        nextfunctionality();
    }else{
        answerlist.style.display="block";
        start();
    }
}

function  nextfunctionality(){
    index++;
    if(index<questions.length){
        showquestion();
    }else{
        displayscore();
    }
}

function displayscore(){
    questionbox.innerHTML="your score is "+score+" out of "+questions.length;
    answerlist.style.display="none";
    nextbtn.innerHTML="Play again";
}

start();
