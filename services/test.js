const testMigrations = require('../migrations/test');

const test = async (req, res) => {
  try {
    const selectedUser = await testMigrations.test();
    res.status(200).json(selectedUser);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { test };
