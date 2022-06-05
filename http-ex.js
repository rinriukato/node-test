const http = require('http')


// Req - Incoming request (i.e give webpage)
// Res - Response, what you send back to that client
const server = http.createServer( (req, res) => {
    if (req.url === '/' ) {
        res.end('Welcome to our home page')
    }

    if (req.url === '/about') {
        res.end('Here is our about page!');
    }
    res.end('UH oh')
})

// Port - Set what port to listen for
server.listen(5000)