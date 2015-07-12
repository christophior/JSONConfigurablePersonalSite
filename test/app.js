var request = require('supertest'),
    app = require('../app.js'),
    dd = require('data-driven'),
    links = require('../links.json');

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

describe('GET links from links.json:', function() {
    for (var path in links){
        it('/'+path+' should redirect to ' + links[path], function(done) {
            request(app)
                .get('/' + path)
                .expect(302, done);
        })
    }
});

describe('GET /somerandompath', function() {
    it('should redirect to /', function(done) {
        request(app)
            .get('/somerandompath')
            .expect(302, done);
    });
});