// mũi tên
$(document).ready(function(){
 	$("#child1").hover(function(){
		$("#child2").css("transform","rotate(180deg)");
		$("#child1 a:first").css( "color" , "#f76d2c");
		$("#child3").css("color","#727272");
	},
	function(){
		$("#child2").css("transform","rotate(0deg)");
		$("#child1 a:first").css( "color" , "#727272");
		$("#child3").css("color","#f76d2c");
	}); 
});