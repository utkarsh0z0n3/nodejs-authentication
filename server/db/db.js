const mongoose = require('mongoose');
mongoose.set("strictQuery",false);

module.exports = async() => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conncted :  ${conn.connection.host}`);

    }
    catch(error)
    {
        console.log(error);
        console.log("could not connect to DB!");

    }

};
