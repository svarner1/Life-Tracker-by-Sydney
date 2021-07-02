const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class SleepData {
    static async listSleepDataForUser({id, sleep_entry_id}){
       //will return a list of all the 
    }

    static async createSleepEntry({sleepEntry, user}){
        //create a new sleep entry
        const requiredFields = ["beginning_date", "ending_date", "beginning_time", "ending_time"]
        requiredFields.forEach(field => {
            if(!sleepEntry.hasOwnProperty(field)){
                throw new BadRequestError(`Required field - ${field} - missing from request body`)
            }
        })
        
        //if there's time come back to calculate the hours, minutes, seconds, etc

        const results = await db.query(
            `
                INSERT INTO (beginning_date, ending_date, beginning_time, ending_time, users_id)
                VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
                RETURNING sleep_entry_id AS "Exercise Item Id",
                          beginning_date AS "Beginning Date,
                          ending_date AS "Ending Date,
                          beginning_time AS "Beginning Time",
                          ending_time AS "Ending Time",
                          users_id AS "userId"
            `, [sleepEntry.beginning_date, sleepEntry.ending_date, sleepEntry.beginning_time, sleepEntry.ending_time, user.email]
        )
        return results.rows[0]
    }

    static async fetchSleepEntryById({}){
        //
    }

    static async editSleepEntry({}){
        //
    }
}

module.exports = SleepData