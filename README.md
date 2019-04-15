# RabbitMQ Javascript Example

## Requirement

* needs docker to run RabbitMQ server
* NPM and NodeJS

## installation

```
# clone from github
git clone https://github.com/AimeTPGM/HelloRabbitMQJs.git

# change directory
cd ~/your/path/to/HelloRabbitMQJs

# install dependency
npm install
```

## Usage

1. open Docker on your machine
2. run RabbitMQ in a docker container

```
docker run -d -p 5672:5672 -p 15672:15672 -p 5672:5672 --name rabbitmq rabbitmq:3.6.6-management
```

port 5672 will be exposed to localhost:5672 for accessing RabbitMQ

port 15672 will be exposed to RabbitMQ Dashboard (username: guest, password: guest)

3. run receiver

``` node receiver.js```

it will show like this in console

```
[*] Waiting for messages in hello
```

4. run sender

```node sender.js```

it will show like this in console

```
[x] Sent 'Hello World!'
```

then if you switch back to receiver console, you can see

```
[*] Waiting for messages in hello
[x] Received 'Hello World!'
```

if you run sender again, you will see more log for `[x] Received {your message}` :)