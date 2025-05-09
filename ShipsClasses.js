



  // let IdFromHtml;
  class SpaceShipObj{
    
    
    constructor(Name, DomElement, Description, ImgSource, DefWidth, DefHeight, ObjID, MovementDirection, PosX, PosY){
      this.Name = Name; //basic name
      this.DomElement = DomElement;
      this.Description = Description;
      this.ImgSource = ImgSource;
      this.DefWidth = DefWidth;
      this.DefHeight = DefHeight;
      this.ObjID = ObjID;
      this.MovementDirection = MovementDirection;
      this.PosX = PosX;
      this.PosY = PosY;
    }
    // DomElement = document.getElementById(IdFromHtml);
  }

  let Ship = new SpaceShipObj;
  Ship.DomElement = document.getElementById("ShipItemContainer");
  // Ship.PosX = '100px';
  // IdFromHtml = 'ShipItemContainer';
  let EnShip = new SpaceShipObj; //enemy ship
