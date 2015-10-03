var express = require('express');
var path = require('path');
var app = express();
var discuss = require('./lib/discuss.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes start
 */
app.get('/getThread/:id', function (request, response) {
    discuss.getPost(request.params.id, 'threads', request, response);
});

app.get('/getComments/:id', function (request, response) {
    discuss.getPost(request.params.id, 'comments', request, response);
});

app.post('/newThread', function (request, response) {
    discuss.newThread(request.body.author, request.body.title, request.body.body, request, response);
});

app.post('/newComment', function (request, response) {
    discuss.newComment(request.body.id, request.body.author, request.body.title, request.body.body, request, response);
});

app.get('/getAllThreads', function (request, response) {
    discuss.getAllPosts('threads', request, response);
});
/*
 * Routes end
 */

/**
 * Setup server
 */
var server = app.listen(3000, function () {
  console.log('Starting Discuss! ');
});