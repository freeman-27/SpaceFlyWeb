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
 ///left and right limits of vertical paths of falling items(stones)
 ///path L6
 const path_L6_LeftLimit = -650;
 const path_L6_RightLimit = -551;
 ///path L5
 // let path_L5_LeftLimit = -550;
 const path_L5_LeftLimit = -475;  ///limit from function MovingShip()
 const path_L5_RightLimit = -451;
 //parth L4
 const path_L4_LeftLimit = -450;
 const path_L4_RightLimit = -351;
 ///path L3
 const path_L3_LeftLimit = -350;
 const path_L3_RightLimit = -251;
 ///path L2
 const path_L2_LeftLimit = -250;  /// L2 (end)
 const path_L2_RightLimit = -151; /// L2 (start)
 ///path L1
 const path_L1_LeftLimit = -150; /// L1 (end)
 const path_L1_RightLimit = -51; /// L1 (start)
//path 00 // middle position
const path_00_LeftLimit = -50; ///zero left limit (end)
const path_00_RightLimit = 50; ///zero right limit (start)
 ///path R1
 const path_R1_LeftLimit = 51;   /// R1 (end)
 const path_R1_RightLimit = 150; /// R1 (start)
 ///path R2
 const path_R2_LeftLimit = 151;  /// R2 (end)
 const path_R2_RightLimit = 250; /// R2 (start)
 ///path R3
 const path_R3_LeftLimit = 251;
 const path_R3_RightLimit = 350;
 ///path R4
 const path_R4_LeftLimit = 351;
 const path_R4_RightLimit = 450;
 ///path R5
 const path_R5_LeftLimit = 451;
 const path_R5_RightLimit = 475; ///limit from function MovingShip()
 // let path_R5_RightLimit = 550; 
 ///path R6
 const path_R6_LeftLimit = 551;
 const path_R6_RightLimit = 650;
/// function of compare with limits
/// Returns Value Of Number Vertical Path Of Ship
///


/// values for  ComparePath() and Comparecoordinates() - to detect collision ship and stone
var PathNumberOfStone;
var Value_PathOfShip;


function Comparecoordinates(){

    // let CompareCoordPath_L6 = (GetPlacement > path_L6_LeftLimit && GetPlacement < path_L6_RightLimit);  // left side ///not used
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
    // let CompareCoordPath_R6 = (GetPlacement > path_R6_LeftLimit && GetPlacement < path_R6_RightLimit);  // right side ///not used


    ///LEFT PATHS
    // if (CompareCoordPath_L6){
    // document.getElementById("PositionOutputFild").innerText = "On path: L6";
    // Value_PathOfShip = 0;
    // }
    if (CompareCoordPath_L5){
        document.getElementById("PositionOutputFild").innerText = "On path: L5";
        Value_PathOfShip = 1
        }
    if (CompareCoordPath_L4){
    document.getElementById("PositionOutputFild").innerText = "On path: L4";
    Value_PathOfShip = 2;
    }

    if (CompareCoordPath_L3){
    document.getElementById("PositionOutputFild").innerText = "On path: L3";
    Value_PathOfShip = 3;
    }
    if (CompareCoordPath_L2){
        document.getElementById("PositionOutputFild").innerText = "On path: L2";
        Value_PathOfShip = 4;
        }
    if (CompareCoordPath_L1){
        document.getElementById("PositionOutputFild").innerText = "On path: L1";
        Value_PathOfShip = 5;
        }

    ///MIDDLE PATH
    if (CompareCoordPath_00){
        document.getElementById("PositionOutputFild").innerText = "On path: 00";
        Value_PathOfShip = 6;
        } 
    ///RIGHT PATHS
    if (CompareCoordPath_R1){
        document.getElementById("PositionOutputFild").innerText = "On path: R1";
        Value_PathOfShip = 7;
        }
        if (CompareCoordPath_R2){
        document.getElementById("PositionOutputFild").innerText = "On path: R2";
        Value_PathOfShip = 8;
        }
        if (CompareCoordPath_R3){
        document.getElementById("PositionOutputFild").innerText = "On path: R3";
        Value_PathOfShip = 9;
        }
        if (CompareCoordPath_R4){
        document.getElementById("PositionOutputFild").innerText = "On path: R4";
        Value_PathOfShip = 10;
        }
        if (CompareCoordPath_R5){
        document.getElementById("PositionOutputFild").innerText = "On path: R5";
        Value_PathOfShip = 11;
        }
    // if (CompareCoordPath_R6){
    // document.getElementById("PositionOutputFild").innerText = "On path: R6";
    // Value_PathOfShip = 12;
    // }
    return Value_PathOfShip;
}







