const db = require('../config/connection');
const { Memory, User } = require('../models');
const memoryData = require('./memorydata.json');
const userData = require('./user.json');


db.once('open', async () => {
  try {
    await Memory.deleteMany({});
    await User.deleteMany({});
    await User.create(userData);

    for (let i = 0; i < memoryData.length; i++) {
      const { _id, username } = await Memory.create(memoryData[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            memory: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('completed!');
  process.exit(0);
});