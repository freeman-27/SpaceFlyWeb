let MainItemsContainer = document.getElementById("MiddleItemsGroup");

let CurrentX;
let CurrentY;
let RandomForX;
let incrY;
let StNumber = 1;
let NewStoneItem = document.createElement('div');
NewStoneItem.setAttribute("id", "St_" + StNumber);
NewStoneItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left: 300px; top: 300px; border: 2px solid blue !important; z-index: 999005 !important;");


let StonesArray = [20];
StonesArray = {

}
/// Modify Items in Array
/// Modifyes Items In Array Before Adding to DOM 
/// for main function AddStoneItem()
function ModifyItemsInArr(){
    StNumber = 1;

    for (let index = 0; index < StonesArray.length; index++) {
        // const element = StonesArray[index];
        // var element = StonesArray[index];
        RandomX_CoordinatesForStonesItems();
        NewStoneItem.setAttribute("id", "St_" + StNumber);
        // NewStoneItem.setAttribute("style", "position: absolute; left:"+ RandomForX + "px; top: 100px; border: 2px solid blue !important;");
        NewStoneItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left: 300px; top: 300px; border: 2px solid blue !important; z-index: 999005 !important;");
        StonesArray[index] = NewStoneItem;
        console.log("ModifyItemsInArr:", NewStoneItem);
        // window.alert("ModifyItemsInArr():", NewStoneItem);
        StNumber++;
        console.log("AddStoneItem() Stone №:", StNumber); //check
    }
    // window.alert("ModifyItemsInArr():", NewStoneItem);
    console.log("ModifyItemsInArr():", NewStoneItem);
}
/// Random Cpoordinates
/// RandomX_CoordinatesForStonesItems()
/// creates values X for function ModifyItemsInArr()
function RandomX_CoordinatesForStonesItems(){
    RandomForX = Math.floor(Math.random() * 1200) + 10; //X from 10 to 50
    // console.log("X:", RandomX, "Y:", RandomY); //check
    return RandomForX;
}

/// Create and increment Y coordinates for EXISTING items
/// IncrY_HeightForStonesItems()
/// increment values Y for function AnimateFalling()
incrY = 100; // start Y value 
/// 
function IncrY_HeightForStonesItems(){
    
    setInterval(function increment_Y(){
        incrY += 110;
    }, 500);
    // RandomY = Math.floor(Math.random() * 200) + 1; //Y from 1 to 20
    console.log("RandomHeightForStonesItems()", incrY); //check
    return incrY;
}

/// Adding Falling Stones
/// AddStoneItem() Main Function
/// AutoRemovable items after playing animation has finished
function AddStonesItems(){
    // StNumber = 1;
    // ModifyItemsInArr();.
    let NewStoneItem = document.createElement('div');
    RandomX_CoordinatesForStonesItems();
    NewStoneItem.setAttribute("id", "St_" + StNumber);
    NewStoneItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left:"+ RandomForX + "px; top: 300px; border: 2px solid blue !important; z-index: 999005 !important;");
    NewStoneItem.setAttribute("class", "rounded-circle");
    // let ImgStarType1 = documen.createElement('img');
    // ImgStarType1.setAttribute("src", "img/StarType4.png");
    NewStoneItem.innerHTML = "<img src='img/RockTexture1.PNG' class='rounded-circle' width='100%' height='100%'>"
    // NewStoneItem.appendChild(ImgStarType1);

    MainItemsContainer.appendChild(NewStoneItem);
    // StNumber++;
    // setInterval (function AddItems(){
    // function AddItems(){
    //     for (let index = 0; index < StonesArray.length; index++) {
    //         // const element = StonesArray[index];
    //         // var element = StonesArray[index];
    //         // MainItemsContainer.appendChild(StonesArray[index]);
    //         MainItemsContainer.appendChild(NewStoneItem);
    //         // StNumber++;
    //         // AnimateFalling();
    //         console.log("AddStoneItem() Stone №:", StNumber); //check
    //     }
    // }
    // }, //2000);
    // AddItems();
    AnimateFalling();
    console.log('call function AddItems()');
}

// TODO //////////////////////////////////////////////////////////////////////////////////
function AnimateFalling(){
    let St1 = document.getElementById("St_1");
    IncrY_HeightForStonesItems();
    St1.setAttribute("style", "top:" + incrY + "px;");   
    // NewStoneItem.setAttribute("style", "position: absolute; left:"+ RandomForX + "px; top:" + incrY + "px; border: 2px solid blue !important;");
}

function RemoveStoneItem(){

}
function CompareValues(){

}