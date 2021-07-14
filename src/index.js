const fetch = require("node-fetch")
class TopCord {
    #token = ""
    #user  = {}
    
    constructor(token) {
        this.#token = token
        this.#getUserByToken(token)
    }

    /**
     * @description Return bot or undefined using TopCord API
     * @param {string | number} id ID of bot (which was added in TopCord) from Discord Developer Portal.  
     * @returns {Bot | undefined} 
    */
    async findBot(id) {

    }

    /**
      * @description Return user or undefined using TopCord API
      * @param {string | number} id ID of user (which was logged in TopCord).  
      * @returns {User | undefined} 
    */
    async findUser(id) {
    
    }

    

    /**
      * @description Get user info
      * @param {string | number} token Token from TopCord Auth  
    */
    async #getUserByToken(token) {

    }
}

module.exports = TopCord