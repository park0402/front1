<%@page import="java.util.ArrayList"%>
<%@page import="dao.PhonebookDao"%>
<%@page import="dto.Phone"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@include file ="../header.jsp" %>


		<h3>개인정보 수정하기</h3>
		
		<%  ArrayList<Phone> getphones = PhonebookDao.getphonebookDao().getphones();
				for( Phone phone : getphones ){  %>
		
		
		번호:<%=phone.getM_no() %> <br> 
		이름:<%=phone.getM_name()%> <br> 
		폰번호: <%=phone.getM_phone() %> <br> 
		메모사항 : <%=phone.getM_phone() %> <br> 
		<button onclick="phoneupdate(<%=phone.getM_no()%>)">수정</button>
		<button onclick="phonedelete(<%=phone.getM_no()%>)">삭제</button>
	
	<br> <br> 
		
		<%  }  %>
		

		
	<script src="../js/phonebook.js" type="text/javascript"></script>
		
	<%@include file ="../footer.jsp" %>		
</body>
</html>