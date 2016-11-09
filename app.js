var express = require('express');
var request = require('request');
var path = require('path');
var parser = require('body-parser');
var webpack = require('webpack');
var webpackconfig = require('./webpack.config')
webpack(webpackconfig, function(err, stats){});

const app = express();
const port = process.env.PORT || 8080;
const _server = app.listen(port, function(){
  console.log('node server started, press CTRL + C to destroy it.');
})
app.use('/public', express.static(__dirname + '/dist'));
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
app.get('/index_bundle.js', function(req, res){
  res.sendFile(path.resolve(__dirname, 'dist/index_bundle.js'));
});
