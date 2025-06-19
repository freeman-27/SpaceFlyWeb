var ScreenWidth = window.innerWidth;
// var ScreenHeight = 100;
var ScreenHeight = window.outerHeight;
// var incrHeight = 100;
// ScreenHeight += incrHeight; 
// document.getElementById('MainLoader').setAttribute('style', 'width:' + ScreenWidth + '; block-size:' + ScreenHeight +'% !important;');
document.getElementById('MainLoader').setAttribute('style', 'width:' + ScreenWidth + ';');
// console.log('width:' + innerWidth + '; block-size:' + innerHeight +' !important;')



///Loading function
// function loadingFunction(){
//     setTimeout(function() {
//     document.getElementById('app_container').classList.remove('d-none');
//     }, 3000)
// }

var Div1 = document.createElement('div');
var elem = document.getElementById("MainLoader");
const height = 100;

var counter = 1;
var intarval1 = setInterval(
function AnimateBackground(){
    // setInterval(function(){
    
        elem = document.getElementById("MainLoader");
        Div1 = document.createElement('div');
        Div1.setAttribute('style', 'block-size:' + height +'px; position: relative; z-index: -5 !important;' );
        Div1.setAttribute('class', 'LoaderStyleBG');
        // document.body.appendChild(Div1);
        elem.appendChild(Div1);
        counter++;
        console.log('counter:',  counter);
        StopLoadingAnimation();
        return counter;
    }, 200);

function StopLoadingAnimation(){
    // if (counter == 1){
        
    // }
    if (counter > 30) {
    counter = 1;
    clearInterval(intarval1);
    }
}





// setTimeout(function (){
    
//     var i = 0;
//     setInterval(function ShowLoadingProgress() {
//     if (i == 0) {
//         i = 1;
//         // var elem = document.getElementById("progressBar_line");
//         var elem = document.getElementById("MainLoader");
//         var height = 1;
//         var id = setInterval(incrWidth, 50);
//         function incrWidth() {
//         if (height >= 100) {
//             clearInterval(id);
//             i = 0;
//             // document.getElementById('MainLoader').classList.add('d-none');

//             // document.body.classList.replace("LoaderStyle", "bg-sucess");
//             // setInterval(function(){
//             //     ShowApplication();
//             // }, 3000);
//         } else {
//             height++;
//             // Div1.setAttribute('style', 'block-size:' + height +';')
//             // elem.style.blockSize = height + "% !important;";
//             elem.appendChild(Div1);
//             elem.appendChild(Div1);
//             elem.appendChild(Div1);
//             elem.appendChild(Div1);
//             // elem.style.height = height + "%";
//             // document.body.classList.add("loadingBgColorDark");
//             // document.body.classList.add("RandomColor");
//             document.body.setAttribute("style", "cursor: progress;");
//         }
//         }
//     }
//     }, 1000);

//     // ShowLoadingProgress();
// }, 1000);