const amqp = require("amqplib/callback_api");
const queue = 'hello';

amqp.connect("amqp://localhost:5672", (error, conn) => {
    conn.createChannel((err, ch) => {
        ch.assertQueue(queue, {durable: false});
        ch.sendToQueue(queue, new Buffer('Hello World!'));
        console.log(" [x] Sent 'Hello World!'");
        setTimeout(() => { conn.close(); process.exit(0) }, 500);
    });
});