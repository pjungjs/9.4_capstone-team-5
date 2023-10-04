const express = require('express');
const badges = express.Router();
const { getAllBadges, getBadgesByType } = require('../queries/badgesQueries');

badges.get('/', async (req, res) => {
  const allBadges = await getAllBadges();

  if (allBadges.success) {
    res.status(200).json(allBadges.payload);
  } else {
    res.status(400).json({
      error: `No badges found. ${allBadges.payload}`,
    });
  }
});

badges.get('/:badgeType', async (req, res) => {
  const { badgeType } = req.params;
  const badgesByType = await getBadgesByType(badgeType);

  if (badgesByType.success) {
    res.status(200).json(badgesByType.payload);
  } else {
    res.status(400).json(badgesByType.payload);
  }
});

module.exports = badges;
