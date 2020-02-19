var http = require('http');
var fs = require('fs');
var url = require('url');

function html (arquivo, response) {
  fs.readFile(__dirname + "/" + arquivo + ".html", function(err, html){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(html);
  });
}

var server = http.createServer(function(request, response){
  var result = url.parse(request.url, true);
  if(result.query.idade != null){
    if(result.query.idade >= 18){
      html('maior', response);
    } else {
     html('menor', response);
    }
  } else {
    html('form', response);
  }

  
});

server.listen(3000, function(){
  console.log("Server running")
})