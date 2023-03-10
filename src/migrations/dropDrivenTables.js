import db from '../database/database.connection.js';

export const up = async () => {
  try {
    const query = `
      DROP TABLE IF EXISTS customers, rentals, games;
    `;

    await db.query(query);
  }
  catch (error) {
    return error;
  }
};
