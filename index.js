var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = 0.8*window.innerWidth;
canvas.height = 0.8*window.innerHeight;


var dragging = false;
var x= 0;
var y = 0;
var color = "#000000";


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;

    console.log(charCode);

    if ( charCode == "40") {
      dragging = true;
      // draw()

    }

    if (charCode == 32 ) {
      context.clearRect(0, 0, canvas.width, canvas.height);

    }

    if ( charCode == "38") {
      dragging = false;
      // draw()

    }

    if ( charCode == "66") {
      color = "#0000ff";
    }

    if ( charCode == "71") {
      color = "#008000";
    }
    if ( charCode == "82") {
      color = "#ff0000";
    }
    if ( charCode == "89") {
      color = "#ffff00";
    }

}
//     if (charCode = 38) {
//       dragging = false;
//     }
// }

window.addEventListener("mousemove",function(e){
  x = e.offsetX;
  y = e.offsetY;
  draw()
})


window.addEventListener("touchstart", function(e){
  // console.log("a")
  dragging = true;
})

window.addEventListener("touchend", function(e){
  // console.log("a")
  dragging = false;
})

window.addEventListener("touchmove",function(e){
  x = e.touches[0].pageX;
  y = e.touches[0].pageY;
  draw()
})

function draw(e){
    if (dragging){
      context.beginPath();
      context.fillStyle = color;
      // ctx.fillStyle = color;
      //ctx.moveTo(x, y);
      context.rect(x-15,y-15,30,30);
      context.fill();
    }
}

// document.querySelector(".color-picker").addEventListener("click", function(e){
//   x = e.pageX;
//   y = e.pageY;
//   var imageData = context.getImageData(x, y, 1, 1).data;
//   color = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
// })

window.addEventListener("orientationchange",func)
var func = function(e){
  window.location.reload();
}

//
// document.querySelector(".color-picker").addEventListener("change", kaushal)
// var kaushal = function(e){
//
//
//   color = e.target.value;
// }

document.querySelector(".color-picker").addEventListener("change", function(e){
color = e.target.value;

})
