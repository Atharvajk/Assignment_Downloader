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


app.get('/assign1', function(req, res){
    const file = `${__dirname}/assignments/DSBDAL_1.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign2', function(req, res){
    const file = `${__dirname}/assignments/asign2.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign2/v2', function(req, res){
    const file = `${__dirname}/assignments/DSBDA_assign2.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign3', function(req, res){
    const file = `${__dirname}/assignments/Assign3.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign4', function(req, res){
    const file = `${__dirname}/assignments/assign4.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign5', function(req, res){
    const file = `${__dirname}/assignments/asign5.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign6', function(req, res){
    const file = `${__dirname}/assignments/assign6.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign7', function(req, res){
    const file = `${__dirname}/assignments/assign7.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign8', function(req, res){
    const file = `${__dirname}/assignments/assign8-9.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign9', function(req, res){
    const file = `${__dirname}/assignments/assign8-9.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign10', function(req, res){
    const file = `${__dirname}/assignments/assign10.ipynb`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign11', function(req, res){
    const file = `${__dirname}/assignments/WordCount.txt`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });
app.get('/assign12', function(req, res){
    const file = `${__dirname}/assignments/weather.txt`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });

app.get('/papers', function(req, res){
    const file = `${__dirname}/assignments/papers.zip`;
    res.setHeader('Content-disposition', `attachment; filename=${file}`);
    res.download(file); // Set disposition and send it.
  });




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
