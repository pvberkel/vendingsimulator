'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log("req on /");
  res.send('Hello World...');
});

// support Header api-key and site-id
// support arguments ...
app.get('/machines', (req, res) => {
  if( "activity_status" in req.query ){
    // filter on activity_status
  }

  if( "location_id" in req.query ){
    // filter on location_id
  }

  let rawdata = fs.readFileSync('machines.json');
  let machines = JSON.parse(rawdata);
  res.json({code:200, result:machines});
});
// Add pagening support?

// support Header api-key and site-id
// No parameters
app.get('/machine/:id/products', (req, res) => {
  let rawdata = fs.readFileSync('products.json');
  let productDataJ = JSON.parse(rawdata);
  let productData = new Map(Object.entries(productDataJ));
  let products = productData.get(req.params.id);
  res.json({code:200, result:products});
});
// Add pagening support?

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
