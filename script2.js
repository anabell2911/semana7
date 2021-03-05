function position(event){
var x = event.clientX; 
var y = event.clientY; 
var mousePositions = document.getElementById('mousePositions')
var jyu = document.getElementById('letras') 
if (x>546&&x<955 && y>197&&y<394) {
    jyu.innerHTML = 'Dentro'; }
else{
    jyu.innerHTML = 'Fuera';}
}