// let lim = -50;
// let GetAttr1 = ObjShipScan.getAttribute("path-number");
// console.log("Ship is on path №:", GetAttr1);
// if (GetAttr1 < lim){
//     CloseDoor();
// }


///Compare position of MovingShip and FallingObject
/// functions: IncrPositionOfStone() and ComparePath()
/// to detect collision ship and stone
var SpaceShipObj_Damage;
var Vertical_PositionOfStone = 0 ///start height from 0 to 3 (Let 3 is the line of SpaceShip)
const Horisontal_PositionOfShip = 3 ///height of ship moving line 
var IncrHeightInterval
var DamageCount = 3;
var LivesCount;
// var LivesCount = DamageCount;

/// 
var Number_PathOfShip; ///Number_PathOfShip is value from ship mooving function


function IncrPositionOfStone(){
    var IncrVol = 1; //1;
    setInterval(function(){
        Vertical_PositionOfStone += IncrVol;
        // console.log('pos. Count:', Vertical_PositionOfStone);
        ComparePath();
        if (Vertical_PositionOfStone > 4){
            Vertical_PositionOfStone = 0;
        }
    }, 500) /// timeOut like interval from function AddItemsToFixedPathContainer()
    return Vertical_PositionOfStone, IncrHeightInterval;
}
///functions: ComparePath()
function ComparePath(){
    PathNumberOfStone = SetNumber_PathOfStone; /// from function AddItemsToFixedPathContainer()
    // Value_PathOfShip = Number_PathOfShip; ///do not work - from function HorisontalMove() - MoveShip.js 
    // Value_PathOfShip = CurrentPathOfShip; /// from function HorisontalMove() - MoveShip.js
    console.log('\n 1.: Vertical_PositionOfStone: ' + Vertical_PositionOfStone + ' 2.: Horisontal Position of Ship' + Horisontal_PositionOfShip + ' 3.: Stone path' + PathNumberOfStone + ' 4. Ship_Path: ' + Value_PathOfShip); ///check values
    if (Vertical_PositionOfStone == 3 && Horisontal_PositionOfShip == 3 && PathNumberOfStone == Value_PathOfShip){
        //play sound
        document.getElementById('ShipDamageSound').play();
        Vertical_PositionOfStone = 0;
        // ///add class to SpaceShip obj - animation damage
        SpaceShipObj_Damage = document.getElementById('ShipItemImg');
        SpaceShipObj_Damage.classList.add('DamageAnimation');
        DamageCount -= 1;
        LivesCount -= 1;
        // LivesCount = DamageCount;
        console.log('Damage Count:', DamageCount);
        document.getElementById('LivesCounter').innerText = 'Lives:' + LivesCount;
        GameOver();
        setTimeout( //remove class to SpaceShip obj - animation damage
        function (){
            SpaceShipObj_Damage.classList.remove('DamageAnimation');
            // clearInterval(IncrHeightInterval)
        }, 1000)
    }
    console.log('PathOfShip' + Value_PathOfShip);
    return DamageCount, LivesCount;
}


function GameStart(){
    DamageCount = 3;
    LivesCount = 3;
    document.body.style.backgroundColor = 'rgba(2, 0, 66, 0.445)';
    document.getElementById('ShipItemContainer').style.opacity = 1;
    // AppStopped = true;
    // // setTimeout (function() {StartApp();}, 1000);
    return DamageCount, LivesCount;
}

/// GameOver function
function GameOver(){
    setTimeout( () => {
        
        // if (DamageCount < 1 && DamageCount > -1){
        if (DamageCount < 1){
            DamageCount = 'disabled';
            LivesCount = 0; 
            Value_PathOfShip = 'destroed g.o.'; /// when game is over
            console.log('PathOfShip' + Value_PathOfShip);
            Vertical_PositionOfStone = 99999;
            ///disable loudness of ship and falling stones
            CurrentValueOfSoundTail = ZeroLoudness;
            SoundOfDamage.volume = ZeroLoudness;
            document.getElementById('ShipEngineSound').volume = ZeroLoudness;
            document.body.style.backgroundColor = 'rgba(66, 0, 2, 0.445)';
            document.getElementById('ShipItemContainer').style.opacity = 0.1;
            setTimeout (function() {StopApp();}, 1000);
            ///force reload:
            // setTimeout (function() {window.open('/', '_self')}, 20000); ///force reload disabled
        }
        console.log('Game over =====================================================');
    }, 2000);
    return DamageCount, LivesCount, Value_PathOfShip;
}


/// Increment for LiveCounter  
/// Add +1 count
/// AddCount()
var LiveCounterIncrActive;
var PathOfAddCount = 0;

