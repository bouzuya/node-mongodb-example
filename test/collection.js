var mongodb = require('mongodb');

// http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
describe('Collection', function() {
  var users;

  beforeEach(function(done) {
    mongodb.MongoClient.connect('mongodb://localhost:27017/default', function(err, db) {
      users = db.collection('users');
      done();
    });
  });

  describe('insert/remove', function() {
    it('', function(done) {
      users.insert({ name: 'bouzuya' }, function(err, result) {
        if (err) return done(err);
        result.should.be.an.instanceOf(Array);
        result.length.should.be.equal(1);
        users.remove({ name: 'bouzuya' }, function(err, result) {
          if (err) return done(err);
          result.should.be.equal(1);
          done();
        });
      });
    });
  });

  describe('insert/remove/count', function() {
    it('', function(done) {
      users.insert([{ name: 'bouzuya-1' }, { name: 'bouzuya-2' }, { name: 'bouzuya-3' }], function(err, result) {
        if (err) return done(err);
        result.should.be.an.instanceOf(Array);
        result.length.should.be.equal(3);
        users.count(function(err, count) {
          if (err) return done(err);
          count.should.be.equal(3);
          users.remove({ name: /^bouzuya-[13]/ }, function(err, result) {
            if (err) return done(err);
            result.should.be.equal(2);
            users.count(function(err, count) {
              if (err) return done(err);
              count.should.be.equal(1);
              done();
            });
          });
        })
      });
    });
  });

});
