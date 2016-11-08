var usertext = document.getElementById("usertext")

var colordrop= document.getElementById("colordrop")

var newtext = document.getElementById("newtext")

var addbutton = document.getElementById("addbutton")





addbutton.addEventListener("click", function(){

var color = colordrop.value

var task = "<div style='color:"+color+"'>"+usertext.value+"</div>";

newtext.innerHTML=newtext.innerHTML+task;


});


newtext.addEventListener("click", function(evt){
 
 
 var addedtext = evt.target;
 
 addedtext.parentNode.removeChild(addedtext);
    
});