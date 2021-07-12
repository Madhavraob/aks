const sinon = require("sinon");
var test = require('tape')
const { Kafka } = require('kafkajs')

const { run } = require("../testSource/kafka");
// const { getTheSecret } = require("../testSource/moduleUnderTest");
const dependencyModule = require("../testSource/dependencyModule");

test("when the secret is 3", function (tt) {
    tt.test("should be returned with a string prefix", function (t) {
        t.plan(1);
        const aa = sinon.stub(dependencyModule, "getSecretNumber").returns(3);
        sinon.stub(Kafka.prototype, "producer").returns({
            connect: () => {},
            send: () => {}
        });
        // sinon.stub(Kafka.prototype.producer, "connect").returns(3);
        // sinon.stub(Kafka.prototype.consumer, "connect").returns(3);
        // sinon.stub(Kafka.prototype.consumer, "subscribe").returns(3);
        sinon.stub(Kafka.prototype, "consumer").returns({
            connect: () => {},
            subscribe: () => {},
            run: (cb) => {
                cb.eachMessage({ topic: 'topic', partition: 'partition', message: 'message' })
            }
        });
        const result = run();
        // t.equal(result, "The secret was: 3");
        t.equal(aa.callCount, 1)
    });
});
