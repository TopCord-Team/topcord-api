const TopCord = require("../src")

const TOKEN = ""


async function main() {
    const topcord = new TopCord(TOKEN)
    const me = await topcord.me()
    console.log(me)
}

main()