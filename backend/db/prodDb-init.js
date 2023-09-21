const fs = require('fs');
const path = require('path');
const db = require('./dbConfig');

async function initializeDatabase() {
  try {
    // Read and execute Production DB SQL seed file
    // (create tables and add initial data)
    const seedSQL = fs.readFileSync(
      path.join(__dirname, '', 'prodDb-seed.sql'),
      'utf8'
    );
    await db.none(seedSQL);

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing the database:', error);
  } finally {
    // Disconnect from the database
    db.$pool.end();
  }
}

initializeDatabase();
