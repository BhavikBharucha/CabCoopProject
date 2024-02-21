const mongoose = require('mongoose');

module.exports = () => {
    mongoose
        .connect('mongodb://localhost:27017', {
            dbName: 'dbcab'
        })
        .then(() => {
            //if connection success callback
            console.log('MongoDB connected.....');
        })
        .catch((err) => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });
    mongoose.connection.on('error', (err) => console.log(err.message));
};