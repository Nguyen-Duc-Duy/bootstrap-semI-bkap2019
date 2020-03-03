
$(document).ready(function(){

	// mũi tên
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


	// check form
	$("#see").click(function(){

		var value = $("#InputName").val();
		if(value == ""){
			$("#error_input1").text("Bạn chưa nhập mục này !");
			$("#er_input1").css("opacity" ,"1" );
			$("#InputName").css({"box-shadow": "0 0 2px 2px  red", "border" : "solid 1px red"});
			InputName.focus();

		}
	}); 


	$("#InputName").keyup(function(){
		var valu = $(this).val();
		var check = /^[0-9]{6}$/;
		var sai = /^[a-zA-Z]$/;
		var ckeck = check.test(valu);
		var dem = 0;
		if($("#InputName").val() == ""){
			$("#er_input1").css("opacity" ,"1" );
			$("#InputName").css({"box-shadow": "0 0 2px 2px  red", "border" : "solid 1px red"});
			$("#error_input1").text("Nhập mã đơn hàng để theo dõi đơn hàng của bạn !");
		}else if(sai.test(valu)){
			$("#er_input1").css("opacity" ,"1" );
			$("#InputName").css({"box-shadow": "0 0 2px 2px  #ff7f00", "border" : "solid 1px #ff7f00"});
			$("#error_input1").text("Sai định dạng ! Mã đơn hàng là số và gồm 6 chữ số !");
		}
		else if(ckeck){
			$("#InputName").css({"box-shadow":  "0 0 2px 2px  #31c431", "border" : "solid 1px green"} );
			$("#er_input1").css("opacity" , "0");
			dem = 1;

		}else{
			dem = 0;
		}

		if(dem == 1){
			$("#see").click(function(){
				location.assign("file:///D:/doan/doan/Duy/Gi%E1%BB%8F%20h%C3%A0ng/index.html");
			});

		}
	});
});





