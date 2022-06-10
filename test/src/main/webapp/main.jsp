
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>
<body>

	<%@include file = "header.jsp" %>
	<div class="container">
		<div class="row">
		<div class="col-md-10">
		<div id="carouselExampleControlsNoTouching" class="carousel slide " data-bs-touch="false" data-bs-interval="false">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="img/널디1.jpg" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-item">
		      <img src="img/널디2.jpg" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-itm">
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
		</div>
		
		<div class="col-md-2">
		<br><br><br><br>
		 <img src="img/랭킹1.png" alt="...">
		</div>
		</div>
	</div>
	<%@include file = "footer.jsp" %>

</body>
</html>