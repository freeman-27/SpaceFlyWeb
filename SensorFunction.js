///For mouse or TouchScreen
///
///
let Int1;
function CallMoveOnPress(MoveParam){
    // keyBtnID = 39;
    keyBtnID = MoveParam;
    Int1 = setInterval(function CSSVariableReferenceValue(){
        HorisontalMove();
    }, 50);
}
function StopMoveOnUnpressed(){
    clearInterval(Int1);
}