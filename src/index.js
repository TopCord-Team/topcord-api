const axios = require("axios")
const fetch = require("node-fetch")

class TopCord {
    #tokens = {}
    #request = null
    #baseURL = 'https://api-bots.topcord.ru'

    constructor({ apiToken, botToken }) {
      this.#tokens = { apiToken, botToken }

      this.#request = axios.create({
          baseURL: this.#baseURL,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer: ${apiToken}`
          }
      })
    }

    /**
     * @description Return bot or undefined using TopCord API
     * @param {string | number} id ID of bot (which was added in TopCord) from Discord Developer Portal.  
     * @returns {Bot | undefined} 
    */
    async getBot(id) {
      try {
        const { data } = await this.#request.get(`/bots/${id}`)
        return data
      } catch({ response }) {
        return response.data
      }
    }

    /**
      * @description Return user or undefined using TopCord API
      * @param {string | number} id ID of user (which was logged in TopCord).  
      * @returns {User | undefined} 
    */
    async getUser(id) {
        try {
            const { data } = await this.#request.get(`/users/${id}`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    /**
    * @description Return user bots
    * @param {string} userId ID of user in discord who logged in TopCord
    * @returns {Array<Bot>} 
    */

    async getUserBots(id) {
        const data = await this.getUser(id)
        if (data.statusCode === 404) return data
        return data.bots
    }
    

    async getUserFollowers(id) {
        const data = await this.getUser(id)
        if (data.statusCode === 404) return data
        return data.followers
    }

    async getUserFollowing(id) {
        const data = await this.getUser(id)
        if (data.statusCode === 404) return data
        return data.following
    }

    async getUserComments(id) {
        const data = await this.getUser(id)
        if (data.statusCode === 404) return data
        return data.comments
    }

    async getAllBots(limit) {
        const data = await this.#request(`/bots/all${limit ? `?limit=${limit}` : ""}`)
        return data
    }

    async getTopBots(limit) {
        const data = await this.#request(`/bots/top${limit ? `?limit=${limit}` : ""}`)
        return data
    }

    async getNewBots(limit) {
        const data = await this.#request(`/bots/new${limit ? `?limit=${limit}` : ""}`)
        return data
    }

    async getBotOwner(id) {
        const data = await this.getBot(id)
        if (data.statusCode === 404) return data
        return data.owner
    }

    async getBotDevelopers(id) {
        const data = await this.getBot(id)
        if (data.statusCode === 404) return data
        return data.developers
    }

    async getBotTags(id) {
        const data = await this.getBot(id)
        if (data.statusCode === 404) return data
        return data.tags.map(({ name }) => name) 
    }

    async getBotComments(id) {
        const data = await this.getBot(id)
        if (data.statusCode === 404) return data
        return data.comments
    }


    async getBotRating(id) {
        try {
            const { data } = await this.#request(`/bots/${id}/rating`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getBotStats(id) {
        try {
            const { data } = await this.#request(`/bots/${id}/stats`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getBotVotes(id) {
        try {
            const { data } = await this.#request(`/bots/${id}/votes`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getBotGuilds(id) {
        try {
            const { data } = await this.#request(`/bots/${id}/guilds`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getBotsByQuery(query) {
        if (!query) throw new Error("You must provide a query!")
        try {
            const { data } = await this.#request(`/bots/search?query=${query}`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getAvailableTags() {
        try {
            const { data } = await this.#request(`/tags`)
            return data
        } catch({ response }) {
            return response.data
        }
    }

    async getBotsByTag(tag) {
        try {
            const res = await fetch(`${this.#baseURL}/tags/${tag}`)
            const data = await res.json()
            return data
        } catch(error) {
            return { message: error.code, character: tag }
        }
    }

    async getUserBots(id) {
        const data = await this.getUser(id)
        if (data.statusCode === 404) return data
        return data.bots
    }


    /**
      * @description Get user info
      * @param {string | number} token Token from TopCord Auth  
    */
    async me() {
        try {
            const { data } = await this.#request.get('/users/me')
            return data
        } catch({ response }) {
            return response.data
        }
    }


    async setBotGuilds(id, guilds) {
        try {
            const { data } = await this.#request.put(`/bots/${id}/guilds`, { 
                token: this.#tokens.botToken,
                guilds
            })
            return data
        } catch(e) {
            console.log(e)
            return await e.response.data
        }
    }
}

module.exports = TopCord