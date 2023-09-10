const db = require('../db/dbConfig')

// getAllBadges
const getAllBadges = async (req, res) => {
    try {
        const allBadges = await db.any("SELECT * FROM badges");
        return allBadges;
    } catch (err) {
        res.json({error:err});

    }  
} 

module.exports = { getAllBadges };
  
