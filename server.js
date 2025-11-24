const http = require('http');
const port = 5000;
const fs =  require('fs')
const path = require('path')

const server = http.createServer((req,res)=> {
   
    switch(req.url){
        case '/':
                fs.readFile('./src/index.html',(err,content)=> {
                    res.end(content)
                })
    
                break;
        case '/about':
                const aboutPath =  path.join(__dirname,'./src/about.html')
                fs.readFile(aboutPath,(err,content)=> {
                    res.end(content)
                })
            break;
        
        case '/services':
                const servicesPath =  path.join(__dirname,'./src/services.html')
                fs.readFile(servicesPath,(err,content)=> {
                    res.end(content)
                })
            break;
            
        case '/contact':
                const contactPath =  path.join(__dirname,'./src/contact.html')
                fs.readFile(contactPath,(err,content)=> {
                    res.end(content)
                })
            break;
            
        default :
                res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Page Not Found</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body class="bg-dark text-white">
                    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
                        <div class="text-center">
                            <h1 class="display-1">404</h1>
                            <h2 class="mb-4">Page Not Found</h2>
                            <a href="/" class="btn btn-primary btn-lg">Go Home</a>
                        </div>
                    </div>
                </body>
                </html>
                `)
    }

})

server.listen(port,() => console.log(`server listen on port number http://localhost:5000`))