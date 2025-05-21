function ShowScore(){
    let scoreCount = 0;
    setTimeout(function (){
        scoreCount = 1;
        setInterval(function (){
            scoreCount++;
            document.getElementById("ScoreContainer").innerText = 'Score:'+ scoreCount + '00';
        }, 1000)
        
    }, 10000)
}