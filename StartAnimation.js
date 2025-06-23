///loudness:
// let SoundForBackgroundFlying = document.getElementById("SirenForBackground");
// document.getElementById("RingOpeningDoor").volume = 0.07;
// document.getElementById("SoundOfDoorOnSpaseShip").volume = 0.01;
// document.getElementById("SirenOpeningDoor").volume = 0.03;
// document.getElementById("SirenClosingDoor").volume = 0.0025;
// SoundForBackgroundFlying.volume = 0.005;
// document.getElementById('MainSoundBackground').volume = 1; //100%
// document.getElementById('ShipEngineSound').volume = 0.1; //100%

// let SVGTextHeader1 = document.getElementById("GameStatusText").children[0];

function OpenDoor(){
    document.getElementById("RingOpeningDoor").play();
    setTimeout(function OpenDoorInternal(){
    DisplayRedLights();
    document.getElementById("GameStatusText").innerText = "Game started";
    // const NewElement1 = document.createTextNode("Game started");
    // SVGTextHeader1.replaceChild(NewElement1, SVGTextHeader1.childNodes[0]);

    document.getElementById("GameStatusText").classList.add("ReColorText");
    document.getElementById("GameStatusText").classList.remove("WaitingAnimation");

    // document.getElementById("GameStatusText").setAttribute("style", "color: red;");


        setTimeout(function OpenDoorAnimation(){

        document.getElementById("TopPart").classList.add("MovingTop");
        document.getElementById("BottomPart").classList.add("MovingBottom");
        document.getElementById("CloseAppButton").classList.remove("d-none");
        document.getElementById("TestBTN").classList.remove("d-none");
        document.getElementById("StartAppButton").classList.add("d-none");
        document.getElementById("PlanetItemBackgound").classList.remove("RedShadowDefault");
        document.getElementById("PlanetItemBackgound").classList.add("PlanetBackgroundMove", "RedShadowBorder");
        document.getElementById("GameStatusText").classList.add("ScalableText");

        document.getElementById("SoundOfDoorOnSpaseShip").play();
        // document.getElementById("AlarmOpeningDoor").play();
        
        document.getElementById("SirenOpeningDoor").play();
        document.getElementById("SirenClosingDoor").play();

            setTimeout(function ButtonsPanelAnimation(){
            document.getElementById('PreloadButtonsPanel').classList.add('PreloadButtonsPanelAnimation');
            }, 9000)
            setTimeout(function PlayBackgoundSounds(){
            document.getElementById('MainSoundBackground').play();
            document.getElementById('ShipEngineSound').play();
            // SoundForBackgroundFlying.play(); // disabled
            }, 8500)

    
        // document.getElementById("topPart").classList.add("MoveTop");
        setTimeout(function(){
        document.getElementById("LeftWall").classList.add("LeftWallMooveLeft");
        document.getElementById("RightWall").classList.add("RightWallMooveRight");}, 3000)
        }, 2000);

    setTimeout(function HidePalnetItem(){document.getElementById("PlanetItemBackgound").classList.add('d-none')}, 10000)

}, 2000);
}
function CloseDoor(){
    document.getElementById("RingOpeningDoor").play();
    document.getElementById('MainSoundBackground').pause();

    setTimeout(function (){
    document.getElementById("TopPart").classList.remove("MovingTop");
    document.getElementById("BottomPart").classList.remove("MovingBottom");
    document.getElementById("CloseAppButton").classList.add("d-none");
    document.getElementById("StartAppButton").classList.remove("d-none");
    document.getElementById("SoundOfDoorOnSpaseShip").play();
    // document.getElementById("AlarmOpeningDoor").pause();
    // document.getElementById("AlarmOpeningDoor").play();
    document.getElementById("SirenClosingDoor").play();
    document.getElementById("SirenOpeningDoor").play();

    document.getElementById('MainSoundBackground').pause();
    SoundForBackgroundFlying.pause();
    }, 2000);
    
    // document.getElementById("topPart").classList.add("MoveTop");

    document.getElementById("GameStatusText").classList.remove("ScalableText", "ReColorText");
    document.getElementById("GameStatusText").innerText = "Game Over";

    setInterval(function(){
        document.getElementById("GameStatusText").innerText = "Press 'Enter' or 'S' to start game";
    },10000)

    setTimeout( () => {
        document.getElementById('StartAppButton').children[1].classList.add('StartAppButtonImgShining');}, 
    15000);
}


function ShowBottomPannelWithButtons() {
    setTimeout(function(){
        // document.getElementById("ButtonsPanel").style.display = "block;";
        document.getElementById("ButtonsPanel").classList.remove('HideBtnPanel');
        document.getElementById("ButtonsPanel").classList.add('DisplayBtnPanel');
    }, 15000);
}
function HideBottomPannelWithButtons() {
    setTimeout(function(){
        document.getElementById("ButtonsPanel").classList.remove('DisplayBtnPanel');
        document.getElementById("ButtonsPanel").classList.add('HideBtnPanel');
    }, 1000);
}