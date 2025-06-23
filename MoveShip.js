let ObjShip = document.getElementById('ShipItemContainer');
// var CurrentX;
let xVar = 1; //for left and right functions
let xL_return;
let keyBtnID;
let retKey;
ObjShip.setAttribute("path-number", "0");

//limits:
let xL_Lim;
let xR_Lim;
// let RihgtControl = 39; //test

var PathID; //// for Detecting SpaceShip path-number position

function MovingFunction(event){
    switch (event.keyCode) {
      case 37:
        //  alert('Left key');
        //  MoveLeft();
        // MoveHorisontal_L();
        retKey = 37;
        GetKeyBtnID();
        // Move_Left();
        HorisontalMove();
      break;
      case 38:
         alert('Up key');
      break;
      case 39:
        //  alert('Right key');
        //  MoveRight();
        //  MoveHorisontal_R();
        retKey = 39;
        GetKeyBtnID();
        // Move_Right();
        HorisontalMove();
      break;
      case 40:
         alert('Down key');
      break;
      case 13:
        //  alert('Enter key');
         OpenDoor();
      break;
      case 27:
        //  alert('Esc key');
         CloseDoor();
      break;
      //mobile controllers: //test
        // case RihgtControl:
        //     retKey = 39;
        //     GetKeyBtnID();
        //     HorisontalMove();
        // break;
   }
  };

function GetKeyBtnID(){
    if (retKey === 37)
    keyBtnID = 37;
    if (retKey === 39)
    keyBtnID = 39;
    return keyBtnID;
}

// let ObjShip = document.getElementById("ShipItemContainer");
let incrLeft = 1;  //(-left)
let decrLeft = 1;  //(+left)

// let incrRight; //(-right)
// let decrRight; //(+right)
let PathNumber; //from 1 to 13 (13 Id-numbers). middle id path = 0; 
PathNumber = 0;
var CurrentPathOfShip;
function HorisontalMove(){
    let setX_left;
    let OutputLog;
    ////Mooving Left
    if (keyBtnID === 37){ // incrLeft (-Left)
        F_incrLeft();
        SetLeft_incr();
        function F_incrLeft(){
            xL_Lim = -475;
            incrLeft -=10; 
            PathNumber -= 10;
            // ObjShip.firstChild.style.add = 'transition-duration: 0s';
            ObjShip.firstChild.style.borderLeft = '0px solid red';
            ObjShip.firstChild.style.borderRight = '0px solid red';
            // ObjShip.firstChild.style.borderLeft = 'none';
            // ObjShip.firstChild.style.borderRight = 'none';
            if (incrLeft < xL_Lim){
                incrLeft = xL_Lim;
                // ObjShip.firstChild.style.add = 'transition-duration: 0.25s';
                ObjShip.firstChild.style.borderLeft = '5px solid red';
                ObjShip.firstChild.style.borderRadius = '25px';
            }
        }
        function SetLeft_incr(){
            setX_left = incrLeft + 'px';
            ObjShip.style.position = 'absolute';
            ObjShip.style.left = setX_left;
            ObjShip.setAttribute("attr_x", setX_left);
            ObjShip.setAttribute("path-number", PathNumber);
        }
        OutputLog = setX_left;
        // console.log(OutputLog);
        // console.log("Path №:"+ PathNumber); ///!

       

    } 

    ////Mooving Right
    if (keyBtnID === 39){ //incrRight (-Right)
        F_incrLeft();
        SetLeft_incr();
        function F_incrLeft(){
            xR_Lim = -475;
            incrLeft +=10; 
            PathNumber += 10;
            // PathNumber = PathNumber * 10;
            // ObjShip.firstChild.style.add = 'transition-duration: 0s';
            ObjShip.firstChild.style.borderLeft = '0px solid red';
            ObjShip.firstChild.style.borderRight = '0px solid red';
            if (incrLeft > xR_Lim*(-1)){
                incrLeft = xR_Lim*(-1);
                // ObjShip.firstChild.style.add = 'transition-duration: 0.25s';
                ObjShip.firstChild.style.borderRight = '5px solid red';
                ObjShip.firstChild.style.borderRadius = '25px';
            }
        }
        function SetLeft_incr(){
            setX_left = incrLeft + 'px';
            ObjShip.style.position = 'absolute';
            ObjShip.style.left = setX_left;
            ObjShip.setAttribute("attr_x", setX_left);
            ObjShip.setAttribute("path-number", PathNumber);
        }

        OutputLog = setX_left;
        // console.log(OutputLog);
        // console.log("Path №:"+ PathNumber); ///!

        console.log('pathID:' + PathID + '; current Pos:' + CurrentPathOfShip);
    }
    return Number_PathOfShip, CurrentPathOfShip, PathID;
}


