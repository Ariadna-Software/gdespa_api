/*
 * auth.test.js
 * Used to test some authorization functions related
*/
var chai = require('chai'),
    chaiHttp = require('chai-http'),
    bpkg = require('gdespa_mysql'),
    app = require('../app').app;
var expect = chai.expect;

describe("Authorization", function () {
    it("should admit correct login", function (done) {
        chai.request(app)
            .get('/api/login?test=true&login=login&password=password')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.a.property("status", 200);
                expect(res).to.have.a.property("body");
                var response = res.body;
                expect(response).to.have.a.property("user");
                expect(response).to.have.a.property("api_key");
                done();
            });
    });
    it("should not admit incorrect login", function (done) {
        chai.request(app)
            .get('/api/login?test=true&login=***&password=***')
            .end(function (err, res) {
                expect(err).not.to.be.null;
                expect(res).to.have.a.property("status", 401);
                done();
            });
    });
})

