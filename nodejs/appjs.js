const http = require('http');
const os=require('os');

const port=8080;
const serverstart=new Date().toString();

var hostname=os.hostname();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('I am running since '+serverstart+'\n');
  res.end("Hostname of the server is " + os.hostname() + '\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
