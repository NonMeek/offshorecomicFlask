var Strips = [];

var Current = 0;
var imageUrl = null
var myStrip = null;

function init(url){
    imageUrl = url;
    $.get("images", function(data, status) {
	    Strips = data;
        myStrip = document.getElementById('Strip');
	    myStrip.setAttribute('src', Strips[Current]);
    });
}

function Prev(){
	if(Current == 0)
		Current = Strips.length - 1;
	else
		Current--;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Next(){
	if(Current == Strips.length - 1)
		Current = 0
	else
		Current++;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Rand(){
	var myRandomStrip = Strips[Math.floor(Math.random() * Strips.length)];
	document.getElementById('Strip').setAttribute('src', myRandomStrip);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function Frst(){
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[0]);
}

function Last(){
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Strips.length - 1]);
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

