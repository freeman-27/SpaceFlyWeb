let item1 = document.getElementById('RedLightContainer01');
let item2 = document.getElementById('RedLightContainer02');
// array RedLights:
let RedLights = [];
RedLights = {
    item1,
    item2
}


function DisplayRedLights(){
    item1 = document.getElementById('RedLightContainer01').classList.toggle("d-none");
    item2 = document.getElementById('RedLightContainer02').classList.toggle("d-none");
    // var It1 = RedLights[0];
    // It1.classList.add(d-none);
    
    // for (let index = 0; index < RedLights.length; index++) {
    //     const element = RedLights[index];
    //     RedLights[index].classList.remove();
    // }
    setTimeout(
    function DisableLights(){
        item1 = document.getElementById('RedLightContainer01').classList.toggle("d-none");
        item2 = document.getElementById('RedLightContainer02').classList.toggle("d-none");
    }, 8000)

    let TopInterface = document.getElementById("TopItemsGroup");
    let header2 = document.getElementById("TopItemsGroup").firstElementChild;
    TopInterface.classList.toggle("d-none");
    header2.classList.toggle("d-none");
}