mqtt-session
=========

`Implemnt persistent session between connected clients with respect to broker`.

> To create persistent session we need to have same clientId.

> Both `Subscribe` and `Publish` should have QOS > 0

> Connect should have `clean` false so broker won't create new session since the clientId is maintained same

## test

Follow these steps for testing session.

* `node test` - which publishes the messages with time interval 5000ms. Topic is `timer`
* `node test2` - Which receives the messages for the topic `timer'
* `stop node test2` - Stop this application now we can see the messages are still publishing by the `node test` server but the messages our server 2 `node test2` is stopped.
* lets start `node test2` - we can see the previously sent messages of the server1 are also received 
* so we can conculde the persistent session is maintaind

## license

MIT
