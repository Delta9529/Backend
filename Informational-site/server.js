const http = require('http');
const fs = require('fs').promises
const port = 8082

const serverFile = async(filepath,res,statuscode = 200) => {
    try {
        const data = await fs.readFile(filepath);
        res.writeHead(statuscode,{'content-type': 'text/html'});
        res.end(data);
    }catch{
        res.writeHead(500,{'content-type':'text/html'});
        res.end('Internal Server Error');
    }
}

const server = http.createServer((req,res) => {
        switch(req.url) {
            case '/':
                serverFile('index.html',res)
                break
            case '/about':
                serverFile('about.html',res)
                break
            case '/contact':
                serverFile('contact.html',res)
                break
            default:
                serverFile('index.html',res,404)
        }
});

server.listen(port,() => console.log('Server running at port 8082'))