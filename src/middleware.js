import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import App from './app';


export default (req, res) => {
  if (process.env.NODE_ENV == 'development') {
    res.status(200).send(`
      <!doctype html>
      <html>
        <head>
          <title>Gumtree SSR app</title>
        </head>
        <body>
          <div id='app'></div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  } else if (process.env.NODE_ENV == 'production') {
    res.send(`
      <!doctype html>
      <html>
        <header>
          <title>Gumtree SSR app</title>
          <link rel='stylesheet' href='styles.css'>
        </header>
        <body>
          <div id='app'>${renderToString(<App />)}</div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  }
};
