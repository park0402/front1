<%@page import="java.util.TreeSet"%>
<%@page import="java.util.Set"%>
<%@page import="dto.Stock"%>
<%@page import="java.text.DecimalFormat"%>
<%@page import="dto.Product"%>
<%@page import="java.util.ArrayList"%>
<%@page import="dao.ProductDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

</head>
<body>

	<%@include file = "header.jsp" %>
	<div class="container">
				<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="img/널디1.jpg" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-item">
		      <img src="img/널디2.jpg" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-item">
		      <img src="img/널디1.jpg" class="d-block w-100" alt="...">
		    </div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Next</span>
		  </button>
</div>
		<div class="row adbox"> <!-- 광고 / 이벤트 -->
			<div class="col-md-6">
				<img alt="" src="img/mainad1.gif">
			</div>
			<div class="col-md-6">
				<img alt="" src="img/mainad2.jpg">
			</div>
		</div>
		<div class="main_box">	<!--베스 트-->
			<h6 class="main_title"> BEST </h6>
			<div class="row">
				<div class="col-md-3 best_box">
					<img alt="" src="img/널디베스트1.jpg">
				</div>
				<div class="col-md-3 best_box">
					<img alt="" src="img/널디베스트2.png">
				</div>
				<div class="col-md-3 best_box">
					<img alt="" src="img/널디베스트3.jpg">
				</div>
				<div class="col-md-3 best_box">
					<img alt="" src="img/널디베스트4.png">
				</div>
			</div>
		</div>
		<div class="main_box"> <!--  신상품 -->
			<h6 class="main_title"> NEW ARRIVAL </h6>
			
			<div class="row">
			<%
				ArrayList<Product> list = 
					ProductDao.getProductDao().getproductlist();
				for( Product p :  list ){
			%>
				<div class="col-md-4 best_box">
					<a href="product/productview.jsp?pno=<%=p.getPno()%>">
						<!-- 제품이미지 클릭시 상세페이지로 이동 => 제품번호  -->
						<img alt="" src="admin/productimg/<%=p.getPimg()%>">
					</a> 
					<div class="p_item">
						<div class="p_title"><%=p.getPname() %></div>
						<%	// 해당 제품의 모든 재고 꺼내오기 
							ArrayList<Stock> stocks =  ProductDao.getProductDao().getStock(p.getPno());
							// 해당 제품의 사이즈 목록 만들기 [ 중복 제거 = set 컬렉션 ]
							Set<String> sizelist = new TreeSet<>();
							for( Stock s : stocks ){ sizelist.add( s.getSsize() ); }
						%>
						<div class="p_size"> 
							<% for( String temp : sizelist  ){ // 해당 사이즈 목록 표시 %>
								<%=temp +" " %>
							<%} %>
						</div>
						<div class="row py-3">
						<%	// 천단위 쉼표 -> 형식 클래스 [ 정수 -> 문자열 ]
							DecimalFormat df = new DecimalFormat("###,### 원");
						%>
						<% if( p.getPdiscount() == 0 ){ // 할인이 없으면 %>
							<div class="p_price col-md-3"> <%= df.format( p.getPprice() ) %></div>
						<% }else{ // 할인이 있으면 %>	
							<%  Float price = p.getPprice() - ( p.getPprice()*p.getPdiscount() ) ;  %>
							<div class="p_discount"> <%= df.format( p.getPprice()) %></div>	
							<div class="p_price col-md-3"> <%=df.format( price ) %> </div>
						<%  } %>
							<div class="p_review col-md-3 offset-6"> 리뷰 : 412 </div>
						</div>
					</div>
				</div>
			<%} %>
			</div>
		</div>
		<div>	<!-- 실시간 구매후기 -->
			
		</div>
	</div>
	<%@include file = "footer.jsp" %>

</body>
</html>