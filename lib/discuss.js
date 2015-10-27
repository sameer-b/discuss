var MongoClient = require('mongodb').MongoClient;

// Connection URL


exports.getPost = function(id, postType, request, response) {
	MongoClient.connect(url, function(err, db) {
        db.collection(postType).find({"id": id}).toArray(function(err,docs){
        	response.send(docs);
        	db.close();				
        });
    });
};

exports.newThread = function(author, title, body, request, response) {
	MongoClient.connect(url, function(err, db) {
        db.collection('threads').find({}).toArray(function(err,docs){
        	db.collection('threads').insert({
        		"id": docs.length, 
        		"author" : author,
        		"title" : title,
        		"body" : body,
        		"time" : new Date()
        	},function(err,result){
                   if(err) {
                   	response.send(err);
                   }else {
                   	response.send({id: docs.length});
                   }
                    db.close();
            });					
        });
    });
};

exports.newComment = function(id, author, title, body, request, response) {
	MongoClient.connect(url, function(err, db) {
        	db.collection('comments').insert({
        		"id": id, 
        		"author" : author,
        		"title" : title,
        		"body" : body,
        		"time" : new Date()
        	},function(err,result){
                   if(err) {
                   	response.send(err);
                   }else {
                   	response.send({id: result.length});
                   }
                    db.close();
            });					
    });
};

exports.getAllPosts = function(postType, request, response) {
	MongoClient.connect(url, function(err, db) {
		db.collection(postType).find({}).toArray(function(err, docs){
			response.send(docs);
		});
	});
};
