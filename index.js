const http = require('node:http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\nDB UserName: ' + process.env.db_uname + '\nDB Password: ' + process.env.db_pwd + '\n' );
  
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
}); 