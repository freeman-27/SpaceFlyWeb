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
        console.log("Path №:"+ PathNumber);

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
        console.log("Path №:"+ PathNumber);
    }
        // if (keyBtnID === 37){ //decrRight (+Right)

        // }
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