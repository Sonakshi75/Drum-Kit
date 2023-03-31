
// adding event listener to our buttons
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var soundinnerHTML = this.innerHTML;

    sound(soundinnerHTML);

    buttonAnimation(soundinnerHTML);
  });
}

// producing sounds when keys are pressed
document.addEventListener("keypress",function(event){
  sound(event.key);
  buttonAnimation(event.key);
});

// producing sound when buttons get clicked
function sound(key){
  switch (key) {
    case "w":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      document.querySelector(".w").style.color="white";
      break;

    case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      document.querySelector(".a").style.color="white";
      break;

    case "s":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      document.querySelector(".s").style.color="white";
      break;

    case "d":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      document.querySelector(".d").style.color="white";
      break;

    case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      document.querySelector(".j").style.color="white";
      break;

    case "k":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      document.querySelector(".k").style.color="white";
      break;

    case "l":
      var kickbass=new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      document.querySelector(".l").style.color="white";
      break;

    default: console.log(soundinnerHTML);

  }

}


function buttonAnimation(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },150);
}
