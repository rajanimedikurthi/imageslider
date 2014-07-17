/**
 * 
 */
window.wdth=0;
function log(msg){
	if(console.log)
		 console.log(msg);
}

function startSlider(){
	 log(document.getElementById("carousel").offsetWidth);
	 window.setInterval(slide,100);
	
}
function el(selector){return document.querySelector(selector);}
function getPos(el, delta){
	var elLeft = parseInt(el.style.marginLeft) || 0;
	if(!delta)
		return elLeft; 
		return (el.style.marginLeft = (elLeft+delta)+"px"); 
}

function slide(){
	var firstImg= el("#carousel > img:first-child");
	if(firstImg){
		var newp=getPos(firstImg, -10);
		log(newp);
			if(parseInt(newp) + firstImg.offsetWidth<=0 )
		{
			var paNode= firstImg.parentNode;
			paNode.removeChild(firstImg);
			firstImg.style.marginLeft = 0;
			paNode.appendChild(firstImg);
		}
	
	}

}