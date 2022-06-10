<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@include file = "../header.jsp" %>
<h3> 회원 전화번호부 입력 페이지 </h3>
<div class="container">
<form id="phonebookform" action="../phonewrite" method="post"> 
 고객명: <input type="text" id = "m_name" name="m_name" placeholder="고객명">
 <!-- 확인체크 --><span id="namecheck"></span>
 전화번호: <input type="text" id = "m_phone" name="m_phone" placeholder="전화번호">
 <!-- 확인체크 --><span id="phonecheck"></span>
 메모사항: <input type="text" id = "m_note" name="m_note" placeholder="메모사항">
 <!-- 확인체크 --><span id="notecheck"></span>
 <button onclick="signup()" type="button">입력하기</button>

</form>
</div>







<script src="../js/phonebook.js" type="text/javascript"></script>
<%@include file = "../footer.jsp" %>

</body>
</html>