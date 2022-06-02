<%@page import="dao.MemberDao"%>
<%@page import="dao.ProductDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
</head>
<body>
   	<%@include file = "header.jsp" %>
   <div class="container">

         <div>
		<% 
		String mid = (String)session.getAttribute("login");
		int mno = MemberDao.getmemberDao().getmno(mid);
		%>
			
		<% // 만약에 로그인이 있을경우
							if( mid !=null ){
		%>
		
		<button id="up_btn" onclick="vote('<%=mid%>')" > ♥</button>
		<button id="down_btn" onclick="vote('<%=mid%>')"  > ♡</button>
		<% }else{  %>
		로그인을 먼저해주세요
		<% }  %>
			
         </div>
      
   </div>
   	<script type="text/javascript" src="/jspweb/js/vote.js"></script>
   
      	<%@include file = "footer.jsp" %>
   
</body>
</html>