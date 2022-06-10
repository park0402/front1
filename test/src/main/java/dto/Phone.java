package dto;

public class Phone {
	
	private int m_no ;
	private String m_name;
	private String m_phone;
	private String m_note;
	private String m_date;
	
	public Phone() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Phone(int m_no, String m_name, String m_phone, String m_note, String m_date) {
		super();
		this.m_no = m_no;
		this.m_name = m_name;
		this.m_phone = m_phone;
		this.m_note = m_note;
		this.m_date = m_date;
	}
	public int getM_no() {
		return m_no;
	}
	public void setM_no(int m_no) {
		this.m_no = m_no;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public String getM_phone() {
		return m_phone;
	}
	public void setM_phone(String m_phone) {
		this.m_phone = m_phone;
	}
	public String getM_note() {
		return m_note;
	}
	public void setM_note(String m_note) {
		this.m_note = m_note;
	}
	public String getM_date() {
		return m_date;
	}
	public void setM_date(String m_date) {
		this.m_date = m_date;
	}
	
	@Override
	public String toString() {
		return "Phone [m_no=" + m_no + ", m_name=" + m_name + ", m_phone=" + m_phone + ", m_note=" + m_note
				+ ", m_date=" + m_date + "]";
	}
	
	

}
