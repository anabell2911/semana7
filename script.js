var array=[];
var x=0;
var	mayor;
var a=document.getElementById('enter');
function ingresa(){
	if(x<5)
	{if (x==0){mayor=parseInt(a.value);}
	else if(a.value>mayor)
	{mayor=parseInt(a.value);}
		console.log(mayor);
		x+=1;
		array[x]=a.value;}}

function mostrar()
{document.getElementById('resultado').value=mayor;}
