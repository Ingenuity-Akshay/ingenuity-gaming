var arr;
var ul = document.getElementById("list");
function function1() {
  var text=document.getElementById("input-task").value;
  if(text==""){
    alert("Enter some Task")
  }
  else{
    if(localStorage.getItem('task')==null)
    arr=[];
    else{
      arr=JSON.parse(window.localStorage.getItem('task'));
    }
    arr.push(text);
  window.localStorage.setItem('task', JSON.stringify(arr));
  }
  update();  
}

function update(){
  ul.innerHTML=""
 var data= JSON.parse(window.localStorage.getItem('task'));
 if(data==null)
 document.getElementById("Notask").style.visibility="hidden";
 else{
  data.forEach((element,index) => {
    ul.innerHTML+=`<li><span id="span">${element}</span><button id="delete" onclick="deletef(${index})">Delete</button></li>`

  
  });
}


}
update();

function deletef(index){
var data= JSON.parse(window.localStorage.getItem('task'));
data.splice(index,1);
window.localStorage.setItem('task', JSON.stringify(data));
update();
}

