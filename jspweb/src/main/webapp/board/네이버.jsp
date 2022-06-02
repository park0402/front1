<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
	<%@include file = "../header.jsp" %>
	<style type="text/css">
.search { position:absolute;z-index:1000;top:20px;left:20px; }
.search #address { width:150px;height:20px;line-height:20px;border:solid 1px #555;padding:5px;font-size:12px;box-sizing:content-box; }
.search #submit { height:30px;line-height:30px;padding:0 10px;font-size:12px;border:solid 1px #555;border-radius:3px;cursor:pointer;box-sizing:content-box; }
</style>


<div id="wrap" class="section">
  
  
    <div id="map" style="width:40%;  height:400px; margin:auto;">
        <div class="search" style="">
            <input id="address" type="text" placeholder="검색할 주소" value="979979" />
            <input id="submit" type="button" value="주소 검색" />
        </div>
    </div>
    <code id="snippet" class="snippet"></code>
</div>




	<%@include file = "../footer.jsp" %>

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tj0tvo35is&submodules=geocoder"></script>
<script type="text/javascript" src="/jspweb/js/naver.js"></script>
</body>
</html>



