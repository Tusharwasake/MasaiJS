
document.addEventListener("DOMContentLoaded",function(){

    const timerdiv = document.getElementById("timer");
    const creatediv= document.createElement("div");

    creatediv.className = "timerDisplay";
    
    creatediv.innerHTML = 
    
    `
        <h1 id ="timeDisplay">00:00</h1>
        <button id="startTimer" class="Start">Start</button>
        <button id="stopTimer" class="Stop">Stop</button>
        <button id="resetTimer" class="Reset">Reset</button>
    `;


    timerdiv.appendChild(creatediv);

    const timeDisplay = document.getElementById("timeDisplay");
    const startTimer = document.getElementById("startTimer");
    const stopTimer = document.getElementById("stopTimer");
    const resetTimer = document.getElementById("resetTimer");
    

    
    let interValid = null;
    let seconds =0;
    
    
    startTimer.addEventListener("click", function(){
        if(!interValid){
            interValid = setInterval(()=>{
                seconds++
                const minutes = Math.floor(seconds/60);
                const remainingSecond = seconds%60;
                timeDisplay.textContent = `${minutes}: ${remainingSecond}`
            });
        }
    })


    stopTimer.addEventListener("click",function(){
        clearInterval(interValid);
        interValid = null;
        seconds =0;
    });

    resetTimer.addEventListener("click", function(){
        if(interValid){
            clearInterval(interValid);
            interValid = null;

        }
        seconds = 0;
        timeDisplay.textContent = "00:00";
    });

});








