const mongoose = require('mongoose');

// Define MongoDB models for Expenses, Articles, and Users
const expenseSchema = new mongoose.Schema({ category: String, amount: Number, date: Date, userId: mongoose.Types.ObjectId });
const Expense = mongoose.model('Expense', expenseSchema);

const articleSchema = new mongoose.Schema({ title: String, content: String });
const Article = mongoose.model('Article', articleSchema);

const userSchema = new mongoose.Schema({ username: String, maxSpendingLimit: Number, savings: Number });
const User = mongoose.model('User', userSchema);


module.exports = mongoose.model('Expense', expenseSchema);
module.exports = mongoose.model('Article', articleSchema);
module.exports = mongoose.model('User', userSchema);

module.exports = {
    Expense,
    Article,
    User,
};