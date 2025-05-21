// let XShipTest = ObjShip.getAttribute("style");
// let XShip = ObjShip.style.left;
// let ShipLeft = ObjShip.style.left;

let ObjShipScan = document.getElementById('ShipItemContainer');
ObjShipScan.setAttribute('attr_Y', '100px') // Y = 100 (line of moving ship); Y = 0 (line for removing displayed stone items)
const ShipY = ObjShipScan.getAttribute('attr_Y');

let XShip = ObjShipScan.getAttribute("attr_X");
let YShip = ObjShipScan.getAttribute("attr_Y");
let ShipStyle = ObjShipScan.getAttribute("Style");
let FallingItem = document.getElementById("Stone_1");
let X_FallingItem;
let Y_FallingItem;


function StopGamePocesss(){
    XShip = ObjShipScan.getAttribute("attr_X");
    YShip = ObjShipScan.getAttribute("attr_Y");
    FallingItem = document.getElementById("Stone_1");
    Y_FallingItem = FallingItem.getAttribute("attr_Y");
    X_FallingItem = FallingItem.getAttribute("attr_X");
    console.log('X_Ship:'+ XShip);
    console.log('Y_Ship:'+ YShip);
    console.log('ShipParams:'+ ShipStyle);
    console.log('Y_FallingItem:'+  Y_FallingItem);
    console.log('X_FallingItem:'+  X_FallingItem);





    if (XShip === X_FallingItem && YShip === Y_FallingItem){
        CloseDoor();
    }
}


/// function for event colliding elements
///
///
///
let GetPlacement = ObjShipScan.getAttribute("path-number");
setInterval(
        function ScanPlacement(){
            ObjShipScan = document.getElementById('ShipItemContainer');
            GetPlacement = ObjShipScan.getAttribute("path-number");
            // console.log("Ship is on path №:",  GetPlacement);
            //call F2
            Comparecoordinates();
            return GetPlacement;
        } 
, 10);

function Comparecoordinates(){
        //parh R6
        let path_L6_LeftLimit = -650;
        let path_L6_RightLimit = -551;
        //parh R5
        // let path_L5_LeftLimit = -550;
        let path_L5_LeftLimit = -475;  ///limit from function MovingShip()
        let path_L5_RightLimit = -451;
        //parh R4
        let path_L4_LeftLimit = -450;
        let path_L4_RightLimit = -351;
        //parh R3
        let path_L3_LeftLimit = -350;
        let path_L3_RightLimit = -251;
        //parh R2
        let path_L2_LeftLimit = -250;
        let path_L2_RightLimit = -151;
        //parh R1
        let path_L1_LeftLimit = -150;
        let path_L1_RightLimit = -51;
    //path 00 // middle position
    let path_00_LeftLimit = -50;
    let path_00_RightLimit = 50;
        //parh R1
        let path_R1_LeftLimit = 51;
        let path_R1_RightLimit = 150;
        //parh R2
        let path_R2_LeftLimit = 151;
        let path_R2_RightLimit = 250;
        //parh R3
        let path_R3_LeftLimit = 251;
        let path_R3_RightLimit = 350;
        //parh R4
        let path_R4_LeftLimit = 351;
        let path_R4_RightLimit = 450;
        //parh R5
        let path_R5_LeftLimit = 451;
        let path_R5_RightLimit = 475; ///limit from function MovingShip()
        // let path_R5_RightLimit = 550; 
        //parh R6
        let path_R6_LeftLimit = 551;
        let path_R6_RightLimit = 650;

    let CompareCoordPath_L6 = (GetPlacement > path_L6_LeftLimit && GetPlacement < path_L6_RightLimit);  // left side 
    // let CompareCoordPath_L5 = (GetPlacement > path_L5_LeftLimit && GetPlacement < path_L5_RightLimit);  // left side 
    let CompareCoordPath_L5 = (GetPlacement > path_L5_LeftLimit && GetPlacement < path_L5_RightLimit);  // left side limit
    let CompareCoordPath_L4 = (GetPlacement > path_L4_LeftLimit && GetPlacement < path_L4_RightLimit);  // left side 
    let CompareCoordPath_L3 = (GetPlacement > path_L3_LeftLimit && GetPlacement < path_L3_RightLimit);  // left side 
    let CompareCoordPath_L2 = (GetPlacement > path_L2_LeftLimit && GetPlacement < path_L2_RightLimit);  // left side  
    let CompareCoordPath_L1 = (GetPlacement > path_L1_LeftLimit && GetPlacement < path_L1_RightLimit);  // left side 
    let CompareCoordPath_00 = (GetPlacement > path_00_LeftLimit && GetPlacement < path_00_RightLimit);  // middle position
    let CompareCoordPath_R1 = (GetPlacement > path_R1_LeftLimit && GetPlacement < path_R1_RightLimit);  // right side
    let CompareCoordPath_R2 = (GetPlacement > path_R2_LeftLimit && GetPlacement < path_R2_RightLimit);  // right side
    let CompareCoordPath_R3 = (GetPlacement > path_R3_LeftLimit && GetPlacement < path_R3_RightLimit);  // right side
    let CompareCoordPath_R4 = (GetPlacement > path_R4_LeftLimit && GetPlacement < path_R4_RightLimit);  // right side
    let CompareCoordPath_R5 = (GetPlacement > path_R5_LeftLimit && GetPlacement < path_R5_RightLimit);  // right side limit
    // let CompareCoordPath_R5 = (GetPlacement > path_R5_LeftLimit && GetPlacement < path_R5_RightLimit);  // right side
    let CompareCoordPath_R6 = (GetPlacement > path_R6_LeftLimit && GetPlacement < path_R6_RightLimit);  // right side


    if (CompareCoordPath_00){
    document.getElementById("PositionOutputFild").innerText = "On path: 00";
    } 
    if (CompareCoordPath_R1){
    document.getElementById("PositionOutputFild").innerText = "On path: R1";
    }
    if (CompareCoordPath_R2){
    document.getElementById("PositionOutputFild").innerText = "On path: R2";
    }
    if (CompareCoordPath_R3){
    document.getElementById("PositionOutputFild").innerText = "On path: R3";
    }
    if (CompareCoordPath_R4){
    document.getElementById("PositionOutputFild").innerText = "On path: R4";
    }
    if (CompareCoordPath_R5){
    document.getElementById("PositionOutputFild").innerText = "On path: R5";
    }
    if (CompareCoordPath_R6){
    document.getElementById("PositionOutputFild").innerText = "On path: R6";
    }
    if (CompareCoordPath_L1){
    document.getElementById("PositionOutputFild").innerText = "On path: L1";
    }
    if (CompareCoordPath_L2){
    document.getElementById("PositionOutputFild").innerText = "On path: L2";
    }
    if (CompareCoordPath_L3){
    document.getElementById("PositionOutputFild").innerText = "On path: L3";
    }
    if (CompareCoordPath_L4){
    document.getElementById("PositionOutputFild").innerText = "On path: L4";
    }
    if (CompareCoordPath_L5){
    document.getElementById("PositionOutputFild").innerText = "On path: L5";
    }
    if (CompareCoordPath_L6){
    document.getElementById("PositionOutputFild").innerText = "On path: L6";
    }
}







// let lim = -50;
// let GetAttr1 = ObjShipScan.getAttribute("path-number");
// console.log("Ship is on path №:", GetAttr1);
// if (GetAttr1 < lim){
//     CloseDoor();
// }