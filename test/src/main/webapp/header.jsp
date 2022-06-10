<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>NERDY</title>
	<!-- 부트스트랩 css cdn -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
	<!-- 사용자정의 css -->
	<link href="/test/css/main.css" rel="stylesheet">
	<!-- 폰트어썸[ 아이콘 ]  -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
</head>
<body>
	<!--   헤더페이지[ 모든 페이지 사용되기 때문에 = 최상위에서 절대경로 ] -->

	<div class="container"> <!-- container : 박스권 -->
	
		<div class="py-4"> <!-- py : 위아래 패딩(안쪽여백) -->
			<div class="row"> <!-- row : 가로배치 -->
				<div class="col-md-4"> <!-- 그리드[12조각중 4 ] -->
					<a href="/test/main.jsp" id="logo_href" style=" position: fixed;z-index:9999;    top: 66px;    left: 30px;">
				<img src="/test/img/널디로고.png" alt="" id="logo"></a>
				</div>
				<div class="col-md-4 offset-4 d-flex justify-content-end header_topmenu"> <!-- offset 공백그리드 -->
				
					<ul class="nav"> <!-- nav : li 가로배치  -->
					 
						<li> <a href="/test/member/login.jsp" class="header_topmenu">로그인</a> · </li>
						<li> <a href="/test/member/signup.jsp"  class="header_topmenu">회원가입</a> · </li> 
				
			
					</ul>
				</div>
			</div>
		</div>  <!--  상단 메뉴 끝  -->
		
		<div class="navbar navbar-expand-md navbar-light bg-white">  <!--  본메뉴  -->
			<ul class="navbar-nav col-md-12 justify-content-between"> 
				<li class="nav-item"> <a href="#"  style="color: #7A2BDF;">  Man </a> </li>
				<li class="nav-item"> <a href="#" style="color: #7A2BDF;"> Woman </a> </li>
				<li class="nav-item"> <a href="#" style="color: #7A2BDF;"> 1+1 이벤트 </a> </li>
				
				<li class="nav-item dropdown"> <!-- dropdown : 드랍다운 -->
					 <a href="#"  style="color: #7A2BDF;"> 자유게시판 </a> <!--  data-bs-toggle="dropdown" : 해당 태그를 클릭했을때 드랍다운 열기  -->
					<!-- 드롭다운 -->
					<div class="dropdown-menu">	<!--  dropdown-menu : 드랍다운 내용물  -->
						<a class="dropdown-item" href="http://localhost:8099/test/board/boardlist.jsp?key=&keyword="> 드랍다운 메뉴 </a>
						<a class="dropdown-item" href="http://localhost:8099/test/board/boardlist.jsp?key=&keyword="> 드랍다운 메뉴 </a>
						<a class="dropdown-item" href="http://localhost:8099/test/board/boardlist.jsp?key=&keyword="> 드랍다운 메뉴 </a>
						<a class="dropdown-item" href="http://localhost:8099/test/board/boardlist.jsp?key=&keyword="> 드랍다운 메뉴 </a>
						<a class="dropdown-item" href="http://localhost:8099/test/board/boardlist.jsp?key=&keyword="> 드랍다운 메뉴 </a>
					</div>
				 </li>
				 
				<li class="nav-item"> 
					<input type="text" class="header_input" size="13"> 
					<a href="#"><i class="fas fa-search"></i></a>
				</li>
				<li class="nav-item"> <a href="#">장바구니<span class="shoppingbox">3</span></a></li>
			</ul>
		</div> <!-- 본 메뉴 끝 -->
		
	</div> <!--  메뉴 끝  -->
		
	<!-- 부트스트랩 js cdn -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
	<!-- 사용자정의 js -->
	<script src="/jspweb/js/main.js" type="text/javascript"></script>
	<!-- jquery 최신 cdn -->
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
	
</body>
</html>