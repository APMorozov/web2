const http = require('http');
const fs = require('fs'); 
const path = require('path');  


const server = http.createServer((req, res) => {
  console.log('Клиент запросил:', req.url);
  
 
  let filePath = '.' + req.url; 
  if (filePath === './') filePath = './index.html';
  

  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  };
  const contentType = mimeTypes[ext] || 'text/plain';
  

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Файл не найден! 🚫');
      } else { 
        res.writeHead(500);
        res.end('Ошибка сервера: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000 🚀');
});