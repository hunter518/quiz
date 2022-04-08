function change(){
    document.body.classList.toggle("dark");
    document.getElementById('head').style.color = "white";
    if(document.body.classList.contains("dark")){
        document.getElementById("icon").style.display="none";
        document.getElementById("icon2").style.display="flex";
    }
    else{
        document.getElementById('head').style.color = "black";
        document.getElementById("icon").style.display="flex";
        document.getElementById("icon2").style.display="none";
    }
}
