package controller.phone;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.MemberDao;
import dao.PhonebookDao;


/*
 *    
 *  해당 클래스로 접근할수 있는 URL 정의[만들기]
 *  @WebServlet("/login") 
 *  
 *  *목적 ( 서로 다른 언어들간의 통신이 된다 ) VIEW <---> CONTROLLER
 *  
 *  view(html,jsp,js,css등) ---- 매핑 ( @WebServlet ) ----->  controller(java)
 *		// 1. 해당 클래스의 @WebServlet 어노테이션 이용해서 클래스의 URL 정의[만들기]
 *		// 2. VIEW에서 경로를 설정하여 정의된 클래스의 URL로 이동할수 있다.
 */

@WebServlet("/phonecheck")
public class phonecheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public phonecheck() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
		
		// 1. 요청 
		String m_no = request.getParameter("m_no");
		String m_name = request.getParameter("m_name");
		// 2. 객체화 ( 데이터가 적기 때문에 생략 )
		// 3. DB처리
		
		int result =  PhonebookDao.getphonebookDao().phonecheck( m_no , m_name );
		// 4. DB결과
		if( result == 1   ) { // 로그인 성공 
			// 로그인 성공시 세션 부여  [ 세션 : 서버에 메모리 할당=>모든 페이지에서 동일한 메모리 사용 가능 ] 
			HttpSession session = request.getSession(); // 1. Http 내장 세션 호출 [ JSP 생략 => 내장객체 ] 
	
			session.setAttribute("phone", m_no ); // 2. 세션에 값 저장 
								// 세션명 , 데이터
			response.sendRedirect("/test/phonebooklist.jsp");  // 페이지 전환
			
		}
		else if( result == 2 ) { // 아이디 혹은 비밀번호 다름
			response.sendRedirect("/test/error.jsp"); 
		}else { // DB 오류 
			response.sendRedirect("/test/error.jsp");
		}
		
		
		
		doGet(request, response);
	}

}







