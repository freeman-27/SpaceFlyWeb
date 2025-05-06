function OpenDoor(){
    document.getElementById("TopPart").classList.add("MovingTop");
    document.getElementById("BottomPart").classList.add("MovingBottom");
    document.getElementById("CloseAppButton").classList.remove("d-none");
    document.getElementById("StartAppButton").classList.add("d-none");
    // document.getElementById("SoundOfDoorOnSpaseShip").play();
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

function HorisontalMoveShipItem(){  // default horisontal moving
    // let ShipItem = document.getElementById("ShipItemImg");
    let ShipItem = document.getElementById("ShipItemContainer");
    ShipItem.classList.add("MovingShipHorisontal"); /* default horisontal moving */
}
function StartingMoveShipItem(){ // StartingEvent
    // let ShipItem = document.getElementById("ShipItemImg");
    let ShipItem = document.getElementById("ShipItemContainer");
    ShipItem.classList.add("StartMovingShip");
}





function MoveLeft(){ //for buttons or click events //
    let ShipItem = document.getElementById("ShipItemContainer");
    ShipItem.classList.toggle("MoveShipItemLeft");
}
function MoveRight(){ //for buttons or click events //
    let ShipItem = document.getElementById("ShipItemContainer");
    ShipItem.classList.toggle("MoveShipItemRight");
}


//TO DO functions for retirn position to middle, and functions for keyboard events///////////////////////////
// document.addEventListener('mouseup', MoveToMiddle);
function MoveToMiddle(){
    let ShipItem = document.getElementById("ShipItemContainer");
    // ShipItem.classList.toggle("MoveShipItemLeft");
    // ShipItem.classList.remove("MoveShipItemRight");
    // ShipItem.classList.toggle("MoveShipItemToMiddle");
    // ShipItem.classList.add("fixedPosition");

    // ShipItem.classList.remove("MoveShipItemLeft");
    // ShipItem.classList.remove("MoveShipItemRight");
}

function KeysListening(event){
    let LeftArrowBtnPress = event.key;
    // if(LeftArrowBtnPress === 'ArrowLeft')
    if(LeftArrowBtnPress == 'ArrowLeft'){
        window.alert('Left Arrow Btn Pressed');
    }
}


// function handleEvent(event) {
//     if (event.type === "fullscreenchange") {
//       /* handle a full screen toggle */
//     } else {
//       /* handle a full screen toggle error */
//     }
//   }
// document.addEventListener('keypress', MoveLeft());