setInterval(() => {
    SetPathOfShipNumber();
}, 100);

function SetPathOfShipNumber()
{

     ///////////////CurrentPosition of Ship for function ComparePath()

    //  Left limits 

        //path L6
        /// not Used // path_L6_LeftLimit = -650;
        /// not Used // path_L6_RightLimit = -551;
        //path L5
        /// disabled // let path_L5_LeftLimit = -550;
        // path_L5_LeftLimit = -475;  ///limit from function MovingShip()
        // path_L5_RightLimit = -451;
        //path L4
        // path_L4_LeftLimit = -450;
        // path_L4_RightLimit = -351;
        //path L3
        // path_L3_LeftLimit = -350;
        // path_L3_RightLimit = -251;
        //path L2
        // path_L2_LeftLimit = -250;  /// L2 (end)
        // path_L2_RightLimit = -151; /// L2 (start)
        //path L1
        // path_L1_LeftLimit = -150; /// L1 (end)
        // path_L1_RightLimit = -51; /// L1 (start)
        //path 00 // middle position
        ///path_00_LeftLimit = -50; ///zero left limit (end)
        ///path_00_RightLimit = 50; ///zero right limit (start)


    // Right Limits

        // //path 00 // middle position
        // path_00_LeftLimit = -50; ///zero left limit (end)
        // path_00_RightLimit = 50; ///zero right limit (start)
        // //path R1
        // path_R1_LeftLimit = 51;   /// R1 (end)
        // path_R1_RightLimit = 150; /// R1 (start)
        // //path R2
        // path_R2_LeftLimit = 151;  /// R2 (end)
        // path_R2_RightLimit = 250; /// R2 (start)
        // //path R3
        // path_R3_LeftLimit = 251;
        // path_R3_RightLimit = 350;
        // //path R4
        // path_R4_LeftLimit = 351;
        // path_R4_RightLimit = 450;
        // //path R5
        // path_R5_LeftLimit = 451;
        // path_R5_RightLimit = 475; ///limit from function MovingShip()
        // //path R6
        // path_R6_LeftLimit = 551;
        // path_R6_RightLimit = 650; ///not used


        ////// Left paths:
        //path L5
        if (PathNumber > path_L5_LeftLimit && PathNumber < path_L5_RightLimit){ /// path Path_L5 // -475 :|: -451
            PathID = 'Path_L5';
            CurrentPathOfShip = '-5';
            Number_PathOfShip = 1; ///  main value for compare path with other elements EQ line-id="Path_05"
        }
        //path L4
        if (PathNumber > path_L4_LeftLimit && PathNumber < path_L4_RightLimit){ /// path Path_L4 // -450 :|: -351
            PathID = 'Path_L4';
            CurrentPathOfShip = '-4';
            Number_PathOfShip = 2; ///  main value for compare path with other elements EQ line-id="Path_04"
        }
        //path L3
        if (PathNumber > path_L3_LeftLimit && PathNumber < path_L3_RightLimit){ /// path Path_L3 // -350 :|: -251
            PathID = 'Path_L3';
            CurrentPathOfShip = '-3';
            Number_PathOfShip = 3; ///  main value for compare path with other elements EQ line-id="Path_03"
        }
        //path L2
        if (PathNumber > path_L2_LeftLimit && PathNumber < path_L2_RightLimit){ /// path Path_L2 // -250 :|: -151
            PathID = 'Path_L2';
            CurrentPathOfShip = '-2';
            Number_PathOfShip = 4; ///  main value for compare path with other elements EQ line-id="Path_02"
        }
        //path L1
        if (PathNumber > path_L1_LeftLimit && PathNumber < path_L1_RightLimit){ /// path Path_L1 // -150 :|: -51
            PathID = 'Path_L1';
            CurrentPathOfShip = '-1';
            Number_PathOfShip = 5; ///  main value for compare path with other elements EQ line-id="Path_01"
        }
        ////// middle path
        //path 00 // middle position
        if (PathNumber > path_00_LeftLimit && PathNumber < path_00_RightLimit){ /// path Path_00 // -50 :|: 50
            PathID = 'Path_00';
            CurrentPathOfShip = '0';
            Number_PathOfShip = 6; ///  main value for compare path with other elements EQ line-id="Path_00"
        }

        ////// Right paths:
        //path R1
        if (PathNumber > path_R1_LeftLimit && PathNumber < path_R1_RightLimit){ /// path Path_L4 // -450 :|: -351
            // PathID = 'Path_R1';
            // CurrentPathOfShip = '1';
            Number_PathOfShip = 7; ///  main value for compare path with other elements EQ line-id="Path_04"
        }
        //path R2
        if (PathNumber > path_R2_LeftLimit && PathNumber < path_R2_RightLimit){ /// path Path_L3 // -350 :|: -251
            // PathID = 'Path_R2';
            // CurrentPathOfShip = '2';
            Number_PathOfShip = 8; ///  main value for compare path with other elements EQ line-id="Path_03"
        }
        //path R3
        if (PathNumber > path_R3_LeftLimit && PathNumber < path_R3_RightLimit){ /// path Path_L2 // -250 :|: -151
            // PathID = 'Path_R3';
            // CurrentPathOfShip = '3';
            Number_PathOfShip = 9; ///  main value for compare path with other elements EQ line-id="Path_02"
        }
        //path R4
        if (PathNumber > path_R4_LeftLimit && PathNumber < path_R4_RightLimit){ /// path Path_L1 // -150 :|: -51
            // PathID = 'Path_R4';
            // CurrentPathOfShip = '4';
            Number_PathOfShip = 10; ///  main value for compare path with other elements EQ line-id="Path_01"
        }
        //path R5
        if (PathNumber > path_R5_LeftLimit && PathNumber < path_R5_RightLimit){ /// path Path_L1 // -150 :|: -51
            // PathID = 'Path_R4';
            // CurrentPathOfShip = '5';
            Number_PathOfShip = 11; ///  main value for compare path with other elements EQ line-id="Path_01"
        }


        CurrentPathOfShip = Number_PathOfShip;
        console.log('pathID:' + PathID + '; current Pos:' + CurrentPathOfShip);
        return Number_PathOfShip;
}
















