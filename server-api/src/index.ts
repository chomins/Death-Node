// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

import { App } from './app'
// import { connect } from './database'

async function main() {
    const app = new App(5000);
    await app.listen();
}

main();