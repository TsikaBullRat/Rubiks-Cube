const { createServer } = require("http");
const { createReadStream } = require("fs");
const { join, extname } = require("path");

createServer((req, res)=>{
    const
        { url } = req,
        file = url==="/"?"index.html":url,
        path = join(__dirname, "docs", file),
        ext = extname(path);
    let mime = "text/html"

    switch(ext){
        case ".css":
            mime = "text/css";
            break;
        case ".js":
            mime = "text/javascript";
            break;
        default:
            mime = "text/html";
            break;
    }

    createReadStream(path).pipe(res)
    
}).listen(4444)