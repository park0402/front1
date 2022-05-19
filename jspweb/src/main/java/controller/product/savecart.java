package controller.product;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import controller.admin.categoryadd;
import dao.MemberDao;
import dao.ProductDao;
import dto.Cart;
import dto.Stock;

/**
 * Servlet implementation class savecart
 */
@WebServlet("/product/savecart")
public class savecart extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public savecart() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int pno = Integer.parseInt( request.getParameter("pno") );
		// json형식 문자열 통신 호출 
		String data = request.getParameter("json");
		System.out.println( data );
		// json형식 문자열 -> json형식 객체로 변환
		try {
			//  [ { } , { } , { } , { } ] 문자열 -> JSONArray
			// 1. 통신한 데이터를 JSONArray형으로 형변환
			JSONArray jsonArray = new JSONArray( data );
			////  [ { 0 } , { 1 } , { 2 } , { 3 } ~~ ] 문자열 -> JSONArray
			// 2. 반복문 이용한 jsonarray에서 jsonobject 호출 
			for( int i = 0 ; i<jsonArray.length(); i++ ) {
				// 3. jsonarray 배열내 i번째 객체 호출 
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				// 4. 해당 객체에 키 를 이용한 값 호출 
				System.out.println( jsonObject.get("pname") );
				System.out.println( jsonObject.get("color") );
				System.out.println( jsonObject.get("size") );
				System.out.println( jsonObject.get("amount") );
				System.out.println( jsonObject.get("pprice") );
				System.out.println( jsonObject.get("totalprice") );
				System.out.println( jsonObject.get("point") );
				//5.json-> Dto
				String mid = (String)request.getSession().getAttribute("login");
				int mno = MemberDao.getmemberDao().getmno(mid);
					//json객체명.get(키) ->반환 탕비 object -> String -> int 
				int amount = Integer.parseInt(jsonObject.get("amount").toString());
				int totalprice = Integer.parseInt(jsonObject.get("totalprice").toString());
			
			//sno
				String color = jsonObject.getString("color").toString();
				String size = jsonObject.getString("size").toString();
				int sno = 0;
				ArrayList<Stock> list = ProductDao.getProductDao().getStock(pno);
				for(Stock s : list) {
					if(s.getSsize().equals(size)&&s.getScolor().equals(color)) {
						sno =s.getSno();
					}
				}
				Cart cart = new Cart(0,amount,totalprice,sno,mno);
			}
		}catch (Exception e) {}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}