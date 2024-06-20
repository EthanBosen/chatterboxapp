const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const memorySchema = new Schema(
    {
        userId: {
            type: String,
        },

        memory: {
            type: String,
            required: true,
            trim: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },

        likes: {
            type: Boolean,
            default: 0,

        },
        
        tag: [{
            type: String,
        }],
        comments: [
            {
                comment: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: 1,
                    maxlength: 30,

                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp)
                },
                commentAuthur: {
                    type: String,
                    ref: `User`,
                    required: true,
                }

            }
        ]

    }
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;