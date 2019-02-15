<%@ Page Language="C#" %>

<%
    var obj = Request;

    if (Request.Files.Count > 0)
    {
        //注意：即便在客户端选择了多个文件，也是一个一个传的
        HttpPostedFile file = Request.Files[0];
        
        //获取文件名
        string filename = System.IO.Path.GetFileName(file.FileName);

        //另存为
        file.SaveAs(Server.MapPath("uploads/" + filename));

        //返回结果
        Response.ContentType = "application/json";
        System.Web.Script.Serialization.JavaScriptSerializer jss = new System.Web.Script.Serialization.JavaScriptSerializer();
        string result = jss.Serialize(new { answer = "上传成功" });
        Response.Write(result);
    }
    else
    {
        Response.Write("没有发现需要上传的文件");
    }    
    
%>