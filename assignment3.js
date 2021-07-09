  // random value generated


  var y = Math.floor(Math.random() * 100+ 1);
  let cont=document.getElementById("container");
  var guess = 1;
  var res=document.getElementById("result");
  document.getElementById("submitguess").onclick = function(){
    
  
    var x = document.getElementById("guessField").value;
    if(x==''){
        alert("ENTER SOME VALUE")

   }
    else if(x == y)
    {    
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");
                res.innerHTML 
                = `<p id="msg">Congratulations you Guessed Right in  ${guess} Guess.</p> <br>`;
    }
    else if(x > y)
    {    
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
   }

   let can = document.getElementById("canvas");
can.width = window.innerWidth;
can.height = window.innerHeight;
let con = can.getContext('2d');

function circle(x, y, radi, dx, dy) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.dx = dx;
    this.dy = dy;
    this.color = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
    this.new = function () {
        con.beginPath();
        con.arc(this.x, this.y, this.radi, 0, Math.PI * 2, true);
        con.strokeStyle = "rgb(249,55,100)";
        con.fillStyle = this.color;
        con.fill();
        con.stroke();
    }
    this.update = function () {
        if (this.x > (innerWidth - this.radi) || this.x < this.radi) {
            this.dx = -this.dx;
        }
        if (this.y > (innerHeight - this.radi) || this.y < this.radi) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.new();
    }
}
let arr = [];
for (i = 0; i <= 200; i++) {
    let radius = Math.random() * 50 + 20;
    let a = Math.random() * (innerWidth - radius * 2) + radius;
    let b = Math.random() * (innerHeight - radius * 2) + radius;
    let velx = (Math.random() - 0.5) * 3
    let vely = (Math.random() - 0.5) * 3;
    cir = new circle(a, b, radius, velx, vely);
    arr.push(cir);
    arr[i].new();
}
function animation() {
    requestAnimationFrame(animation);
    con.clearRect(0, 0, innerWidth, innerHeight);
    con.fillStyle="red";
    con.fillRect(0,0,can.width,can.height);
    // cir.new(a,b,radius);
    for (i = 0; i < arr.length; i++)
        arr[i].update();
}
animation();
   





  
