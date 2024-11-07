const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the PDF file for download
// app.get('/download', (req, res) => {
//   const filePath = path.join(__dirname, 'pdfs', 'payment_receipt.pdf');
//   const stat = fs.statSync(filePath);

//   res.writeHead(200, {
//     'Content-Type': 'application/pdf',
//     'Content-Length': stat.size
//   });

//   const readStream = fs.createReadStream(filePath);
//   readStream.pipe(res);
// });

app.get('/', function(req, res){
   
  const htmlfile = `${__dirname}/test.html`;
  res.sendFile(htmlfile, (err) => {
      if (err) {
        console.log(err);
      }
    });
});


app.get('/beit/dl', function(req, res){
    const file = `${__dirname}/assignments/dl_prac.zip`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });

app.get('/lp3t', function(req, res){
    const file = `${__dirname}/assignments/lp3byT.zip`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
