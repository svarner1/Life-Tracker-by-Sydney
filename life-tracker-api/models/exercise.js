const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")
class ExerciseData {
    static async listExerciseDataForUser(){
       const results = await db.query(
           `
            SELECT e.exercise_item_id,
                   e.name AS "Exercise Name",
                   e.intensity AS "Intensity",
                   e.duration AS "Duration",
                   e.users_id AS "UsersID",
                   u.email AS "UsersEmail"
            FROM exercise_activity AS e
                JOIN users AS u ON u.id = e.users_id
            ORDER BY exercise_item_id DESC
           `
       )
       return results.rows
    }


    static async createExerciseEntry({exerciseEntry, user}){
        //create a new exercise entry
        const requiredFields = ["duration", "intensity", "name"]
        requiredFields.forEach(field => {
            if(!exerciseEntry.hasOwnProperty(field)){
                throw new BadRequestError(`Required field - ${field} - missing from request body`)
            }
        })

        const results = await db.query(
            `
                INSERT INTO exercise_activity (duration, intensity, name, users_id)
                VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
                RETURNING exercise_item_id AS "Exercise Item Id",
                          duration AS "Duration",
                          intensity AS "Intensity",
                          name AS "Exercise Name",
                          users_id AS "userId"
            `, [exerciseEntry.duration, exerciseEntry.intensity, exerciseEntry.name, user.email]
        )
        return results.rows[0]
    }

    /*
        ** FIX FETCH ITEM METHOD IF NEEDED
    */
    static async fetchExerciseEntryById(exerciseEntryId){
        const results = await db.query(
            `
             SELECT e.exercise_item_id,
                    e.name AS "Exercise Name",
                    e.intensity AS "Intensity",
                    e.duration AS "Duration",
                    e.users_id AS "UsersID",
                    u.email AS "UsersEmail"
             FROM exercise_activity AS e
                 JOIN users AS u ON u.id = e.users_id
             WHERE e.id = $1
            `, [exerciseEntryId]
        )

        const item = results.rows[0]

        if(!item) {
            throw new NotFoundError()
        }

        return item
    }

    static async editExerciseEntry({}){
        //edit an individual exercise entry
    }
}

module.exports = ExerciseData