// Навантажує процесор на кожен запит (аналог php-apache з hpa-example)
const http = require('http');
http.createServer((req, res) => {
  let x = 0;
  for (let i = 0; i < 3000000; i++) x += Math.sqrt(i);
  res.end('OK!\n');
}).listen(80, () => console.log('hpa-demo on :80'));
