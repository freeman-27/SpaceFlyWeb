///Disabled
// setInterval(
// function (){
//     let RemoveItems1 = document.getElementById('Stone_T1');
//     let RemoveItems2 = document.getElementById('Star_T1');
//     RemoveItems1.remove();
//     RemoveItems2.remove();
// }, 2000) //2000 default
// // }, 1350) //2000 default

///Disabled
// function ClearItemsOutOfLimits(){
//     let RemoveItems1 = document.getElementById('Stone_T1');
//     let RemoveItems2 = document.getElementById('Star_T1');
//     RemoveItems1.remove();
//     RemoveItems2.remove();
// }


////function forceRemovingItems
///removing elements with stopped animation
///
function ForceRemoveAnimatedItemsFromBG(){setInterval ( () => {
    document.getElementById('BackgroundAnimatedItems').innerHTML = ('   ');
    }, 18500);
}
