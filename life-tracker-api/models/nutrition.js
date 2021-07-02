const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class NutritionData {
    static async listNutritionDataForUser(){
        const results = await db.query(
            `
             SELECT n.nutrition_item_id,
                    n.food AS "Food Name",
                    n.category AS "Category",
                    n.quantity AS "Quantity",
                    n.calories AS "Calories",
                    n.users_id AS "UsersID",
                    u.email AS "UsersEmail"
             FROM nutrition_item AS n
                 JOIN users AS u ON u.id = n.users_id
             ORDER BY nutrition_item_id DESC
            `
        )
        return results.rows
    }

    static async createNutritionEntry({ nutritionEntry, user}){
        //create a new exercise entry
        const requiredFields = ["food", "category", "quantity", "calories", "image"]
        requiredFields.forEach(field => {
            if(!nutritionEntry.hasOwnProperty(field)){
                throw new BadRequestError(`Required field - ${field} - missing from request body`)
            }
        })

        const results = await db.query(
            `
                INSERT INTO nutrition_item (food, category, quantity, calories, image, users_id)
                VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email = $6))
                RETURNING nutrition_item_id AS "Nutrition Item Id",
                          food AS "Food Name",
                          category AS "Category",
                          quantity AS "Quantity",
                          calories AS "Calories",
                          image AS "Food Item Image",
                          users_id AS "userId"
            `, [nutritionEntry.food, nutritionEntry.category, nutritionEntry.quantity, nutritionEntry.calories, nutritionEntry.image, user.email]
        )
        return results.rows[0]
    }

    /*
        ** FIX FETCH ITEM METHOD IF NEEDED
    */
    static async fetchNutritionEntryById(nutritionEntryId){
        const results = await db.query(
            `
             SELECT n.nutrition_item_id,
                    n.food AS "Food Name",
                    n.category AS "Category",
                    n.quantity AS "Quantity",
                    n.calories AS "Calories",
                    n.users_id AS "UsersID",
                    u.email AS "UsersEmail"
             FROM nutrition_item AS n
                 JOIN users AS u ON u.id = n.users_id
             WHERE n.id = $1
            `, [nutritionEntryId]
        )
        
        const item = results.rows[0]

        if(!item) {
            throw new NotFoundError()
        }

        return item
    }

    static async editNutritionEntry({}){
        //edit an individual nutrition entry
    }
}

module.exports = NutritionData