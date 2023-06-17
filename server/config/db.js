const mongoose = require('mongoose');

const dbConnect = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log(`DB Connected: ${conn.connection.host}`.cyan.underline.bold);


};

module.exports = dbConnect;