function OpenDoor(){
    document.getElementById("TopPart").classList.add("MovingTop");
    document.getElementById("BottomPart").classList.add("MovingBottom");
    document.getElementById("CloseAppButton").classList.remove("d-none");
    document.getElementById("TestBTN").classList.remove("d-none");
    document.getElementById("StartAppButton").classList.add("d-none");
    document.getElementById("SoundOfDoorOnSpaseShip").play();
    document.getElementById("AlarmOpeningDoor").play();
    // document.getElementById("topPart").classList.add("MoveTop");
    
}

function CloseDoor(){
    document.getElementById("TopPart").classList.remove("MovingTop");
    document.getElementById("BottomPart").classList.remove("MovingBottom");
    document.getElementById("CloseAppButton").classList.add("d-none");
    document.getElementById("StartAppButton").classList.remove("d-none");
    document.getElementById("SoundOfDoorOnSpaseShip").play();
    document.getElementById("AlarmOpeningDoor").pause();
    
    // document.getElementById("topPart").classList.add("MoveTop");
}