

//  mũi tên
$(document).ready(function(){
var dem = 0;

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


// onblur 
$("#input1").keyup(function(){
	var check = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
	
	valu = $(this).val();
	checkEmail = check.test(valu);
	if(valu == ""){
		maxer(er_input1 , error_input1 , this,);
		("#error_input1").text("Bạn chưa nhập mục này ! ");
	}else if(!checkEmail){
		er(er_input1 , error_input1 , this,);
		$("#error_input1").text("Bạn phải nhập đúng định dạng Email ! ");
	}else if(checkEmail){
		tru(er_input1 ,error_input1 , this,);
	}else{

	}
});
$("#input2").keyup(function(){
	var check = /^[a-zA-Z0-9]{8,}$/;
	valu = $(this).val();
	checkpass = check.test(valu);
	if(valu == "" ){
		maxer(er_input2 , error_input2 , this,inputex);
		$("#error_input2").text("Bạn chưa nhập mục này ! ");
	}else if(!checkpass ){
		er(er_input2 , error_input2 , this,inputex);
		$("#error_input2").text("Bạn cần nhập đúng mật khẩu !");
	}else if($(this).val() != ""){
		tru(er_input2 ,error_input2 , this,inputex);
		dem = 1;
	}else{
		dem = 0;
	}
});

	$("#click").click(function(){
		if(dem == 1){
location.assign("file:///D:/doan/doan/Duy/log%20in/login.html");
}
	});

	function er(div,label,input,ipex){
	$(div).css("opacity" , "1");
	
	$(input).css({"box-shadow": "0 0 2px 2px  #f76d2c", "border" : "solid 1px #f76d2c"});
	$(ipex).css({"box-shadow": "0 0 2px 2px  #f76d2c", "border" : "solid 1px #f76d2c"});
}
function tru(div,label,input,ipex){
	$(div).css("opacity" , "0");
	$(input).css({"box-shadow":  "0 0 2px 2px  #31c431", "border" : "solid 1px green"});
	$(ipex).css({"box-shadow":  "0 0 2px 2px  #31c431", "border" : "solid 1px green"});
}
function maxer(div,label,input,ipex){
	$(div).css("opacity" , "1");
	$(label).text("Bạn chưa nhập mục này ! ");
	$(input).css({"box-shadow": "0 0 2px 2px  #fc2020", "border" : "solid 1px #fc2020"});
	$(ipex).css({"box-shadow": "0 0 2px 2px  #fc2020", "border" : "solid 1px #fc2020"});
}


});





//  ẩn hiện mật khẩu
$(document).ready(function(){
	dem = true;
	$(".showhide").click(function(){
		if(dem){
			$("#input2").attr("type" , "text");
			$(".i").removeClass("fa-eye");
			$(".i").toggleClass("fa-eye-slash");
			dem = false;
		}else{

			$("#input2").attr("type" , "password");
			$(".i").removeClass("fa-eye-slash");
			$(".i").toggleClass("fa-eye");
			dem = true;
		}
	});
});


// lưu mk




