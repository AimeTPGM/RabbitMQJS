const amqp = require("amqplib/callback_api");
const queue = 'hello';

amqp.connect("amqp://localhost:5672", (error, conn) => {
    conn.createChannel((err, ch) => {
        ch.assertQueue(queue, {durable: false});
        console.log(" [*] Waiting for messages in %s.", queue);
        ch.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    });
});