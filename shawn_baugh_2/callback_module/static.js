var fs = require('fs');

//cars
//stylesheets/master.css

module.exports = function (request, response) {
    if(request.url.indexOf('.') == -1){
        //this is for html
        if(request.url == '/'){
            fs.readFile('views/index.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            });
        } else {
            fs.readFile('views' + request.url + '.html', 'utf8', function (errors, contents){
                if(!contents){
                    response.writeHead(404);
                    response.end('File not found!');
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.write(contents);
                    response.end();
                }
            });
        }
    } else {
        //css, js, or image
        var imgs = ['.tif', '.gif', '.jpeg', '.jpg', '.png']
        if(request.url.indexOf('.css') != -1){
            fs.readFile('.' + request.url, function (errors, contents) {
                if(!contents) {
                    response.writeHead(404);
                    response.end('File not found');
                } else {
                    response.writeHead(200, {'Content-Type' : 'text/css'});
                    response.write(contents);
                    response.end();
                }
                console.log(request.url);
            })
        }
        else if(request.url.indexOf('.js') != -1){
            fs.readFile('.' + request.url, function (errors, contents) {
                if(!contents) {
                    response.writeHead(404);
                    response.end('File not found');
                } else {
                    response.writeHead(200, {'Content-Type': 'text/javascript'});
                    response.write(contents);
                    response.end();
                }
                console.log(request.url);
            })
        }
        else
        for(var i = 0; i < imgs.length; i++){
            console.log(imgs[i]);
            if(request.url.indexOf(imgs[i]) != -1){
                fs.readFile('.' + request.url, function (errors, contents) {
                    if(!contents) {
                        response.writeHead(404);
                        response.end('File not found');
                    } else {
                        response.writeHead(200);
                        response.write(contents);
                        response.end();
                    }
                    console.log(request.url);
                })
            }
        }

    }
    //what is my server looking for?
    //.html? .css? an image?

}
