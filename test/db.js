var mongodb = require('mongodb');

// http://mongodb.github.io/node-mongodb-native/api-generated/db.html
describe('Db', function() {
  var db;

  beforeEach(function(done) {
    mongodb.MongoClient.connect('mongodb://localhost:27017/default', function(err, openedDb) {
      db = openedDb;
      done();
    });
  });

  describe('close', function() {
    it('', function(done) {
      db.close();
      done();
    });
  });

  describe('createCollection/dropCollection', function() {
    it('', function(done) {
      db.createCollection('users', function(err, users) {
        if (err) return done(err);
        users.should.not.be.null;
        db.dropCollection('users', function(err, users) {
          if (err) return done(err);
          db.close();
          done();
        });
      });
    });
  });

  describe('ensureIndex/dropIndex', function() {
    it('', function(done) {
      db.createCollection('users', function(err, users) {
        if (err) return done(err);
        users.should.not.be.null;
        // ensure : create and enable
        db.ensureIndex('users', { id: 1 }, function(err, index) {
          if (err) return done(err);
          index.should.not.be.null;
          db.dropIndex('users', index, function(err, index) {
            if (err) return done(err);
            index.should.not.be.null;
            db.dropCollection('users', function(err, users) {
              if (err) return done(err);
              db.close();
              done();
            });
          });
        });
      });
    });
  });

});
