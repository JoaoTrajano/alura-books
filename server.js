const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('curso de node');
});

server.listen(port, () => {
  console.log(`Servidor rodando na rota http://localhost:${port}`);
});
