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
  // setInterval(
    function AddMeteor(){
      let Meteor_Type1 = new SpaceObj;
      Meteor_Type1.ImgSource = "img/RockTexture1.PNG";
      Meteor_Type1.DomElementType = 'image';
      Meteor_Type1.DomElement = document.createElement('img');
      Meteor_Type1.DefWidth = '40px';
      Meteor_Type1.DefHeight = '40px';
      // Meteor_Type1.PosX = Math.Radom;

      ///set atributes to element:
      Meteor_Type1.DomElement.setAttribute("width", Meteor_Type1.DefWidth );
      Meteor_Type1.DomElement.setAttribute("height", Meteor_Type1.DefHeight);
      Meteor_Type1.DomElement.setAttribute("id", newID);
      Meteor_Type1.CssClassesList = "rounded-circle border border-2 border-light FallingStones"; 
      Meteor_Type1.DomElement.setAttribute("src", Meteor_Type1.ImgSource);
      Meteor_Type1.DomElement.setAttribute("style", "position: absolute");
      Meteor_Type1.DomElement.setAttribute("class", Meteor_Type1.CssClassesList);

      Meteor_Type1.DomElement.setAttribute("class", Meteor_Type1.CssClassesList);
      //custom:
      Meteor_Type1.DomElement.setAttribute("style", "z-index: 777005 !important;");
      // Meteor_Type1.PosX = Math.Radom;
      RandomCoordinates();
      Meteor_Type1.DomElement.setAttribute("style", "position: absolute; left:"+ RandomX + "px; top: 100px; border: 2px solid red !important;")

      document.getElementById("MiddleItemsGroup").appendChild(Meteor_Type1.DomElement);

      newID++;
    }
  // , 1000);

  function RandomCoordinates(){
    RandomX = Math.floor(Math.random() * 1200) + 10; //X from 10 to 50
    RandomY = Math.floor(Math.random() * 200) + 1; //Y from 1 to 20
    console.log("X:", RandomX, "Y:", RandomY)
    return RandomX, RandomY;
  }