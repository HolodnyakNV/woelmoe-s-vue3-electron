const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');
 
// port - например 8080
const createServer = function (port) {

  server.use(express.static(path.join(__dirname, '../dist')));
   
  server.get('*', async (req, res) => {
      const context = {
        url: req.url || '/',
      }
   
      let html;
   
      try {
          html = await renderer.renderToString(context);
      } catch (err) {
          if (err.code === 404) {
              return res.status(404).send('404 | Page Not Found');
          }
          return res.status(500).send('500 | Internal Server Error');
      }
   
      res.end(html)
  })
   
  server.listen(port, () => {
    console.log(`Server started at ${port}`)
  });

};

module.exports.createServer = createServer;