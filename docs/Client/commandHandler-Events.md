## Proton-io Command Handler Events
in this tutorial we will learn about command handler events on proton-io. I hope that will be useful!
Firstly before we start learn, we will learn our events!

We have 4 different handler events on Proton-io. These and their explanations are given below:
- **commandNotFound:** if you are looking for unknown command event this event usable for you.
- **commandStarted:** Command Load starting event.
- **commandFinished:** Command Load finished event.
- **error:** if this event run some probably contain error your code.

we actually learned our command-handler-events but how can we use this events?
we split this section for this question.

we are actually use our client with events.

**commandNotFound** Event example:
```js
client.commandHandler.on("commandNotFound", (message, cmdName) => {
//two parameter return with unknown command Message and unknown message name.
return message.reply({content: `${cmdName} is not found`});
});
```

**commandStarted** Event example:
```js
```

**commandFinished** Event example:
```js
```
**error** Event example:
```js
```
