var should = require('should');
var mongodb = require('mongodb');

// http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
describe('MongoClient', function() {

  describe('constructor', function() {
    it('', function(done) {
      var server = new mongodb.Server('localhost', 27017);
      var client = new mongodb.MongoClient(server);
      done();
    });
  });

  describe('open/close', function() {
    it('', function(done) {
      var server = new mongodb.Server('localhost', 27017);
      var client = new mongodb.MongoClient(server);
      client.open(function(err, db) {
        if (err) return done(err);
        db.should.not.be.null;
        db.close();
        done();
      });
    });
  });

  describe('db', function() {
    it('', function(done) {
      var server = new mongodb.Server('localhost', 27017);
      var client = new mongodb.MongoClient(server);
      client.open(function(err, client) {
        if (err) return done(err);
        client.should.not.be.null;
        var users = client.db('users');
        users.should.not.be.null;
        client.close();
        done();
      });
    });
  });

  describe('MongoClient.connect/close', function() {
    it('', function(done) {
      var url = 'mongodb://localhost/';
      var callback = function(err, db) {
        if (err) return done(err);
        db.should.not.be.null;
        db.close();
        done();
      };
      mongodb.MongoClient.connect(url, callback);
    });
  });

});

