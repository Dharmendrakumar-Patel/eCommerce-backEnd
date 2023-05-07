const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'shop'
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(err));
}

module.exports = connectDB;

