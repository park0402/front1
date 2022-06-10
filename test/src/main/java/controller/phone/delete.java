package controller.phone;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.PhonebookDao;

/**
 * Servlet implementation class delete
 */
@WebServlet(name = "phonedelete", urlPatterns = { "/phonedelete" })
public class delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int m_no =  Integer.parseInt( request.getParameter("m_no") ) ;
		boolean result = PhonebookDao.getphonebookDao().phonebookdelete(m_no);
		if( result ) { 
			response.getWriter().print(1); 
		}
		else { response.getWriter().print(2);}
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
