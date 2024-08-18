const { createServer } = require("http");
const { createReadStream } = require("fs");
const { join, extname } = require("path");

createServer((req, res)=>{
    const
        { url } = req,
        file = url==="/"?"index.html":url,
        path = join(__dirname, )
}).listen(4444)