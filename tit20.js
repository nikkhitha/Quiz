const questions=[
    {
        question:"What is the smallest prime number?",
        answers:[
            { text: "5",correct:false},
            { text: "0",correct:false},
            { text: "2",correct:true},
            { text: "7",correct:false},
        ]
    },
    {
        question:"Who wrote “Romeo and Juliet?",
        answers:[
            {text:"Charles Dickens",correct:false},
            {text:"Charlotte Bronte",correct:false},
            {text:"George Eliot",correct:false},
            {text:"William Shakespeare",correct:true},
        ]
    },
    {
    question:" Who was the first woman in space?",
    answers:[
        {text:"Judith Resnik", correct:false},
        {text:"Sally Ride", correct:false},
        {text:"Judith Resnik", correct:false},
        {text:" Valentina Tereshkova", correct:true},
    ]
    },
    {
        question:" Who is known as the “Father of the Internet",
        answers:[
            {text:"Vinton Cerf", correct:true},
            {text:"Marie Curie", correct:false},
            {text:"Charles Darwin", correct:false},
            {text:"Jane Goodall", correct:false},
        ]
    },
    {
    question:". What is the capital of India?",
    answers:[
        {text:"India",correct:false},
        {text:"New Delhi",correct:true},
        {text:"Hyderabad",correct:false},
        {text:"Mumbai",correct:false},
    ]
    }

];

let questionbtn=document.getElementById("question");
let answerbtn=document.getElementById("buttons");
let next=document.getElementById("nxtbtn")

let currentindx=0;
let score=0;

function startquiz(){
    currentindx=0;
    score=0;
    next.innerHTML="Next";
    showquestion();
}

function showquestion(){
    resetstate();
    let ongoingquestion=questions[currentindx];
    let quesnum=currentindx+1;
    question.innerHTML=quesnum+". "+ongoingquestion.question;

    ongoingquestion.answers.forEach(answer=>{
        let button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    })

}

function resetstate(){
    next.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e){
    let selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    next.style.display="block";
}

function showscore(){
    resetstate();
    questionbtn.innerHTML=`You have Scored ${score} out of ${questions.length}`;
    next.innerHTML="Play Again";
    next.style.display="block";
}

function nextquestion(){
    currentindx++;
    if(currentindx<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}

next.addEventListener("click",()=>{
    if(currentindx<questions.length){
        nextquestion();
    }
    else{
        startquiz();
    }
})


startquiz()