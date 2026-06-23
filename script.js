let acceptBtn = document.getElementById("accept-btn");
let rejectBtn = document.getElementById("reject-btn");
let sorryBtn = document.getElementById("sorry-btn");
let textContent = document.getElementById("text");
let gifContainer = document.getElementById("gif");
var acceptCount = 0;
var rejectCount = 0;
acceptBtn.addEventListener("click", function(){
    if(acceptCount == 0){
    gifContainer.setAttribute("src", "./images/accepted-gif.webp");
    textContent.innerHTML = "yay! Finally Accepted <3";
    rejectBtn.disabled = true;
    }else if(acceptCount == 3){
        textContent.innerHTML = "STOP IT!";
        acceptBtn.style.display = "none";
        rejectBtn.style.display = "none";
        sorryBtn.style.display = "block";
        gifContainer.setAttribute("src", "./images/mad.webp")
    }
    acceptCount += 1;
})
rejectBtn.addEventListener("click", function(){
    if(rejectCount == 0){
    textContent.innerHTML = "you may clicked the wrong button";
    textContent.style.fontSize = "30px";
    rejectBtn.style.width = "25%";
    }else if(rejectCount == 1){
        textContent.innerHTML = "Click the yes one please!";
        rejectBtn.style.width = "20%";
    }
    rejectCount += 1;
});