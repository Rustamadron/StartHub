var circle = document.querySelector ( ".circle" );
var button = document.querySelector("button");

button.onclick  = function (event) {
  var ring = document.body.appendChild(document.createElement("div"));
  var radius = Math.random() * 300
  var colours = ["red", "yellow", "white", "pink", "blue", "black"]
  var colour = colours[Math.floor(Math.random() * colours.length)]
  var x = Math.random() * window.innerWidth
  var y = Math.random() * window.innerHeight
  ring.style = `
              width:${radius}px;
              height:${radius}px;
              border-radius:50%;
              border:solid 1px ${colour};
              position:fixed;
              top:${y}px;
              left:${x}px;
          `
}
