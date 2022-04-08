const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("option"))
let currentQuestion = {};
let score = 0;
let accepting = false;
let questionCounter = 0;
let counter = 0;
let availabelQue = [];
let quistions = [];
const sub_name = localStorage.getItem("subject");
console.log(sub_name);

fetch(sub_name+".json").then(res =>{
    return res.json();
}).then(loadedQuestions =>{
    quistions = loadedQuestions;
    startGame();
});

show = () => {
    document.getElementById("bonus").classList.remove("none")
    document.getElementById("bonus").classList.add("start")
}

startGame = () => {
    questionCounter = 0;
    score = 0;
    availabelQue = [...quistions];
    getNew();
};
getNew = () => {
    if (questionCounter >= quistions.length) {
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("last.html");
    }
    questionCounter++;
    document.getElementById("questionCon").innerText = questionCounter+'/'+quistions.length;
    const queIndex = Math.floor(Math.random() * availabelQue.length);
    currentQuestion = availabelQue[queIndex];
    question.innerText = currentQuestion.quistion;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availabelQue.splice(queIndex, 1);
    accepting = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!accepting) return;
        accepting = true;
        const selected = e.target;
        const selectedAns = selected.dataset["number"];

        const classApp = selectedAns == currentQuestion.answer ? "correct" : "incorrect";
        selected.parentElement.classList.add(classApp);
        if(classApp == "correct"){
            score = score + 2;
            counter++;
            if(counter%3==0){
                score = score + 5
                show();
                setTimeout(() =>{
                    document.getElementById("bonus").classList.remove("start")
                    document.getElementById("bonus").classList.add("none")
                },2000)
                
                
            }
        }
        else{
            counter = 0;
        }
        document.getElementById("score").innerText = score;
        console.log(score);
        setTimeout(() => {
            selected.parentElement.classList.remove(classApp);
            document.getElementById("bar").style.width = (questionCounter/quistions.length)*100+"%";
            getNew();
        },500);
    });
    
});