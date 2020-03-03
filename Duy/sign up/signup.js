//  check form và lưu form

$(document).ready(function(){
 var dem = 0;
	$("#input1").keyup(function(){
		var check = /^[a-zA-Z0-9]{1,}/;
		valu = $(this).val();
		checkus = check.test(valu);
		if(valu == ""){
			checktroongs(input1,error_label_1,er_input1, );
		}else if(!checkus){
			format(input1,error_label_1,er_input1, );
			$("#error_label_1").text("Thông tin không chứa ký tự đặc biệt và không dấu !");
		}else if(checkus){
			ok(input1,error_label_1,er_input1, );		
		}

	});
	$("#input2").keyup(function(){
		var check = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{3,10})?$/;
		valu = $(this).val();
		checkpass = check.test(valu);
		if(valu == ""){
			checktroongs(input2,error_label_2,er_input2, );
		}else if(!checkpass){
			format(input2,error_label_2,er_input2, );
			$("#error_label_2").text("Đề nghị nhập đúng định dạng Email !");
		}else if(checkpass){
			ok(input2,error_label_2,er_input2, );
		}
	});

	$("#input3").keyup(function(){
		var check = /^[a-zA-Z0-9]{8,}$/;
		valu = $(this).val();
		checkpass = check.test(valu);
		if(valu == ""){
			checktroongs(input3,error_label_3,er_input3,ipex1);
		}else if(!checkpass){
			format(input3,error_label_3,er_input3,ipex1);
			$("#error_label_3").text(" Mật khẩu phải chứa trên 8 và không có ký tự đặc biệt !");
		}else if(checkpass){
			ok(input3,error_label_3,er_input3,ipex1 );
		}

	});

	$("#input4").keyup(function(){
		var check = /^[a-zA-Z0-9]{8,}$/;
		valu = $(this).val();
		checkpass = check.test(valu);
		if(valu == ""){
			checktroongs(input4,error_label_4,er_input4,ipex2);
		}else if(!checkpass){
			format(input4,error_label_4,er_input4 ,ipex2);
			$("#error_label_4").text("Mật khẩu phải chứa trên 8 và không có ký tự đặc biệt !");
		}else if(!checkpass){
			ok(input4 , error_label_4 , er_input4 , ipex2);
		}

	});

	$("#input5").keyup(function(){
		if($(this).val() == ""){
			format(input5 , error_label_5 , er_input5 , );
			$("#error_label_5").text("Mục này không được để trống !");
		}else if($(this).val() != "" ){
			ok(input5 , error_label_5 , er_input5 , );
			dem = 1;
		}else{
			dem = 0;
		}

	});

	function checktroongs(input,label,div,ipex){
		$(input).css({"box-shadow": "0 0 2px 2px  #fc2020", "border" : "solid 1px #fc2020"});
		$(ipex).css({"box-shadow": "0 0 2px 2px  #fc2020", "border" : "solid 1px #fc2020"});
		$(label).text("Mục này không được để trống !");	
		$(div).css("visibility" , "initial");

	}
	function format(input,label,div,ipex){
		$(input).css({"box-shadow":  "0 0 2px 2px  #ff7f00", "border" : "solid 1px #ff7f00"} );
		$(ipex).css({"box-shadow":  "0 0 2px 2px  #ff7f00", "border" : "solid 1px #ff7f00"} );
		$(div).css("visibility" , "initial");

	}
	function ok(input,label,div,ipex){
		$(input).css({"box-shadow":  "0 0 2px 2px  #31c431", "border" : "solid 1px green"} );
		$(ipex).css({"box-shadow":  "0 0 2px 2px  #31c431", "border" : "solid 1px green"} );
		$(div).css("visibility" , "hidden");

	}

	$("#click").click(function(){
		if(dem == 1){
location.assign("file:///D:/doan/doan/Duy/log%20in/login.html");
}
	});


});



// ẩn hiện mật khẩu
$(document).ready(function(){
	dem = true;
	$(".showhide").click(function(){
		if(dem){
			$("#input3").attr("type" , "text");
			$("#input4").attr("type" , "text");
			$(".i").removeClass("fa-eye");
			$(".i").toggleClass("fa-eye-slash");
			dem = false;
		}else{
			$("#input3").attr("type" , "password");
			$("#input4").attr("type" , "password");
			$(".i").removeClass("fa-eye-slash");
			$(".i").toggleClass("fa-eye");
			dem = true;
		}
	});
});

// type sex 

$(document).ready(function(){

	$("#input_6").change(function(){
		if($(this).val() == "Nam"){
			$("#img1").css({"z-index" : "1000" , "animation-name" : "animate"});

		}else{
			$("#img1").css("z-index" , "1");
			$("#img1").removeAttr("style");
		}
		if($(this).val() == "Nữ"){
			$("#img2").css({"z-index" : "1000" , "animation-name" : "animate"});
		}else{
			$("#img2").css("z-index" , "1");
			$("#img2").removeAttr("style");

		}
	});

});

