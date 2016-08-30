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
    it("should admit correct login");
    it("should not admit incorrect login");
    it("should not admit incorrect api_key");
})

