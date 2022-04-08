const recentScore = localStorage.getItem("mostRecentScore");
const hignScore = JSON.parse(localStorage.getItem("highScore")) || [];
document.getElementById("highScore").innerText = recentScore;
const buton = document.getElementById("save");
const user = document.getElementById("user");
saveScore = () =>{
    console.log(user.value)
    if(user.value==""){
        document.getElementById("warning").innerHTML ="* username can't be blank";
    }
    else{
        document.getElementById("warning").innerHTML ="";
        const score = {
            score: recentScore,
            username: user.value
        };
        hignScore.push(score);
        hignScore.sort((a,b) => b.score - a.score);
        hignScore.splice(10);
        localStorage.setItem("highScore", JSON.stringify(hignScore));
        console.log(hignScore);
        return window.location.assign("index.html");
    }
};