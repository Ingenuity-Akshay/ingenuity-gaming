var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dragging=false;
var snap,dragStartLoc,position;

function getCoordinates(e) {   
  var x = e.clientX - canvas.getBoundingClientRect().left;
  var y = e.clientY - canvas.getBoundingClientRect().top;
  return { x: x, y: y };
}

function takeSnap() {
  snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnap() {
  ctx.putImageData(snap, 0, 0);
}

//For drawing a straight Line.
function drawLine(position) {
  ctx.beginPath();
  ctx.moveTo(dragStartLoc.x, dragStartLoc.y);
  ctx.lineTo(position.x, position.y);
  ctx.stroke();
}
//For drawing a circle.
function drawCircle() {
  var radius = Math.sqrt(Math.pow((dragStartLoc.x - position.x), 2) + Math.pow((dragStartLoc.y - position.y), 2));
  ctx.beginPath();
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = "#"+randomColor;
  ctx.arc(dragStartLoc.x, dragStartLoc.y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
}
//For drawing rectangle.
function drawRect(position) {
  var width = dragStartLoc.x - position.x;
  var height = dragStartLoc.y - position.y;
  ctx.beginPath();
  
  if(width>0 || height>0){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = "#"+randomColor;
    ctx.fillRect(dragStartLoc.x, dragStartLoc.y,-Math.abs(width),-Math.abs(height));
  }
  else{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = "#"+randomColor;
    ctx.fillRect(dragStartLoc.x, dragStartLoc.y, Math.abs(width), Math.abs(height));
  }
  //ctx.fill();
}
//For drawing Square.
function drawSquare(position) {
  let a = dragStartLoc.x - position.x;
  ctx.beginPath();
  if(a>0){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = "#"+randomColor;
    ctx.fillRect(dragStartLoc.x, dragStartLoc.y,-Math.abs(a),-Math.abs(a));

  }
  else{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = "#"+randomColor;
    ctx.fillRect(dragStartLoc.x, dragStartLoc.y, Math.abs(a), Math.abs(a));
  }
}

function dragStart(e) {
  dragging = true;
  dragStartLoc = getCoordinates(e);
  takeSnap();
}

function drag(e) {
  if (dragging === true) {
      position = getCoordinates(e);
      draw(position, "line");
  }
}
function dragStop(e) {
  var fillbox;
  dragging = false;
  restoreSnap();
  position = getCoordinates(e);
  draw(position, "line");
}

function draw(position){
  var shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
  if (shape === "line") {
    clearevent();
    addevent();
    drawLine(position);
}
if (shape === "circle") {
    clearevent();
    addevent();
    drawCircle(position);
}
if (shape === "rectangle") {
    clearevent();
    addevent();
    drawRect(position);
}
if (shape === "square") {
    clearevent();
    addevent();
    drawSquare(position);
}

ctx.stroke();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init()
{

  var clearcanvas=document.getElementById("clearCanvas");
  clearcanvas.addEventListener("click", clear, false);
  
    addevent();
  
}

function addevent(){
  canvas.addEventListener("mousedown",dragStart,false);
  canvas.addEventListener("mouseover",drag,false);
  canvas.addEventListener("mouseup", dragStop, false);
  

}

function clearevent(){
  canvas.removeEventListener("mousedown",dragStart,false);
  canvas.removeEventListener("mouseover",drag,false);
  canvas.removeEventListener("mouseup", dragStop, false);
  

}
window.addEventListener("load",init,false);