// setInterval(
function AddLiveCount(){
    var AddNumber = Math.floor(Math.random() * 11);  /// 0 to 11
    var Count_plus1_item = document.createElement('div');

    Count_plus1_item.setAttribute('style', 'block-size: 95px; width: 95px; position: relative; top: 35% /* equil value:s css MovingShipItem_RunningMove (top...) */;');
    Count_plus1_item.setAttribute('class', 'BonuseOfLiveItemStyle rounded-circle border border-1 border-white text-light fw-bold display-3');
    Count_plus1_item.setAttribute('id', 'Count_plus1_element');
    Count_plus1_item.innerText = '+1';
    document.getElementById('0' + AddNumber).appendChild(Count_plus1_item);
    LiveCounterIncrActive = true;
    console.log('Activate Live Counter Incr: ' + LiveCounterIncrActive);
    PathOfAddCount = AddNumber; /// to compare with other functions
    setTimeout( () => { DisableLivesCounter(); 
    }, 8500);
    return PathOfAddCount, LiveCounterIncrActive;
}
// , 35000);

///Disable LivesCouter
function DisableLivesCounter()
{
    document.getElementById('Count_plus1_element').remove(); LiveCounterIncrActive = false; 
    console.log('Disable Live Counter: ' + LiveCounterIncrActive);
    return LiveCounterIncrActive;
}

/// Lasers animation
/// 
/// function LaserShot
function  LaserShot(){ ///z-index of ship item container is 777005;
    // var LaserItem = document.createElement('div');
    var LaserItem = document.createElement('span');
    // LaserItem.setAttribute('class', 'rounded-2 bg-warning border-0 LaserVerticalAnimation');
    LaserItem.setAttribute('class', 'DefaultLaserFormOrange DDD-LaserForm_T3 LaserVerticalAnimation');
    LaserItem.setAttribute('style', 'block-size: 12px; width: 4px; position: absolute; z-index: 222005 !important;  bottom: 155px;');
    /// add counters:
    // LaserItem.setAttribute('path-number', ); /// from ship mooving function
    if (PathOfAddCount == Number_PathOfShip && LiveCounterIncrActive == true){ ///Number_PathOfShip is value from ship mooving function
        /// incr live number:
        if(LivesCount < 3){
            DamageCount += 1;
            LivesCount += 1;
            document.getElementById('Count_plus1_element').classList.add('bg-success BonuseOfLiveAnimation');
            document.getElementById('LongHealthSound').play();
            LiveCounterIncrActive = false;
        }
        document.getElementById('Count_plus1_element').classList.remove('BonuseOfLiveItemStyle');
        document.getElementById('Count_plus1_element').classList.add('BonuseOfLiveAnimation');
        // document.getElementById('Count_plus1_element').classList.add('bg-dark BonuseOfLiveAnimation');
        document.getElementById('HealthSound').play();
    }; 
    document.getElementById('LaserOfShipItem').appendChild(LaserItem);
    // document.getElementById('OnceLaserOfShipItem').classList.add('LaserType2 LaserVerticalAnimation');
    console.log('Current path of ship LaserShot(): ' + Value_PathOfShip);

    setInterval (() => {document.getElementById('LaserOfShipItem').remove()}, 1000);
    
    var ReAddLaserItemContainer = document.createElement('div');
    ReAddLaserItemContainer.setAttribute('id', 'LaserOfShipItem');
    setInterval (() => {document.getElementById('ShipItemContainer').appendChild(ReAddLaserItemContainer);}, 500);
    document.getElementById('ShipItemContainer').appendChild(ReAddLaserItemContainer);
    
    
    return DamageCount, LivesCount, LiveCounterIncrActive;
}

var LMouseDown;
var LMouseUp;
function UseLasers(){
    switch (mouseBtn) {
        case LMouseDown:
            // !!! LaserShot();
            var Call_F1 = setInterval(() => {
                LaserShot();
            }, 1000);
            //! document.getElementById('OnceLaserOfShipItem').classList.add('LaserType2 LaserVerticalAnimation');
            //! document.getElementById('OnceLaserOfShipItem').setAttribute('style', 'background: red; bottom: 155px; block-size: 150px; wisth: 50px; position: absolute; z-index: 18505555551;'); ///test
            break;
        case LMouseUp:
            clearInterval(Call_F1);
            //! document.getElementById('OnceLaserOfShipItem').classList.remove('LaserType2 LaserVerticalAnimation');
            //! document.getElementById('OnceLaserOfShipItem').setAttribute('style', ' ');


            break;
        default:
            break;
    }
}