// function Move_Left(){
//     xL_Lim = -475;
//     let ObjShip = document.getElementById("ShipItemContainer");

//     if (keyBtnID === 37){
//         xVarCheck();
//         SetLeft();
//         function SetLeft(){
//           console.log(ObjShip.style.left);
//           let setX_left = xVar + 'px';
//           ObjShip.style.position = 'absolute';
//           ObjShip.style.left = setX_left;
//         }
//         function xVarCheck(){
//           if (xVar < xL_Lim){
//             xVar = xL_Lim;
//             // ObjShip.firstChild.style.add = 'transition-delay: 3s';
//             ObjShip.firstChild.style.add = 'transition-duration: 3s';
//             ObjShip.firstChild.style.borderLeft = '2px solid red';
//           } else {
//             // xVar--;
//             xVar-= 1;
//           }
//           return xVar;
//         }
//     }
//     // window.alert(xVar);
//     // window.alert(xL);
//     // xL = '-100px';
//     xL_return = xVar * (-1);
//     console.log('xVar:', xVar,  '; xL_return:', xL_return, "." );
// }
// function Move_Right(){
//     xR_Lim = -485;

//     let ObjShip = document.getElementById("ShipItemContainer");
//     // xR = '100px';
//     // ObjShip.style.left = xR;
//     let setX_right = xVar + 'px';
//     if (keyBtnID === 39){
//         xVarCheck();
//         SetRight();
//         function SetRight(){
//         // console.log(ObjShip.style.right);
//         // xR = xVar + 'px';
        
//         ObjShip.style.position = 'absolute';
//         ObjShip.style.right = setX_right;
//         // ObjShip.style.right = xR;
//         }
//         function xVarCheck(){ 
//         if (xL_return > 1){
//             let set_xR = 1;
//             set_xR +=1;
//             setX_right = set_xR;
//             // ObjShip.style.left = set_xR;
//         }

//         if (xL_return > 1 && xVar < 1){
//           xVar=xVar*(-1);
//           let decr_left = xVar + 'px';
//           xVar+=1;
//           ObjShip.style.left = decr_left;
//         } else
//         if (xVar < xR_Lim && xVar < 1){
//             xVar = xR_Lim;
//             // ObjShip.firstChild.style.add = 'transition-delay: 3s';
//             ObjShip.firstChild.style.add = 'transition-duration: 3s';
//             ObjShip.firstChild.style.borderRight = '2px solid red';
//         } else {
//             // xVar--;
//             xVar-= 1;
//         }
//         return xVar;
//         }
//     }
//     xR_return = xVar * (-1);
//     console.log('Right_xVar:', xVar,  '; xR_return:', xR_return, ".", "| xLreturn:", xL_return );
// }