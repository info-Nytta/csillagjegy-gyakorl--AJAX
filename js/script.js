const honap=["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"];
var most=new Date();
var ho=most.getMonth();
var nap=most.getDate();

function jegyleker(para) {
	url="https://info.nytta.hu/web/api/csillagjegyek/?"+para;
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  obj=JSON.parse(this.responseText);
		reszletek(obj);
    }
	xhttp.open("GET", url, true);
	xhttp.send();
}

function reszletek(obj) {
	document.getElementById("reszletek").innerHTML=""+
	"<h2>"+obj.jegy+"</h2>"+
	"<p>"+
		"<img class='jel' src='"+obj.jel+"'>"+
		honap[obj.kho-1]+" "+obj.knap+" - "+honap[obj.vho-1]+" "+obj.vnap+
	"</p>"+
	"<p><img class='kep' src='"+obj.kep+"' alt='"+obj.jegy+"'></p>"+
	"<p><strong>Őseleme a "+obj.elem+". </strong></p>"+
	"<p>"+obj.mozgas+" jegy, amely "+obj.minoseg+" minőségű. </p>"+
	"<h4>Erre a jegyre a következő tulajdonságok jellemzőek:</h4>"+
	"<p>"+obj.kulcsszavak+"</p>";	
}

