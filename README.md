<div align="center">
    <img width="1200px" src="/photo.png"/>
    <h1>@topcord/api</h1>
</div>

## Example
```js
const TopCord = require("@topcord/api")

const TOKEN = ""
async function main() {
    const api = new TopCord(TOKEN)
    const me = await api.me() // Get my current profile
    console.log(me)
}
```

## Getting started
```js
const TopCord = required("@topcord/api")
const api = new TopCord(token) // create instance
```
## Methods

#### Model "User"
__instance__.me() - get current account.

__instance__.getUser(__id__) - get user account from TopCord website.

__instance__.getUserBots(__id__) - get user bot list.

__instance__.getUserFollowers(__id__) - get list of user followers.

__instance__.getUserFollowing(__id__) - get list of user followings.

__instance__.getUserComments(__id__) - get list of comments which user with __id__ posted.

#### Model "Bot"

__instance__.getBot(__id__) - get bot from TopCord by ID.

__instance__.getAllBots(__limit?__) - get all verified bots.

__instance__.getTopBots(__limit?__) - get bots by votes count. 

__instance__.getNewBots(__limit?__) - get new verified bots.

__instance__.getBotOwner(__id__) - get owner of bot.

__instance__.getBotDevelopers(__id__) - get list of developers.

__instance__.getBotTags(__id__) - get list of tags.

__instance__.getBotComments(__id__) - get all comments of bot.

__instance__.getBotRating(__id__) - get rating of bot.

__instance__.getBotStats(__id__) - get stats of bot.

__instance__.getBotVotes(__id__) - get bot votes count.

__instance__.getBotGuilds(__id__) - get count of guilds.

__instance__.getBotsByQuery(__query__) - get list of bots by query.

__instance__.getAvailableTags() - list of available tags in monitoring with bots count.

__instance__.getBotsByTag(__tag__) - get bots by tag.
