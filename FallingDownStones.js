let MainItemsContainer = document.getElementById("MiddleItemsGroup");
let FallingItemsContainer = document.getElementById("FallingItemsContainer");
let FallingItemsContainerFixed = document.getElementById("FallingItemsContainerFixed");
let CurrentX;
let CurrentY;
let RandomForX;
let incrY;
let StNumber = 1;
let StoneItemContainer = document.createElement('div');
let NewStoneItem = document.createElement('div');
StoneItemContainer.setAttribute("id", "St_" + StNumber);
// NewStoneItem.setAttribute("id", "St_" + StNumber);
NewStoneItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left: 300px; top: 300px; border: 2px solid blue !important; z-index: 999005 !important;");
// NewStoneItem.innerHTML 
let StoneAndTailOnPath = '<div><div id="TailStoneOnPath" class="" style="width: 75px; block-size: 60px; top: 5px; position: absolute; z-index: 555005; -webkit-backdrop-filter: blur(5px) !important; backdrop-filter: blur(5px) !important;"><span class="d-none">0</span></div><div class="triangle-up-orange" style="z-index: 444005; top:-55px; position: absolute;"></div>'+ NewStoneItem +'</div>';


StoneItemContainer.appendChild(NewStoneItem);
let ImgSourceType1 = 'img/RockTexture1.PNG';

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
        NewStoneItem.setAttribute("class", "");
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
incrY = 300; // start Y value 
/// 
function IncrY_HeightForStonesItems(){
    
    setInterval(function increment_Y(){
        incrY += 10;
    }, 1000);
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
    // NewStoneItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left:"+ RandomForX + "px; top: 300px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");
    // NewStoneItem.setAttribute("style", "left:"+ RandomForX + "px; top: 300px;");
    NewStoneItem.setAttribute("X", RandomForX); ////////******** atribute preset for save value for each element to other functions(only for storage value)
    NewStoneItem.setAttribute("class", "rounded-circle FallingStonesPreset");
    // let ImgStarType1 = documen.createElement('img');
    // ImgStarType1.setAttribute("src", "img/StarType4.png");

    // NewStoneItem.innerHTML = "<img src='img/RockTexture1.PNG' class='rounded-circle' width='100%' height='100%'>"
    // NewStoneItem.innerHTML = "<img src='img/RockTexture1.PNG' class='rounded-circle' width='100%' height='100%'>"

    // NewStoneItem.appendChild(ImgStarType1);

    // MainItemsContainer.appendChild(NewStoneItem);
    FallingItemsContainer.appendChild(NewStoneItem);

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


    // AnimateFalling();
    console.log('call function AddItems()');
}

