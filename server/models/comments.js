const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)

    },
    commentAuthur: {
      type: String,
      ref: `User`
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = commentSchema;