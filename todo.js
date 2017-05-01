var usertext = document.getElementById("usertext");

var colordrop= document.getElementById("colordrop");

var newtext = document.getElementById("newtext");

var addbutton = document.getElementById("addbutton");

var cleartext = document.getElementById("cleartext");


// this is the add button to add the text that is written in the 
addbutton.addEventListener("click", function(){

var color = colordrop.value;

var task = "<div style='color:"+color+"'>"+usertext.value+"</div>";
// This refernces the newtext in the html tab and from that it adds the task that was written. "innerHTML" locates the "newtext" in HTML
newtext.innerHTML = newtext.innerHTML+task;


});

// this listen for the button for adding the text and when it's clicked it adds the text.
newtext.addEventListener("click", function(evt){
 
 
 var addedtext = evt.target;
 
 addedtext.parentNode.removeChild(addedtext);
    
});

// Since writing the task is in a div with a string you have to make it refernce the newtext html and makes the string empty when clear all button is clicked 
cleartext.addEventListener("click", function(evt){
//("") That is a string 
newtext.innerHTML = "" 

});
