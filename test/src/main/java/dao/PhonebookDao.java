package dao;

import java.util.ArrayList;

import dto.Board;
import dto.Phone;


public class PhonebookDao extends Dao {
	
	//자식클래스로 객체생성시 부모클래스 생성자 호출먼저하기
	public PhonebookDao() {
		super(); //부모클래스 생장자 호출
	}
	public static PhonebookDao phonebookDao = new PhonebookDao(); //dao 호출시 반복제거
	public static PhonebookDao getphonebookDao() { return phonebookDao; } 

	
	
	
	public boolean phonebookwrite(Phone phone ) {
		String sql= "insert into phonebook(m_name,m_phone,m_note)"+"value(?,?,?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, phone.getM_name());
			ps.setString(2, phone.getM_phone());
			ps.setString(3, phone.getM_note());

			ps.executeUpdate(); return true;
		} catch (Exception e) {System.err.println("전화기록부  DB오류");}return false;
		
	}
	
	
	public boolean phonebookupdate( Phone phone ) { 
		String sql = "update phonebook set m_name=? , m_phone=? , m_note=? where m_no = ?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString( 1 , phone.getM_name() );
			ps.setString( 2 , phone.getM_phone() );
			ps.setString( 3 , phone.getM_note() );
			
			ps.executeUpdate(); return true;
		}
		catch (Exception e) { System.out.println( e );} return false;
	}
	
	//폰 폰번호 매칭 
	public int phonecheck( String m_no , String m_name ) {
		 String sql = "select * from phonebook where m_no = '"+m_no+"' and m_name = '"+m_name+"'";
		// String sql = "select * from phone where m_name = ? and m_phone = ?";
		try {
			ps = con.prepareStatement(sql); 
			//ps.setString(1, mid); ps.setString(2, mpassowrd ); // ? 사용시 ?에 데이터 대입
			rs = ps.executeQuery(); if( rs.next() ) return 1; // 동일한 값이 있으면 1성공 
			return 2; // 동일한 값이 없으면 2실패 
		}catch (Exception e) {} return 3; // DB오류이면 3실패
	}
	
	public boolean phonebookdelete(int m_no) {

		String sql = "delete from phonebook where m_no="+m_no;
		try { ps = con.prepareStatement(sql); ps.executeUpdate(); return true;}
		catch (Exception e) {} return false;
	}
	

	
	
	
	public ArrayList<Phone> getphones() { 
		ArrayList<Phone> getphones = new ArrayList<Phone>();
		
		String sql = "select * from phonebook";
		
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				Phone phone = new Phone(
						rs.getInt(1),rs.getString(2), 
						rs.getString(3), rs.getString(4), 
						rs.getString(5) );
				getphones.add(phone);
			} return getphones;
		}catch(Exception e ) {} return null;
	}
}
