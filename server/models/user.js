const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      Unique: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      Unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },

    password: {
      type: String,
      unique: true,
      minlength: 2,
    },

    memory: [{
      type: Schema.Types.ObjectId,
      ref: `memory`,
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
})

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;