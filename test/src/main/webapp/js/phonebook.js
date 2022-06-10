let pass = [ false , false , false]; 
//입력상자 유효성확인체크

$(function(){
		$("#m_name").keyup( function(){ 
		let mname = $("#m_name").val(); // 해당 id의 데이터 가져오기
		let namej = /^[가-힣]{2,10}$/;	// 한글만 2~10 정규표현식
		if( namej.test(mname) ){
			$("#namecheck").html( "사용가능한 이름입니다." );		pass[0] = true;
		}else{
			$("#namecheck").html( "한글 2~10 사이만 가능합니다." );  pass[0] = false;
		}
	 }); // keyup end 
	 
	 	$("#m_phone").keyup( function(){ 
		let mphone = $("#m_phone").val();
		
		let phonej = /^([0-9]{2,3})-([0-9]{3,4})-([0-9]{3,4})$/;
		if( phonej.test(mphone) ){
			$("#phonecheck").html( "사용가능한 번호 입니다." );		pass[1] = true;
		}else{
			$("#phonecheck").html( "지역번호-0000-0000 형식으로 입력해주세요." ); pass[1] = false;
		}
	 }); // keyup end 
	 
	 	$("#m_note").keyup( function(){ 
		let mnote = $("#m_note").val(); // 해당 id의 데이터 가져오기
		let notej = /^[가-힣a-zA-Z0-9]{2,10}$/;	//2~10 정규표현식
		if( notej.test(mnote) ){
			$("#notecheck").html( "정상적인 입력 입니다." );		pass[2] = true;
		}else{
			$("#notecheck").html( "2~10 글자 사이만 가능합니다." );  pass[2] = false;
		}
	 }); // keyup end 
	
	
	
	
	
});


function signup(){
	// pass 배열이 모두 true이면 폼 전송 
	let check = true;
	for( let i = 0 ; i<pass.length ; i++ ){
		if( pass[i] == false ) check = false;
	}
	// js에서 form 전송하는 방법**
	if( check ) document.getElementById("phonebookform").submit();
	else{ alert("필수입력 사항이 입력되지 않습니다."); }
}




function phonedelete( M_no ){
	$.ajax({
		url : "../delete",
		data : { "M_no" : M_no } , 
		success : function( result ){
			if( result == 1 ){
				alert("삭제 완료 되었습니다.");
				// js에서 하이퍼링크 [ 페이지연결 ]
				// html :  <a href="경로">
				// js : location.href="경로">
				location.href="/jspweb/logout"; // 서블릿 
			}else{
				location.href="/jspweb/error.jsp"; // 페이지
			}
		}
	});
	
}


function phoneupdate( M_no ){
	$.ajax({
		url : "../update",
		data : { "M_no" : M_no } , 
		success : function( result ){
			if( result == 1 ){
				alert("수정완료 되었습니다.");
				// js에서 하이퍼링크 [ 페이지연결 ]
				// html :  <a href="경로">
				// js : location.href="경로">
				location.href="/jspweb/logout"; // 서블릿 
			}else{
				location.href="/jspweb/error.jsp"; // 페이지
			}
		}
	});
	
}