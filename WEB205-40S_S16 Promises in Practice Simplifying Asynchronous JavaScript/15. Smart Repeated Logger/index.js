
function smartRepeatedLogger(message, interval, duration) {
    // Your code here

    let intervalId;
    let flag = false;
    let tracktime = 0;

    function startLogging(){
      
        intervalId = setInterval(()=>{
            if(!flag){
                console.log(message);
                tracktime += interval;

                if(tracktime>=duration){
                    clearInterval(intervalId)
                    console.log("Logging stopped after reaching duration."); 
                }
            }

        },interval)
        
    }

    startLogging();

    return {
        pause(){
            if(!flag){
                flag = true;
                clearInterval(intervalId);
                console.log("Logging paused.");
            }
        },

        resume(){
            if(flag){
                flag=false;
                startLogging();
                console.log("Logging resumed."); 
            }
        }
    };
    
}
const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3100); // Pauses after 3 seconds
setTimeout(() => logger.resume(), 6000); // Resumes after 6 seconds
// Logs "Logging..." every second for 10 seconds, with a 3-second pause starting at 3 seconds