// TODO //////////////////////////////////////////////////////////////////////////////////
let index = 1 ;
function AnimateFalling(){
    // let St1 = document.getElementById("St_1");
    
    let SelectFromContainer = document.getElementById("FallingItemsContainer").children.length;
    // do  { 
    //     // SelectFromContainer.children[index];
    //     // const element = SelectFromContainer.children[index];
    //     // St1.setAttribute("top", incrY + "px");   
    //     // St1.setAttribute("style", "top:" + incrY + "px !important; transition-duration: 3s;");   
    //     // NewStoneItem.setAttribute("style", "position: absolute; left:"+ RandomForX + "px; top:" + incrY + "px; border: 2px solid blue !important;");
    //     IncrY_HeightForStonesItems();
    //     SelectFromContainer.children[index].setAttribute("style", "block-size: 100px; width:100px; position: absolute; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
    //     index += 1;
    // } while (index < SelectFromContainer.children[length])

    // for (index = 0; index < SelectFromContainer.children[length]; index++) {
    //     SelectFromContainer.children[index];
    //     // const element = SelectFromContainer.children[index];
    //     // St1.setAttribute("top", incrY + "px");   
    //     // St1.setAttribute("style", "top:" + incrY + "px !important; transition-duration: 3s;");   
    //     // NewStoneItem.setAttribute("style", "position: absolute; left:"+ RandomForX + "px; top:" + incrY + "px; border: 2px solid blue !important;");
    //     IncrY_HeightForStonesItems();
    //     SelectFromContainer.children[length].setAttribute("style", "block-size: 100px; width:100px; position: absolute; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
    
    // } 
    
    // let STONE_arr = [100];
    // STONE_arr = {SelectFromContainer};

    // RandomX_CoordinatesForStonesItems();
    IncrY_HeightForStonesItems();
    let ChildItem;
    function F1(){
        // for (index = 0; index < SelectFromContainer; index++) {
        //     // document.getElementById("FallingItemsContainer").children[index].setAttribute("style", "block-size: 100px; width:100px; position: absolute; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
        // }

        ChildItem = document.getElementById("FallingItemsContainer").children[index];
        CurrentX = ChildItem.getAttribute("X"); ///// from each element (storage value)

        ChildItem.setAttribute("style", "left:"+ CurrentX + "px; top:" + incrY + "px;");    
        NewStoneItem.setAttribute("class", "rounded-circle FallingStonesPreset");

        index++;
        // for (index = 0; index < STONE_arr.length; index++) {
            
        // }

        console.log('X:'+ CurrentX );
        // return ChildItem, CurrentX, index;
    }
    F1();
    // index++;
    // ChildItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left:"+ RandomForX + "px; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
    // ChildItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
    // document.getElementById("FallingItemsContainer").children[index].setAttribute("style", "block-size: 100px; width:100px; position: absolute; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    
    // window.alert('count:'+ document.getElementById("FallingItemsContainer").children.length);
    // array.forEach(element => {
        
    // });
    // ChildItem.setAttribute("style", "block-size: 100px; width:100px; position: absolute; left:"+ CurrentX + "px; top:" + incrY + "px; border: 2px solid blue !important; z-index: 999005 !important; background: url("+ ImgSourceType1 +"); background-size: cover;");    

    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// function AddItemsToFixedPathContainer()
/// add FallingStones items with custom X and Y attribites
///
// PathNumber = 1;
// let CurrentItemPath = FallingItemsContainerFixed.children[PathNumber];
let CurrentItemPath = FallingItemsContainerFixed.children[PathNumber];

function AddItemsToFixedPathContainer(){
    setInterval( function(){
    if (PathNumber > 13){
        PathNumber = 1;
    } 

    function PathNumberGen(){
        PathNumber = Math.floor(Math.random() * 13); 
    }
    // if (PathNumber < 13){
    PathNumberGen();
    RandomX_CoordinatesForStonesItems();
    // CurrentItemPath = FallingItemsContainerFixed.children[5];
    CurrentItemPath = FallingItemsContainerFixed.children[PathNumber];
    NewStoneItem.setAttribute("class", "rounded-circle RotatedStones FallingStonesPreset Off-FallingStones");
    NewStoneItem.setAttribute("style", "position: relative !important; top:-50px; z-index: 222005;");
    NewStoneItem.setAttribute("id", "Stone_1");
    IncrY_HeightForStonesItems();
    NewStoneItem.setAttribute("attr_X", PathNumber*100 + "px");
    NewStoneItem.setAttribute("attr_Y", incrY + "px");
    // NewStoneItem.setAttribute("style", "left:"+ RandomForX + "px;");
    // FallingItemsContainerFixed.children[PathNumber].appendChild(NewStoneItem);
    // StoneItemContainer.innerHTML = '<div>'+ NewStoneItem +'<div class="" style="width: 75px; block-size: 60px; top: 5px; position: relative; z-index: 555005; -webkit-backdrop-filter: blur(5px) !important; backdrop-filter: blur(5px) !important;"><span class="d-none">0</span></div><div class="triangle-up-orange" style="z-index: 444005; top:-55px; position: relative;"></div></div>';
    StoneItemContainer.setAttribute("style", "border: 0px solid red; top:-500px; block-size: 300px;");
    StoneItemContainer.setAttribute("class", "FallingStones");
    // StoneAndTailOnPath = '<div id="TailStoneOnPath" class="" style="width: 75px; block-size: 60px; top: 5px; position: relative; z-index: 555005; -webkit-backdrop-filter: blur(5px) !important; backdrop-filter: blur(5px) !important;"><span class="d-none">0</span></div><div class="d-none triangle-up-orange" style="z-index: 444005; top:-55px; position: relative;"></div><img src="img/Triangle90x250_OrangeTransparent.png">';
    // StoneAndTailOnPath = '<div id="TailStoneOnPath" class="" ><img style="position relative; z-index: 1111005 !important;" src="img/Triangle90x250_OrangeTransparentBlur.png"></div>';
    StoneAndTailOnPath = '<div id="TailStoneOnPath" class="" style="position relative; z-index: 555005 !important;"><img src="img/Triangle90x250_OrangeTransparentBlur.png"></div>';
    let TailTopLayer = document.createElement('img');
    TailTopLayer.setAttribute('src', 'img/Tail_90x250_YellowTransparentBlur.png');
    TailTopLayer.setAttribute('style', 'top: -375px; position:relative; z-index: 2222005; width:100%; heihght: 350px; opacity: 0.4;');

    StoneItemContainer.innerHTML = StoneAndTailOnPath;
    StoneItemContainer.appendChild(NewStoneItem);
    StoneItemContainer.appendChild(TailTopLayer);
    FallingItemsContainerFixed.children[PathNumber].appendChild(StoneItemContainer);
    document.getElementById('MeteorTailSound').volume = 0.1;
    document.getElementById('MeteorTailSound').play();
    // PathNumber++;
    // }
    }, 3000)
    
    return PathNumber;
}



function RemoveStoneItem(){

}
function CompareValues(){

}


