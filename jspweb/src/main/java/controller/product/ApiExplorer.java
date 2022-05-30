import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.io.BufferedReader;
import java.io.IOException;

public class ApiExplorer {
    public static void main(String[] args) throws IOException {
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/4050000/envrmtvltn/getEnvrmtvltn?serviceKey=WZZGS69k7Yz%2Bb5a7XEd%2FRBxm1U3Pz5rBWtJ7OqjAw1wuaRYugmx7uQ4OyR9dnvOZcdanCz7TMdxNzw9tHqxKQw%3D%3D&pageNo=3&numOfRows=5"); /*URL*/
        urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=서비스키"); /*Service Key*/
        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("3", "UTF-8")); /*페이지 번호*/
        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("5", "UTF-8")); /*한 페이지 결과 수*/
        urlBuilder.append("&" + URLEncoder.encode("srch_bgn_dt","UTF-8") + "=" + URLEncoder.encode("20210111", "UTF-8")); /*검색 시작일 (yyyymmdd)*/
        urlBuilder.append("&" + URLEncoder.encode("srch_end_dt","UTF-8") + "=" + URLEncoder.encode("20211100", "UTF-8")); /*검색 종료일 (yyyymmdd)*/
        urlBuilder.append("&" + URLEncoder.encode("gu","UTF-8") + "=" + URLEncoder.encode("처인구", "UTF-8")); /*환경법규위반업체가 위치한 구 (처인구/수지구/기흥구)*/
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());
    }
}