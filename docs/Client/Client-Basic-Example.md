# Example

```js
const { ProtonClient } = require("proton-io");
const { Intents } = require("discord.js");

class Client extends ProtonClient {
   super({
        owners:["Client owner id(s)"],
        intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0))
    });
}

const client = new Client();

client.login("YOUR TOKEN HERE");
```

## Links
[WEBSITE](https://protonio.js.org/)<br>
[DISCORD](https://discord.gg/64ptq3C9ta)<br>
[OTHER-DOCS](https://github.com/AktilaCengiz/protonio/tree/master/docs)