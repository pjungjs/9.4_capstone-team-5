const db = require('../db/dbConfig');

/** Badges
 * GET all
 * GET by type
 */

const getAllBadges = async () => {
  try {
    const allBadges = await db.any('SELECT * FROM badges');
    return { success: true, payload: allBadges };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const getBadgesByType = async (badgeType) => {
  try {
    const badgesByType = await db.any(
      'SELECT * FROM badges WHERE badge_type = $1;',
      badgeType
    );
    return { success: true, payload: badgesByType };
  } catch (error) {
    return { success: false, payload: error };
  }
};

module.exports = { getAllBadges, getBadgesByType };
