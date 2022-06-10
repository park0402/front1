package controller.phone;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.MemberDao;
import dao.PhonebookDao;
import dto.Member;
import dto.Phone;

/**
 * Servlet implementation class write
 */
@WebServlet(name = "phonewrite", urlPatterns = { "/phonewrite" })
public class write extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public write() {
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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String m_name = request.getParameter("m_name");
		String m_phone = request.getParameter("m_phone");
		String m_note = request.getParameter("m_note");
		
	Phone phone = new Phone(0, m_name, m_phone,m_note,null);
	boolean result = PhonebookDao.getphonebookDao().phonebookwrite(phone);
	if( result ) { response.sendRedirect("/test/phone/phonebooksuccess.jsp"); }
	else { response.sendRedirect("/test/error.jsp"); 

	}
	}
}
