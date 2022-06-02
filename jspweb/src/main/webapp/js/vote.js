function likevote(){
	alert("통신중");
	
	let likevoteno = $("likevoteno").val(); 
	//투표 번호값 
	let loginid= $("loginid").val();
	 //해당 플랜에 참여자 (로그인한 세션값)
	let likeindex = $("likeindex1").val();

	
	//좋아요

	$.ajax({
	url: "likevote",
	data: { 
		"likevoteno" : likevoteno,
		"loginid" : loginid,
		"likeindex": dislikeindex},
	success:function(re){
			if(re==1){
				alert("투표성공") 
			}else{alert("투표실패")  }	
	   }
	
});

}


function dislikevote(){
	alert("통신중");
	
	let likevoteno = $("likevoteno").val(); 
	//투표 번호값 
	let loginid= $("loginid").val();
	 //해당 플랜에 참여자 (로그인한 세션값)
	let likeindex = $("likeindex1").val();

	
	//좋아요

	$.ajax({
	url: "likevote",
	data: { 
		"likevoteno" : likevoteno,
		"loginid" : loginid,
		"likeindex": dislikeindex},
	success:function(re){
			if(re==1){
				alert("투표성공") 
			}else{alert("투표실패")  }	
	   }
	
});

}
