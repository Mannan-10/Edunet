const http = require('node:http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("You are on Main Page");
        res.end();
    }
    if (req.url === '/about') {
        res.write("You are on About Page");
        res.end();
    }

    });

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
