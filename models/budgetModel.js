const mongoose = require('mongoose')
const { Schema } = mongoose;

const budgetSchema = new Schema({
    budget:  {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('budget', budgetSchema);