const express = require('express');
const badges = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const {getAllBadges} = require('../queries/badgesQueries');

badges.get('/', async (req, res) => {   
    if (getAllBadges) {
        const allBadges = await getAllBadges();
        res.json(200).json(allBadges);
    } else {
        res.status(404).json({error: "No badges found"});
    } 
});

module.exports = badges;

