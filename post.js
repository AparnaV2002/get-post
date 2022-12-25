 http=require('http');
 querystring=require('querystring');
http.createServer(function(req,res){
    var data='';
    req.on('data',function(chunk){
        console.log(chunk);
        data+=chunk;

    });
    req.on('end',function(){
        qs=querystring.parse(data);
        console.log(qs);
        var name=qs.name;
        var username=qs.username;
        var mail=qs.mail;
        var gender=qs.gender;
        var state=qs.state;
        var address=qs.address;
        var mbl=qs.mbl;
        res.write("<html><body style=background-color:violet; ><table border='10'style=background-color:blue;margin-left:auto;margin-right:auto;>");
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
    });
}).listen(8080);
console.log("server started");