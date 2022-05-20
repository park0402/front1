let jsonarray ; /* JSON 형식의 변수를 선언 */
let sumprice = 0 ; /* 상품 총가격 */
let deliverypay = 0 ; /* 배송비 */
let totalpay = 0 ; // 총 주문액
let point = 0 ;

$(function(){
	getcart();
})

function getcart(){
	$.ajax({
		url : "../product/getcart",
		success :function(result){
			// js : json 객체내 key값 이용한 value 호출
				// 객체명[key] -> value 호출
				// jsonarray[i][key] -> json배열내 i번째 객체의 key의 값 호출
			jsonarray=result;
			tableview();
		}
	})	
}

/* json상태 업데이트 처리 메소드 */
function updatecart(){
	$.ajax({
		url : '../product/updatecart',
		data : {"json" : JSON.stringify(jsonarray)},
		success : function(result){
			if(result==1){
				getcart();
			}
			else{
				alert("통신 오류");
			}
		}
	})
}


function tableview(){
			let html = '<thead>'+
						'<tr>'+
						'<th width="60%">상품정보</th>'+
						'<th width="20%">수량</th>'+
						'<th width="20%">가격</th>'+
						'</tr>'+
						'</thead>';
			sumprice = 0;
			deliverypay = 0;
			totalpay = 0;
			for(let i = 0 ; i <jsonarray.length ; i++){
				sumprice += jsonarray[i]['totalprice'];
				html+=
				'<tr>'+
				'<td>'+
				'<div class="row">'+
				'<div class="col-sm-2"><img width="100%" src="/jspwebcws/admin/productimg/'+jsonarray[i]['pimg']+'"></div>'+
				'<div class="col-sm-10"><div class="pnamebox">'+jsonarray[i]['pname']+'</div><div class="optionbox">'+'<br>'+jsonarray[i]['scolor']+'/'+jsonarray[i]['ssize']+'</div></div>'+
				'</div>'+
				'</td>'+
				'<td class="align-middle">'+
				'<div class="row g-0">'+
				'<div class="col-sm-5 offset-3"><input readonly id="asd" value="'+jsonarray[i]['samount']+'" type="text" class="form-control" style="backgroundcolor:white"></div>'+
				'<div class="col-sm-2"><button onclick="amountincre('+i+')" class="amount_btn">▲</button><button onclick="amountdecre('+i+')" class="amount_btn">▼</button></div>'+
				'</div>'+
				'</td>'+
				'<td class="align-middle">'+
				'<div class="row g-0">'+
				'<div class="col-sm-8 pricebox">'+jsonarray[i]['totalprice'].toLocaleString()+' 원</div>'+
				'<div class="col-sm-4 deletebox"><button onclick="calcel('+i+')">x</button></div>'+
				'</div>'+
				'</td>'+
				'</tr>'
			}
			if(sumprice >= 70000){
				deliverypay = 0;
			}
			else{
				deliverypay = 2500;
			}
			if(jsonarray.length==0){
				html +=
				'<tr><td style="text-align : center" colspan="3">상품이 없습니다.</tr>';
				deliverypay = 0;	
			}

			totalpay = sumprice+deliverypay;
			// 포인트
			point = parseInt(sumprice*0.01); /* parseInt(데이터) : 형변환 */
			
			$("#carttable").html(html);
			$("#point").html(point.toLocaleString() + "점");
			$("#sumprice").html(sumprice.toLocaleString() + "원");
			$("#deliverypay").html(deliverypay.toLocaleString() + "원");
			$("#totalpay").html(totalpay.toLocaleString() + "원");

}

function calcel(i){
	if(i==-1){
		if(confirm('전체 삭제하시겠습니까?')){
			// confim("내용") : 확인/취소 버튼 알림창
				// 만약에 확인 눌렀을때 - true // 취소 - false
			for(let j = 0 ; j<jsonarray.length ; j++){
				deletecart(j);
			}		
		}
		return;
	}
	deletecart(i);
}

function amountincre(i){
	$.ajax({
		url : '../product/getamount',
		data : {"pno" : jsonarray[i]['pno'], "color" : jsonarray[i]['scolor'], "size" : jsonarray[i]['ssize']},
		success : function(result){
			if(jsonarray[i]['samount'] >= result){
				alert("재고가 부족합니다");
				return;
			}
			else{
				let price = (jsonarray[i]['totalprice']/jsonarray[i]['samount']);
				jsonarray[i]['samount']++;
				jsonarray[i]['totalprice'] = price*jsonarray[i]['samount'];
				updatecart();
			}
		}
	})	
}
function amountdecre(i){
	if(jsonarray[i]['samount']==1){
		alert("최소수량 입니다.");
		return;
	}
	else{
		let price = (jsonarray[i]['totalprice']/jsonarray[i]['samount']);
		jsonarray[i]['samount']--;
		jsonarray[i]['totalprice'] = price*jsonarray[i]['samount'];
		updatecart();
	}
}

function deletecart(i){
	$.ajax({
		url :'deletecart',
		data : {"cartno" : jsonarray[i]['cartno']},
		success : function(result){
			getcart();
		}
	})
}