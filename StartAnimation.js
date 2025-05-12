let SoundForBackgroundFlying = document.getElementById("SirenForBackground");
document.getElementById("RingOpeningDoor").volume = 0.07;
document.getElementById("SoundOfDoorOnSpaseShip").volume = 0.01;
document.getElementById("SirenOpeningDoor").volume = 0.03;
document.getElementById("SirenClosingDoor").volume = 0.0025;
SoundForBackgroundFlying.volume = 0.005;
document.getElementById('MainSoundBackground').volume = 1; //100%

function OpenDoor(){
    document.getElementById("RingOpeningDoor").play();
    setTimeout(function OpenDoorInternal(){
    DisplayRedLights();
        setTimeout(function OpenDoorAnimation(){

        document.getElementById("TopPart").classList.add("MovingTop");
        document.getElementById("BottomPart").classList.add("MovingBottom");
        document.getElementById("CloseAppButton").classList.remove("d-none");
        document.getElementById("TestBTN").classList.remove("d-none");
        document.getElementById("StartAppButton").classList.add("d-none");
        document.getElementById("PlanetItemBackgound").classList.add("PlanetBackgroundMove", "RedShadowBorder");
        document.getElementById("SoundOfDoorOnSpaseShip").play();
        // document.getElementById("AlarmOpeningDoor").play();
        
        document.getElementById("SirenOpeningDoor").play();
        document.getElementById("SirenClosingDoor").play();

            setTimeout(function PlayBackgoundSounds(){
            document.getElementById('MainSoundBackground').play();
            // SoundForBackgroundFlying.play(); // disabled
            }, 8500)

    
        // document.getElementById("topPart").classList.add("MoveTop");
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
    SoundForBackgroundFlying.pause();}, 2000);
    
    // document.getElementById("topPart").classList.add("MoveTop");
}