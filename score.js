const highScore = JSON.parse(localStorage.getItem("highScore"));

document.getElementById("highscores").innerHTML=
highScore.map(ele => {
    return "<li class='list'>"+ele.username+"      -     "+ele.score+"</li>";
}).join("");