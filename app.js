

let AppStopped = false;
function StopApp(){
    // clearInterval(CallAddMeteor());
    // CloseDoor();

    AppStopped = true;
    console.log(AppStopped);
    StartApp();
    return AppStopped;
}


let CallInt = setInterval (function CallAddMeteor( ){AddMeteor(); AddStars();}, 1000);
function StartApp(){
    if(AppStopped === false){
        OpenDoor();
        // DisplayShipOnStart();
        
        // CallAddMeteor();
    }    
    if (AppStopped === true){
        clearInt();
        function clearInt(){
            clearInterval(CallInt);
        }
        CloseDoor();
        DisplayRedLights();
        AppStopped = false;
    }return AppStopped;
}

// function CallAddMeteor(){
//     AddMeteor();
// }

//TO DO functions for retirn position to middle, and functions for keyboard events///////////////////////////
// document.addEventListener('mouseup', MoveToMiddle);
// function MoveToMiddle(){
// }





  