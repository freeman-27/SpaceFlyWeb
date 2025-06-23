

let AppStopped = false;
function StopApp(){
    // clearInterval(CallAddMeteor());
    // CloseDoor();

    AppStopped = true;
    console.log('Message: "Game stopped". Value: ' + AppStopped);
    StartApp();
    ///force reload:
    // setTimeout (function() {window.open('/', '_self')}, 20000); ///force reload disabled
    return AppStopped;
}

        // let CallInt = setInterval (function CallAddMeteor( ){AddMeteor(); AddStars();}, 1000);
        ///set intervals for function of adding items to background 
        var IntervalCallFunc_AddStarItem_1;
        var IntervalCallFunc_AddStarItem_2;
        var IntervalCallFunc_AddStarItem_3;
        var IntervalCallFunc_AddStarItem_4;
        var IntervalCallFunc_AddStarItem_5;

function StartApp(){
    if(AppStopped === false){ ///game started
        GameStart();
        RunAppTimemeter();
        OpenDoor();
        ShowScore();
        ShowBottomPannelWithButtons();
        // DisplayShipOnStart();
        // CallAddMeteor();
        setTimeout( function(){AddItemsToFixedPathContainer(), IncrPositionOfStone(), ComparePath()}, 12000) /// call functions of game process (GameProcess.js)
        document.getElementById('StartAppButton').children[1].classList.remove('StartAppButtonImgShining');
                ///add bonuse:///start live counter:
                var AddLivesBonuseInterval = setInterval (function CallAddMeteor( ){AddLiveCount();}, 13500);
        setTimeout(function(){
            IntervalCallFunc_AddStarItem_1 = setInterval (function CallAddMeteor( ){AddMeteor();}, 700)
            IntervalCallFunc_AddStarItem_2 = setInterval (function CallAddMeteor( ){AddStars();}, 500)
            IntervalCallFunc_AddStarItem_3 = setInterval (function CallAddMeteor( ){AddStars_3();}, 500)
            IntervalCallFunc_AddStarItem_4 = setInterval (function CallAddMeteor( ){AddStars_B();}, 15500)
            IntervalCallFunc_AddStarItem_5 = setInterval (function CallAddMeteor( ){AddHoles_B();}, 8500)
            ForceRemoveAnimatedItemsFromBG();
        }, 13500);
    }    
    if (AppStopped === true){ ///game stoped
        GameOver();
        StopAppTimemeter();
        clearInt();
        function clearInt(){
            // clearInterval(CallInt);
        }
        CloseDoor();
        DisplayRedLights();
        AppStopped = false;
        HideBottomPannelWithButtons();
                        ///Disable ScanPosition of stones - function: ComparePath()
                        PositionOfStone = 99999;
                        ///disable loudness of ship and falling stones
                        CurrentValueOfSoundTail = ZeroLoudness;
                        SoundOfDamage.volume = ZeroLoudness;
                        document.getElementById('ShipEngineSound').volume = ZeroLoudness;
                        document.body.style.backgroundColor = 'rgba(66, 0, 2, 0.445)';
                        document.getElementById('ShipItemContainer').style.opacity = 0.1;
                        ///disable bonuse:
                        clearInterval(AddLivesBonuseInterval);
                        ///Clear intervals:
                        ClearAllIntervals();

    }return AppStopped, IntervalCallFunc_AddStarItem_1,
                        IntervalCallFunc_AddStarItem_2,
                        IntervalCallFunc_AddStarItem_3,
                        IntervalCallFunc_AddStarItem_4,
                        IntervalCallFunc_AddStarItem_5;
}

function ClearAllIntervals(){
    clearInterval(IntervalCallFunc_AddStarItem_1);
    clearInterval(IntervalCallFunc_AddStarItem_2);
    clearInterval(IntervalCallFunc_AddStarItem_3);
    clearInterval(IntervalCallFunc_AddStarItem_4);
    clearInterval(IntervalCallFunc_AddStarItem_5);
}


///Start Output timemeter values with delay (default 13,5 sec)
function RunAppTimemeter(){
    setTimeout(() => { CheckStartClick_Timemeter();}, 13500);
    // CheckStartClick_Timemeter();
}

function StopAppTimemeter(){
    setTimeout(() => {CheckStopClick_Timemeter();}, 13500);
}
///force reload:
function ForceReload(){
    window.open('/', '_self');
}

// function CallAddMeteor(){
//     AddMeteor();
// }

//TO DO functions for retirn position to middle, and functions for keyboard events///////////////////////////
// document.addEventListener('mouseup', MoveToMiddle);
// function MoveToMiddle(){
// }





  