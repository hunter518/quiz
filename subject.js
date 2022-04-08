const subject = Array.from(document.getElementsByClassName("btn"));

subject.forEach(sub =>{
    console.log(sub.innerHTML)
    sub.addEventListener("click", e=>{
        const selected = e.target;
        const s_name = selected.innerText;
        localStorage.setItem("subject",s_name);
    })
})