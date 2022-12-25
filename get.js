http=require("http");
url=require("url");
function onRequest(req,res){
    var add=url.parse(req.url,true);
    console.log("Request for"+add+" received");
    var qs=add.query;
    var name=qs.name;
        var username=qs.username;
        var mail=qs.mail;
        var gender=qs.gender;
        var state=qs.state;
        var address=qs.address;
        var mbl=qs.mbl;
        res.write("<html><body style=background-color:tomato;background-image:url('img1.jpg'); ><table border='10'style=background-color:violet;margin-left:auto;margin-right:auto;>");
        res.write("<tr><th>NAME</th>");
        res.write("<td>"+name+"</td></tr>");

        res.write("<tr><th>USERNMAE</th>");
        res.write("<td>"+username+"</td></tr>");

        res.write("<tr><th>EMAIL</th>");
        res.write("<td>"+mail+"</td></tr>");

        res.write("<tr><th>GENDER</th>");
        res.write("<td>"+gender+"</td></tr>");

        res.write("<tr><th>STATE</th>");
        res.write("<td>"+state+"</td></tr>");

        res.write("<tr><th>ADDRESS</th>");
        res.write("<td>"+address+"</td></tr>");

        res.write("<tr><th>MOBILE</th>");
        res.write("<td>"+mbl+"</td></tr>");

        res.write("</table></body></html>");
        res.end();

}
http.createServer(onRequest).listen(7777);
console.log("Server has started..");