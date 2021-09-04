const TopCord = require("../src")

const TOKEN = ""


async function main() {
    const topcord = new TopCord({
        botToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib3RJZCI6Ijg2MTIzODgzMjg4MzE3MTMzOSIsImlhdCI6MTYzMDc1NTE3NiwiZXhwIjoxNjYyMjkxMTc2fQ.oU4u2ZOuOhlmIOGxXPHNIc5Xtq8cczWHRUawxgYdL9g",
        apiToken: "ODYxMjM4ODMyODgzMTcxMzM5.YOG5Kg.r3hroxYEd4jql876HsccenET9o4"
    })
    
    console.log(await topcord.setBotGuilds("861238832883171339", 80))
}

main()