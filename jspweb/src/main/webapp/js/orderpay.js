var IMP = window.IMP;
IMP.init("imp82468735");
let jsonarray ; 
let totalpay = 0;

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
			console.log(result);
			console.log(jsonarray);
			console.log(jsonarray.length);
			for(let i = 0 ; i <jsonarray.length ; i++){
				totalpay += jsonarray[i]['totalprice'];
			}
			alert(totalpay);
		}
	})	
}

function payment(){
	IMP.request_pay({ // param
		pg: "html5_inicis",		// 결제 대행회사
		pay_method: "card",		// 결제방식
		merchant_uid: "ORD20180131-0000011",	// 주문번호[별도]
		name: "영근이가게",		//홈페이지 이름 [결제 이름]
		amount: totalpay,		// 총 주문금액
		buyer_email: "gildong@gmail.com", 		// 주문하는 이메일
		buyer_name: "홍길동",		// 주문하는 이름
		buyer_tel: "010-4242-4242", 	// 주문자 전화번호
		buyer_addr: "서울특별시 강남구 신사동",	// 주문자 주소
		buyer_postcode: "01181" 	// 주문자 우편번호
		}, function (rsp) { // callback
		if (rsp.success) { // 결제 성공시 로직
	
		} else { // 결제 실패 시 로직
			alert("결제 완료");
		}
	});
}