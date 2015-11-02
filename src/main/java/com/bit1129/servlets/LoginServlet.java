package com.bit1129.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

public class LoginServlet extends HttpServlet{
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter pw = null;
        try {
            InputStream in = req.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(in));
            StringBuilder sb = new StringBuilder();
            String str;
            while((str = br.readLine()) != null) {
                sb.append(str).append(System.lineSeparator());
            }
            OutputStream stream = resp.getOutputStream();
            pw  = new PrintWriter(stream);
            pw.write(sb.toString());
        } finally {
            if (pw != null) {
                pw.close();
            }
        }
    }

    //For testing purpose, should not
    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String method = req.getParameter("method");
        if (method != null && "out".equals(method)) {
            resp.getWriter().write("Hello,From out.com");
        }
    }
}
