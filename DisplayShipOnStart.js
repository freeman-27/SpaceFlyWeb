let StartShipObj = document.getElementById('ShipItemContainer');
StartShipObj.setAttribute("style", "transition-duration: 3s; display: none !important;");
setTimeout(function DisplayShipOnStart(){
    StartShipObj.setAttribute("style", "position: absolute; bottom: -100px; /*left: 37.5%;*/ border-style: dotted !important; z-index: 777005;");
}, 8000);
