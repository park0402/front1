
//게시물 작성 유효성 검사 체크 

	
	$("#btitle").keyup( function(){ 
		let btitle = $("#btitle").val(); // 해당 제목의 데이터 가져오기
		
		if( $("#btitle").val().length <= 1 ){
			$("#titlecheck").html( "제목은 2글자이상만 가능합니다." );		//pass[0] = false;
		}else{
			$("#titlecheck").html( "사용가능한 제목입니다" ); // pass[0] = true;
		}
	 }); // keyup end 


        function badwordcheck() {

            var word = document.getElementById("summernote").value;
           
            // 금칙어 적용
            var swearwords_arr = new Array("개자식","나쁜","씨발","대출","씨발","개새끼","멍청이");

            orgword = word.toLowerCase();
            awdrgy = 0;

            while (awdrgy <=swearwords_arr.length - 1) {

                if (orgword.indexOf(swearwords_arr[awdrgy]) > -1) {
                    alert(swearwords_arr[awdrgy] + "은(는) 금지어입니다. 등록 할 수 없습니다.");
                    return; 
                }
                awdrgy++;
            }
            return true;
        }


 // 문서 열렸을때 실행 함수 무조건 실행
 $(document).ready( function(){
	 $('#summernote').summernote({
    	placeholder: '내용 입력',
    	tabsize: 2,
   	 	minHeight : 250 , // 최소 높이
   	 	maxHeight : null , // 최대 높이 
   	 	lang : 'ko-KR'	// 메뉴 한글 버전 
	  });
});

function filedelete( bno ){
	
	// HTML에서 JS 로 변수 이동[통신]
		// 1. 메소드 인수로 이동 
		// 2. 태그의 value 혹은 html 이동  [ $("#bno").val();]
	alert("파일만삭제");
	// 비동기통신 = 페이지 전환이 없는 상태 DB통신 
	// JQUERY라이브러리의 AJAX 사용 
	$.ajax({
		url : "filedelete", /*서블릿통신 */ 
		data : { "bno" : bno }, /* 통신 데이터 : { 변수명 : 값 , 변수명2 : 값  } */
		success : function( result ){
			if( result == "1" ){ 
				alert("첨부파일삭제성공 ");
				location.reload(); // 현재 페이지 새로고침
			}
			else { alert("첨부파일삭제실패[관리자에게문의]")}
		}
		
	});
}

function replywrite( bno ){
	let rcontent = $("#rcontent").val();
	$.ajax({
		url: "replywrite" ,
		data: { "bno":bno , "rcontent" : rcontent  } ,
		success : function( result ){
			if( result == 1 ){
				 alert("댓글작성 되었습니다."); // 성공 메시지 알림 
				 $("#rcontent").val(""); // 작성 input 공백으로 초기화 
				 $("#replytable").load( location.href+" #replytable"); // 특정 태그 새로고침
				 /* 해당 replytable 의 불러오기 = replytable */
			}
			else{ alert("댓글작성이 실패했습니다."); }
		}
	});
	
}

function rereplyview( rno , bno , mid ){ // 대댓글 입력창 표시 메소드 
	// ' '  or " "	: 문자처리 	// '문자열' + 변수 + '문자열'
	if( mid == "null" ){ // 로그인 안되어 있으면
		alert("로그인후 작성이 가능합니다."); 
		return;
	}
	// JS 작성 공간 에서는 HTML 작성 불가능 --> HTML 문자처리 
		$("#"+rno).html(
			'<div class="row">'+
				'<div class="col-md-10">'+
					'<textarea id="rrcontent" class="form-control" rows=3></textarea>'+
				'</div>'+
				'<div class="col-md-2">'+
					'<button class="form-control py-4 my-1" onclick="rereplywrite('+rno+','+bno+')">대댓글 등록</button>'+
				'</div>'+
			'</div>'
		);	
}
function rereplywrite( rno , bno ){ // 대댓글 쓰기 메소드 
	let rrcontent = $("#rrcontent").val();
	$.ajax({
		url : "rereplywrite" , 
		data : { "rno" : rno , "bno" : bno  , "rrcontent" : rrcontent} ,
		success : function( result ){
			if( result == 1 ){
				 alert("대댓글 작성 되었습니다."); // 성공 메시지 알림 
				 $("#rrcontent").val(""); // 작성 input 공백으로 초기화 
				 $("#replytable").load( location.href+" #replytable"); // 특정 태그 새로고침
			}
			else{ alert("대댓글작성이 실패했습니다."); }
		}
	});
}

function replydelete( rno ){
	$.ajax({
		url : "replydelete" , 
		data : { "rno" : rno } , 
		success : function( result ){
			if( result == 1 ){
				alert("댓글 삭제 되었습니다.");
				$("#replytable").load( location.href+" #replytable"); // 특정 태그 새로고침
			}
			else{ alert("삭제 실패(관리자에게 문의)"); } 
		}
	});
}
















