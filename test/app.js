/*jslint node: true */
'use strict';

var request = require('supertest'),
    app = require('../app.js'),
    links = require('../config/links.json');

describe('GET /', function() {
    it('should return 200 OK', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /resume', function() {
    it('should return 200 OK', function(done) {
        request(app)
            .get('/resume')
            .expect(200, done);
    });
});

describe('GET /avatar', function() {
    it('should return 302 REDIRECT', function(done) {
        request(app)
            .get('/avatar')
            .expect(302, done);
    });
});

describe('GET /background', function() {
    it('should return 302 REDIRECT', function(done) {
        request(app)
            .get('/avatar')
            .expect(302, done);
    });
});

function linkTest(path, url) {
    describe('GET /'+path+' from links.json:', function () {
        it('should redirect to '+url+' and return 302 REDIRECT', function (done) {
            request(app)
                .get('/' + path)
                .expect(302, done);
        });
    });
}

for (var path in links){
    linkTest(path, links[path]);
}

describe('GET /somerandompath', function() {
    it('should redirect to /', function(done) {
        request(app)
            .get('/somerandompath')
            .expect(302, done);
    });
});