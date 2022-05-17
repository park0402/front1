/* 칼라 select 목록이 변경 되었을때 */
$("#color_select").change( function(){
	
	let color = $("#color_select").val(); // 색상 
	let pno = $("#pno").val(); // 제품번호 
	
	$.ajax({ // 통신시 사용되는 데이터 타입 -> 문자열 / 첨부파일
		url : 'getstocksize' , 
		data : { 'pno' : pno , 'color': color } ,
		success : function( re ){
			
			let list = re.replace("{","");
			let itemlist = list.split(",");
			let html ="";
				html +="<option value=''>-[필수]옵션 선택-</option>";
			for(let item of itemlist){
				let color = item.split("=")[0];
				let amount = item.split("=")[1];
				html += "<option value='"+color+"'>"+color+"-"+amount+"</option>";
					
			}
			$("#size_select").html(html);	// id.html( )  : 새로운 데이터 
			// $("#size_select").append('<option>asdasd</option>'); // id.append( ) : 데이터 추가
		}
	});
});