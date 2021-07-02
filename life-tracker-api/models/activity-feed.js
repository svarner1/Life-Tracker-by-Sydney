// In the models/activity-feed.js
// Import the bd and create an ActivityFeed class and export it
// Add a single static, async method to the class called displayFeed
// Should run a SQL query that searches the database for nutrition, 
//  sleep, and exercise data and returns it


const db = require("../db")

class ActivityFeed {
  static async displayFeed() {
    const exerciseResult = await db.query(`
      SELECT total_minutes
      FROM logged_exercise;
    `)

    const nutritionResult = await db.query(`
      SELECT calories
      FROM logged_nutrition;
    `)

    const sleepResult = await db.query(`
      SELECT total_duration
      FROM logged_sleep;
    `)
    
    return exerciseResult.rows && nutritionResult.rows && sleepResult.rows
  }
}

module.exports = ActivityFeed
