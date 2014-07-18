/**
 * 
 */
window.wdth=0;
function log(msg){
	if(console.log)
		 console.log(msg);
}
$(document).ready(function(){
	startSlider();
	 $( "#carousel" ).mouseover(stopSlide);
	 $( "#carousel" ).mouseout(startSlider);
});
	 var clrTimeout;
function startSlider(){
	  clrTimeout= window.setInterval(startSlide,100);
}

function stopSlide(){
		window.clearInterval(clrTimeout);
	
}
function getPos(el, delta){
	var elLeft = parseInt(el.css("margin-left")) || 0;
	if(!delta)
		return elLeft; 
	var leftdata=(elLeft+delta)+"px";
	el.css("margin-left",leftdata );
		return leftdata; 
}

function startSlide(){
	var firstImg= $("#carousel > li:first-child");
	if(firstImg){
		var newp=getPos(firstImg, -10);
		log(newp);
			if(parseInt(newp) + firstImg.outerWidth()<=0 )
		{
			var paNode= firstImg.parent();
			firstImg.remove();
			firstImg.css("margin-left", 0);
			paNode.append(firstImg);
		}
	
	}

}