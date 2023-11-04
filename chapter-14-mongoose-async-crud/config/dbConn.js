const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            dbName: "CompanyDB",
            //useUnifiedTopology: true,
            useNewUrlParser: true,
            maxpoolsize: 50,
            wtimeoutms: 2500,
        })
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;