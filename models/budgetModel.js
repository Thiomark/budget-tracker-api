const mongoose = require('mongoose')
const { Schema } = mongoose;

const budgetSchema = new Schema({
    budget:  {
        type: Number,
        required: true
    }
});

const deductionSchema = new Schema({
    amount:  {
        type: Number,
        required: true
    },
    description:  {
        type: Number,
        required: true
    },
    budgetsID:  {
        type: Number,
        required: true
    },
    image:  {
        type: Number,
        required: true
    },
    tag:  {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('budget', budgetSchema);