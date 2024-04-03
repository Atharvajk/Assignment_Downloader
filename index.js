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
app.get('/test', function(req, res){
    const file = `${__dirname}/payment_receipt.pdf`;
    res.download(file); // Set disposition and send it.
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
