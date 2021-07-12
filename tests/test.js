const assert = require("assert");
const sinon = require("sinon");
var test = require('tape')

const dependencyModule = require("../testSource/dependencyModule");
const { getTheSecret } = require("../testSource/moduleUnderTest");

test("when the secret is 3", function (tt) {
    tt.test("should be returned with a string prefix", function (t) {
        t.plan(1);
        sinon.stub(dependencyModule, "getSecretNumber").returns(3);
        const result = getTheSecret();
        t.equal(result, "The secret was: 3");
    });
});