class SpaceObj{
    constructor(Name, DomElementType, DomElement, CssClassesList, Description, ImgSource, DefWidth, DefHeight, ObjID, MovementDirection, PosX, PosY, DefStyle){
      this.Name = Name; //basic name
      this.DomElementType = DomElementType;
      this.DomElement = DomElement;
      this.CssClassesList = CssClassesList;
      this.Description = Description;
      this.ImgSource = ImgSource;
      this.DefWidth = DefWidth;
      this.DefHeight = DefHeight;
      this.ObjID = ObjID;
      this.MovementDirection = MovementDirection;
      this.PosX = PosX;
      this.PosY = PosY;
      this.DefStyle = DefStyle;
    }
    // DomElement = document.getElementById(IdFromHtml);
  }

  let newID = 1;
  let RandomX;
  let RandomY;


///Creating Static Items "Stones"
///adding new img elements to Dom and adding CSS classes with animation to new items (function does not remove items form dom: TODO removing)
///function AddMeteor()
  // setInterval(
    function AddMeteor(){
      newID = 'Stone_T1';
      let Meteor_Type1 = new SpaceObj;
      Meteor_Type1.ImgSource = "img/RockTexture1.PNG";
      Meteor_Type1.DomElementType = 'image';
      Meteor_Type1.DomElement = document.createElement('img');
      Meteor_Type1.DefWidth = '15px';  //40px default
      Meteor_Type1.DefHeight = '15px'; //40px default
      // Meteor_Type1.PosX = Math.Radom;

      ///set atributes to element:
      Meteor_Type1.DomElement.setAttribute("width", Meteor_Type1.DefWidth );
      Meteor_Type1.DomElement.setAttribute("height", Meteor_Type1.DefHeight);
      Meteor_Type1.DomElement.setAttribute("id", newID);
      Meteor_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStonesSmall"; 
      Meteor_Type1.DomElement.setAttribute("src", Meteor_Type1.ImgSource);
      Meteor_Type1.DomElement.setAttribute("style", "position: absolute");
      Meteor_Type1.DomElement.setAttribute("class", Meteor_Type1.CssClassesList);

      Meteor_Type1.DomElement.setAttribute("class", Meteor_Type1.CssClassesList);
      //custom:
      Meteor_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");
      // Meteor_Type1.PosX = Math.Radom;
      RandomCoordinates();
      Meteor_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: -100px; /* <= position after animation*/ border: 0px solid red !important; ")

      // document.getElementById("MiddleItemsGroup").appendChild(Meteor_Type1.DomElement);
      document.getElementById("BackgroundAnimatedItems").appendChild(Meteor_Type1.DomElement);

      // newID++;
    }
  // , 1000);


  ///
  ///
  ///
  function RandomCoordinates(){
    RandomX = Math.floor(Math.random() * 1200) + 10; //X from 10 to 50
    RandomY = Math.floor(Math.random() * 200) + 1; //Y from 1 to 20
    // console.log("X:", RandomX, "Y:", RandomY); //check
    return RandomX, RandomY;
  }


  function AddStars(){
    newID = 'Star_T1';
    let Stars_Type1 = new SpaceObj;
    Stars_Type1.ImgSource = "img/StarType2.svg";
    Stars_Type1.DomElementType = 'image';
    Stars_Type1.DomElement = document.createElement('img');
    Stars_Type1.DefWidth = '30px';  //40px default
    Stars_Type1.DefHeight = '30px'; //40px default

    ///set atributes to element:
    Stars_Type1.DomElement.setAttribute("width", Stars_Type1.DefWidth );
    Stars_Type1.DomElement.setAttribute("height", Stars_Type1.DefHeight);
    Stars_Type1.DomElement.setAttribute("id", newID);
    Stars_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStars Dis-ShiningFallingStars Dis-Shining "; 
    Stars_Type1.DomElement.setAttribute("src", Stars_Type1.ImgSource);
    Stars_Type1.DomElement.setAttribute("style", "position: absolute");
    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);

    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);
    //custom:
    Stars_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");

    RandomCoordinates();
    Stars_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: -200px; /* <= position after animation*/ border: 0px solid red !important;")

    // document.getElementById("MiddleItemsGroup").appendChild(Stars_Type1.DomElement);
    document.getElementById("BackgroundAnimatedItems").appendChild(Stars_Type1.DomElement);

    // newID++;
  }

  function AddStars_3(){
    newID = 'Star_T3';
    let Stars_Type1 = new SpaceObj;
    Stars_Type1.ImgSource = "img/StarType3.svg";
    Stars_Type1.DomElementType = 'image';
    Stars_Type1.DomElement = document.createElement('img');
    Stars_Type1.DefWidth = '40px';  //40px default
    Stars_Type1.DefHeight = '40px'; //40px default

    ///set atributes to element:
    Stars_Type1.DomElement.setAttribute("width", Stars_Type1.DefWidth );
    Stars_Type1.DomElement.setAttribute("height", Stars_Type1.DefHeight);
    Stars_Type1.DomElement.setAttribute("id", newID);
    Stars_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStars"; 
    Stars_Type1.DomElement.setAttribute("src", Stars_Type1.ImgSource);
    Stars_Type1.DomElement.setAttribute("style", "position: absolute");
    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);

    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);
    //custom:
    Stars_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");

    RandomCoordinates();
    Stars_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: -200px; /* <= position after animation*/ border: 0px solid red !important;")

    // document.getElementById("MiddleItemsGroup").appendChild(Stars_Type1.DomElement);
    document.getElementById("BackgroundAnimatedItems").appendChild(Stars_Type1.DomElement);

    // newID++;
  }

  function AddStars_B(){ /// when level near to the end
    newID = 'Star_B';
    let Stars_Type1 = new SpaceObj;
    Stars_Type1.ImgSource = "img/WhiteHoleStarNoBG.png";
    Stars_Type1.DomElementType = 'image';
    Stars_Type1.DomElement = document.createElement('img');
    Stars_Type1.DefWidth = '160px';  //40px default
    Stars_Type1.DefHeight = '80px'; //40px default

    ///set atributes to element:
    Stars_Type1.DomElement.setAttribute("width", Stars_Type1.DefWidth );
    Stars_Type1.DomElement.setAttribute("height", Stars_Type1.DefHeight);
    Stars_Type1.DomElement.setAttribute("id", newID);
    Stars_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStars_B"; 
    Stars_Type1.DomElement.setAttribute("src", Stars_Type1.ImgSource);
    Stars_Type1.DomElement.setAttribute("style", "position: absolute");
    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);

    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);
    //custom:
    Stars_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");

    RandomCoordinates();
    Stars_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: -500px; /* <= position after animation*/ border: 0px solid red !important;  transform: rotateZ(30deg); opacity: 0.75;  ")

    // document.getElementById("MiddleItemsGroup").appendChild(Stars_Type1.DomElement);
    document.getElementById("Slow_BackgroundAnimatedItems").appendChild(Stars_Type1.DomElement);

    // newID++;
  }
  function AddHoles_B(){ /// when level near to the end
    newID = 'Hole_B';
    let Stars_Type1 = new SpaceObj;
    Stars_Type1.ImgSource = "img/BlackHoleStarNoBG.png";
    Stars_Type1.DomElementType = 'image';
    Stars_Type1.DomElement = document.createElement('img');
    Stars_Type1.DefWidth = '160px';  //40px default
    Stars_Type1.DefHeight = '80px'; //40px default

    ///set atributes to element:
    Stars_Type1.DomElement.setAttribute("width", Stars_Type1.DefWidth );
    Stars_Type1.DomElement.setAttribute("height", Stars_Type1.DefHeight);
    Stars_Type1.DomElement.setAttribute("id", newID);
    Stars_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStars_H"; 
    Stars_Type1.DomElement.setAttribute("src", Stars_Type1.ImgSource);
    Stars_Type1.DomElement.setAttribute("style", "position: absolute");
    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);

    Stars_Type1.DomElement.setAttribute("class", Stars_Type1.CssClassesList);
    //custom:
    Stars_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");

    RandomCoordinates();
    Stars_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: -500px; /* <= position after animation*/ border: 0px solid red !important;  transform: rotateZ(30deg); opacity: 0.75;  ")

    // document.getElementById("MiddleItemsGroup").appendChild(Stars_Type1.DomElement);
    document.getElementById("Slow_BackgroundAnimatedItems").appendChild(Stars_Type1.DomElement);

    // newID++;
  }


  // setInterval(function(){
    // ClearAll();
    function ClearAll(){
    let ClearItemsFrom = document.getElementById("BackgroundAnimatedItems");
    ClearItemsFrom.innerHTML = "<img>";
    console.log('clear: remove all items');
  }
  // },20000);