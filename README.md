# TopCord API

<div style="font-size: 20px;  background: #eeeeee; color: #5f5f5f; padding: 10px 40px; ">findBot(id)</div>
<p style="margin: 20px 0">Find bot by id in TopCord API</p>

<strong>Arguments</strong>
<div>
    <i style="color: #5ba7ff; font-weight: 600">id (string | number)</i>: The Bot ID .
<div>


<strong>Returns</strong>
<div>
<i style="color: #5ba7ff; font-weight: 600">
(Bot | undefined)
</i>: Returns the bot or undefined if bot not found.
</div>

<strong>Example</strong>
```js
import { findBot } from "@topcord/api"

findBot().then(bot => {
    // code
})
```