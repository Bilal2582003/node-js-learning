var http = require('http');
function myloop(req,resp){
resp.write("Hello bilal ni hao, ni de mingze han haoting")
resp.end();
}
http.createServer(myloop).listen(2500);