// example fullscreenchange

// function handleEvent(event) {
//     if (event.type === "fullscreenchange") {
//       /* handle a full screen toggle */
//     } else {
//       /* handle a full screen toggle error */
//     }
//   }
// document.addEventListener('keypress', MoveLeft());

// example 1
// class SomeClass {
//   name = "Something Good";

//   register() {
//     window.addEventListener("keydown", (e) => {
//       this.someMethod(e);
//     });
//   }

//   someMethod(e) {
//     console.log(this.name);
//     switch (e.code) {
//       case "ArrowUp":
//         // some code here…
//         MoveLeft();
//         break;
//       case "ArrowDown":
//         // some code here…
//         MoveRight();
//         break;
//     }
//   }
// }

// const myObject = new SomeClass();
// myObject.register();

// example 2
window.addEventListener(
    "keydown",
    (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
  
      switch (event.key) {
        case "ArrowDown":
          // Do something for "down arrow" key press.
          break;
        case "ArrowUp":
          // Do something for "up arrow" key press.
          break;
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          break;
        case "ArrowRight":
          // Do something for "right arrow" key press.
          break;
        case "Enter":
          // Do something for "enter" or "return" key press.
          break;
        case " ":
          // Do something for "space" key press.
          break;
        case "Escape":
          // Do something for "esc" key press.
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
  
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true,
  );

  ///Main keys attachment to events
  function MovingFunction(event){
    switch (event.keyCode) {
      case 37:
        //  alert('Left key');
        //  MoveLeft();
         MoveHorisontal_L();
      break;
      case 38:
         alert('Up key');
      break;
      case 39:
        //  alert('Right key');
        //  MoveRight();
         MoveHorisontal_R()
      break;
      case 40:
         alert('Down key');
      break;
      case 13:
        //  alert('Enter key');
         OpenDoor();
      break;
      case 27:
        //  alert('Esc key');
         CloseDoor();
      break;
   }
  };